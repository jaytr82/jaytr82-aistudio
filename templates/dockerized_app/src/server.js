import { createApp, getRuntimeConfig } from "./app.js";
import { createDatabaseClient } from "./db/pool.js";

const config = getRuntimeConfig(process.env);
const db = createDatabaseClient(config);

async function startServer() {
  await db.query("SELECT 1 AS connected");

  const app = createApp({ db });
  const server = app.listen(config.port, () => {
    console.log(`Server listening on port ${config.port}`);
  });

  const shutdown = async () => {
    await new Promise((resolve, reject) => {
      server.close((error) => {
        if (error) {
          reject(error);
          return;
        }

        resolve();
      });
    });

    await db.end();
  };

  process.on("SIGINT", () => {
    shutdown().finally(() => process.exit(0));
  });

  process.on("SIGTERM", () => {
    shutdown().finally(() => process.exit(0));
  });
}

startServer().catch((error) => {
  console.error("Failed to start server", error);
  process.exit(1);
});
