function readPort(value) {
  const port = Number(value);

  if (!Number.isInteger(port) || port <= 0 || port > 65535) {
    throw new Error("PORT must be an integer between 1 and 65535.");
  }

  return port;
}

function readDatabaseUrl(value) {
  if (!value) {
    throw new Error("DATABASE_URL is required.");
  }

  return value;
}

export function loadEnv(source = process.env) {
  return {
    nodeEnv: source.NODE_ENV || "development",
    port: readPort(source.PORT || "3000"),
    databaseUrl: readDatabaseUrl(source.DATABASE_URL),
  };
}
