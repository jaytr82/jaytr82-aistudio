import test from "node:test";
import assert from "node:assert/strict";
import request from "supertest";
import { createApp, getRuntimeConfig } from "../src/app.js";

function createFakeDb(overrides = {}) {
  return {
    async query(sql) {
      if (sql.includes("current_database")) {
        return {
          rows: [
            {
              database_name: "app",
              server_time: "2026-03-04T00:00:00.000Z",
            },
          ],
        };
      }

      return {
        rows: [{ connected: 1 }],
      };
    },
    async end() {},
    ...overrides,
  };
}

test("GET /health returns database connectivity status", async () => {
  const app = createApp({ db: createFakeDb() });

  const response = await request(app).get("/health");

  assert.equal(response.statusCode, 200);
  assert.deepEqual(response.body, { status: "ok", database: "connected" });
});

test("GET / returns database metadata", async () => {
  const app = createApp({ db: createFakeDb() });

  const response = await request(app).get("/");

  assert.equal(response.statusCode, 200);
  assert.equal(response.body.message, "Dockerized app template");
  assert.equal(response.body.database.status, "connected");
  assert.equal(response.body.database.name, "app");
});

test("invalid port values are rejected", () => {
  assert.throws(
    () => getRuntimeConfig({ PORT: "invalid", DATABASE_URL: "postgres://db" }),
    /PORT must be an integer between 1 and 65535/,
  );
});

test("missing database url is rejected", () => {
  assert.throws(
    () => getRuntimeConfig({ PORT: "3000" }),
    /DATABASE_URL is required/,
  );
});

test("unknown routes return a 404 payload", async () => {
  const app = createApp({ db: createFakeDb() });

  const response = await request(app).get("/missing");

  assert.equal(response.statusCode, 404);
  assert.deepEqual(response.body, { message: "Route not found" });
});

test("database failures return a 500 payload", async () => {
  const failingDb = createFakeDb({
    async query() {
      throw new Error("database offline");
    },
  });
  const app = createApp({ db: failingDb });

  const response = await request(app).get("/health");

  assert.equal(response.statusCode, 500);
  assert.deepEqual(response.body, { message: "Internal server error" });
});
