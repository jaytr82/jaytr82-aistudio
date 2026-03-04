import express from "express";
import { loadEnv } from "./config/env.js";
import { errorHandler } from "./middleware/error-handler.js";
import { createRouter } from "./routes/index.js";

export function createApp({ db }) {
  const app = express();

  app.use(express.json());
  app.use(createRouter({ db }));

  app.use((_request, _response, next) => {
    const error = new Error("Route not found");
    error.statusCode = 404;
    next(error);
  });

  app.use(errorHandler);

  return app;
}

export function getRuntimeConfig(source) {
  return loadEnv(source);
}
