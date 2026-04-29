import { verifyToken } from "../utils/jwt";

export function auth(req) {
  const token = req.headers.get("authorization");

  if (!token) return null;

  try {
    return verifyToken(token.split(" ")[1]);
  } catch {
    return null;
  }
}