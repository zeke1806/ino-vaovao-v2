import { sign, verify } from "jsonwebtoken";

import { UserEntity } from "../../user/user.entity";
import configs from "../../configs";

interface Payload {
  id: number;
}
export interface AuthPayload {
  payload: Payload;
  iat: number;
  exp: number;
}

export function setTokens(user: UserEntity) {
  const sevenDays = 60 * 60 * 24 * 7 * 1000;

  const payload: Payload = {
    id: user.id,
  };

  const accessToken = sign({ payload }, configs.server.tokenSecret, {
    expiresIn: sevenDays,
  });

  return accessToken;
}

export function validateToken(token: string): AuthPayload | null {
  try {
    return verify(token, configs.server.tokenSecret) as AuthPayload;
  } catch {
    return null;
  }
}
