// Resilient auth wrapper: using mock auth for development
// Better Auth will be enabled once production database is configured
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

// Disable Better Auth initialization until database is properly configured
// This prevents unhandled rejections during development
const USE_BETTER_AUTH = false;
let realAuth: any = null;

const DATA_DIR = path.resolve('data');
const AUTH_DB = path.join(DATA_DIR, 'auth.json');
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
if (!fs.existsSync(AUTH_DB)) fs.writeFileSync(AUTH_DB, JSON.stringify({ users: [], sessions: [] }, null, 2));

function readDb() {
  try {
    return JSON.parse(fs.readFileSync(AUTH_DB, 'utf8'));
  } catch (e) {
    return { users: [], sessions: [] };
  }
}

function writeDb(db: any) {
  fs.writeFileSync(AUTH_DB, JSON.stringify(db, null, 2));
}

function hashPassword(p: string) {
  return crypto.createHash('sha256').update(p).digest('hex');
}

const mockAuth = {
  async register({ email, password, username }: { email: string; password: string; username?: string }) {
    const db = readDb();
    if (db.users.find((u: any) => u.email === email)) throw new Error('User exists');
    const user = { id: crypto.randomUUID(), email, username: username || '', passwordHash: hashPassword(password), createdAt: new Date().toISOString() };
    db.users.push(user);
    writeDb(db);
    return { user };
  },
  async login({ email, password }: { email: string; password: string }) {
    const db = readDb();
    const user = db.users.find((u: any) => u.email === email && u.passwordHash === hashPassword(password));
    if (!user) throw new Error('Invalid credentials');
    const session = { id: crypto.randomUUID(), userId: user.id, createdAt: new Date().toISOString(), expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24).toISOString() };
    db.sessions.push(session);
    writeDb(db);
    return { session, user };
  },
  async getSessionFromRequest(req: Request) {
    try {
      const cookie = req.headers.get('cookie') || '';
      const match = cookie.match(/session=([^;]+)/);
      if (!match) return null;
      const sessionId = match[1];
      const db = readDb();
      const session = db.sessions.find((s: any) => s.id === sessionId);
      if (!session) return null;
      const user = db.users.find((u: any) => u.id === session.userId);
      return { session, user };
    } catch (e) {
      return null;
    }
  },
  async createSessionCookie(sessionId: string) {
    return `session=${sessionId}; Path=/; HttpOnly`;
  },
};

export const auth = realAuth ?? mockAuth;

export type User = any;
export type Session = any;
