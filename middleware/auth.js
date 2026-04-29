import { verifyToken } from "../utils/jwt";

export function authMiddleware(req) {
  const authHeader = req.headers.get("authorization");

  if (!authHeader) {
    return null;
  }

  const token = authHeader.split(" ")[1];

  try {
    const user = verifyToken(token);
    return user;
  } catch (error) {
    return null;
  }
}