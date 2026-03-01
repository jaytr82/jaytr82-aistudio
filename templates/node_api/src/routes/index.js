import { Router } from "express";

export function createRouter() {
  const router = Router();

  router.get("/health", (_request, response) => {
    response.json({ status: "ok" });
  });

  router.get("/", (_request, response) => {
    response.json({ message: "Node API template" });
  });

  return router;
}
