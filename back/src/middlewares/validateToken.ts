import { validateToken } from "../libs/json-web-token";

export async function validateTokenMiddleware(req: any, res: any, next: any) {
  if (!req.headers["authorization"]) return next();

  const token = req.headers["authorization"];
  if (!token) return next();

  const decodedToken = validateToken(token);
  if (decodedToken) {
    req.authPayload = decodedToken;
    return next();
  }

  return next();
}
