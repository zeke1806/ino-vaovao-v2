import { Express } from "express";
import compression from "compression";
import cors from "cors";
import { validateTokenMiddleware } from "./validateToken";

export function applyMiddlewares(app: Express): Express { 
  app.use("*", cors());
  app.use(compression());
  app.use(validateTokenMiddleware);
  return app;
}
