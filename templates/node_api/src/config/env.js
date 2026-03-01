function readPort(value) {
  const port = Number(value);

  if (!Number.isInteger(port) || port <= 0) {
    throw new Error("PORT must be a positive integer.");
  }

  return port;
}

export function loadEnv(source = process.env) {
  return {
    nodeEnv: source.NODE_ENV || "development",
    port: readPort(source.PORT || "3000"),
  };
}
