import { defineMiddleware } from 'astro:middleware';
import { auth } from './lib/auth';

export const onRequest = defineMiddleware(async (context, next) => {
  // Better Auth session 驗證
  const s = await (auth.getSessionFromRequest ? auth.getSessionFromRequest(context.request) : null);

  if (s) {
    context.locals.user = s.user ?? null;
    context.locals.session = s.session ?? s.session ?? null;
  } else {
    context.locals.user = null;
    context.locals.session = null;
  }

  return next();
});
