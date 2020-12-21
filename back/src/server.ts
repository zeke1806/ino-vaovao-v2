import "dotenv/config";
import "reflect-metadata";

import { ApolloServer } from "apollo-server-express";
import { applyMiddlewares } from "./middlewares";
import configs from "./configs";
import { connectDB } from "./libs/typeorm";
import { createServer } from "http";
import depthLimit from "graphql-depth-limit";
import express from "express";
import schema from "./schema";

const app = express();

const server = new ApolloServer({
  schema,
  validationRules: [depthLimit(7)],
  context: ({ req, res }) => ({ req, res }),
});

applyMiddlewares(app);

server.applyMiddleware({ app, path: "/graphql" });

const httpServer = createServer(app);

const bootstrapServer = async () => {
  await connectDB();
  await httpServer.listen({ port: configs.server.port }, (): void =>
    console.log(
      `GraphQL is now running on http://localhost:${configs.server.port}/graphql`
    )
  );
};
bootstrapServer();
