import test from "node:test";
import assert from "node:assert/strict";
import request from "supertest";
import { createApp, getRuntimeConfig } from "../src/app.js";

test("GET /health returns ok status", async () => {
  const app = createApp();

  const response = await request(app).get("/health");

  assert.equal(response.statusCode, 200);
  assert.deepEqual(response.body, { status: "ok" });
});

test("GET / returns starter message", async () => {
  const app = createApp();

  const response = await request(app).get("/");

  assert.equal(response.statusCode, 200);
  assert.deepEqual(response.body, { message: "Node API template" });
});

test("invalid port values are rejected", () => {
  assert.throws(
    () => getRuntimeConfig({ PORT: "invalid", NODE_ENV: "test" }),
    /PORT must be an integer between 1 and 65535/,
  );
});

test("out-of-range port values are rejected", () => {
  assert.throws(
    () => getRuntimeConfig({ PORT: "65536", NODE_ENV: "test" }),
    /PORT must be an integer between 1 and 65535/,
  );
});

test("unknown routes return a 404 payload", async () => {
  const app = createApp();

  const response = await request(app).get("/missing");

  assert.equal(response.statusCode, 404);
  assert.deepEqual(response.body, { message: "Route not found" });
});
