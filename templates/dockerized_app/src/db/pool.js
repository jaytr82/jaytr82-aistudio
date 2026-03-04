import pg from "pg";

const { Pool } = pg;

export function createDatabaseClient({ databaseUrl }) {
  return new Pool({
    connectionString: databaseUrl,
  });
}
