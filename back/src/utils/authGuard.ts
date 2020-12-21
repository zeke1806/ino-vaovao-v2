import { AuthPayload } from "../libs/json-web-token";
import { AuthenticationError } from "apollo-server-express";

export function authGuard(req: {
  authPayload: AuthPayload | null;
}): AuthPayload {
  if (!req.authPayload) throw new AuthenticationError("Must authenticate");
  return req.authPayload;
}
