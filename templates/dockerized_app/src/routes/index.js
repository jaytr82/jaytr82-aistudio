import { Router } from "express";

export function createRouter({ db }) {
  const router = Router();

  router.get("/health", async (_request, response, next) => {
    try {
      await db.query("SELECT 1 AS connected");
      response.json({ status: "ok", database: "connected" });
    } catch (error) {
      next(error);
    }
  });

  router.get("/", async (_request, response, next) => {
    try {
      const result = await db.query(
        "SELECT current_database() AS database_name, current_timestamp AS server_time",
      );
      const row = result.rows[0];

      response.json({
        message: "Dockerized app template",
        database: {
          status: "connected",
          name: row.database_name,
          serverTime: row.server_time,
        },
      });
    } catch (error) {
      next(error);
    }
  });

  return router;
}
