import type { APIRoute } from 'astro';
import { auth } from '../../../lib/auth';

export const POST: APIRoute = async (context) => {
  const req = context.request;
  try {
    // attempt to parse JSON body
    const body = await req.json().catch(() => null);
    const action = body?.action || new URL(req.url).searchParams.get('action');

    if (action === 'register') {
      if (typeof auth.register === 'function') {
        const { user } = await auth.register(body);
        return new Response(JSON.stringify({ ok: true, user }), { status: 201 });
      }
    }

    if (action === 'login') {
      if (typeof auth.login === 'function') {
        const { session, user } = await auth.login(body);
        // set cookie if available
        let headers = new Headers();
        if (typeof auth.createSessionCookie === 'function') {
          const cookie = await auth.createSessionCookie(session.id);
          headers.append('Set-Cookie', cookie);
        }
        return new Response(JSON.stringify({ ok: true, user }), { status: 200, headers });
      }
    }

    // fallback: if auth exposes a handler (e.g., real Better Auth), delegate
    if (typeof (auth as any).handler === 'function') {
      return (auth as any).handler(req as Request);
    }

    return new Response(JSON.stringify({ ok: false, error: 'Unsupported auth action' }), { status: 400 });
  } catch (err: any) {
    return new Response(JSON.stringify({ ok: false, error: err?.message ?? String(err) }), { status: 500 });
  }
};

export const GET: APIRoute = async (context) => {
  // return session info
  try {
    if (typeof auth.getSessionFromRequest === 'function') {
      const info = await auth.getSessionFromRequest(context.request as Request);
      return new Response(JSON.stringify({ ok: true, ...info }), { status: 200 });
    }
    if (typeof (auth as any).getSession === 'function') {
      const info = await (auth as any).getSession(context.request);
      return new Response(JSON.stringify({ ok: true, ...info }), { status: 200 });
    }
    return new Response(JSON.stringify({ ok: false, error: 'Session not available' }), { status: 200 });
  } catch (err: any) {
    return new Response(JSON.stringify({ ok: false, error: err?.message ?? String(err) }), { status: 500 });
  }
};