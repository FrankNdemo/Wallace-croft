import "@tanstack/react-start/server-only";

import pg from "pg";
import { requiredEnv } from "./config";

const { Pool } = pg;

let pool: pg.Pool | undefined;

export function getDb() {
  if (!pool) {
    pool = new Pool({
      connectionString: requiredEnv("DATABASE_URL"),
      ssl: { rejectUnauthorized: false },
      max: 3,
      idleTimeoutMillis: 10_000,
      connectionTimeoutMillis: 10_000,
    });
  }

  return pool;
}

export async function query<T extends pg.QueryResultRow = pg.QueryResultRow>(
  text: string,
  values: unknown[] = [],
) {
  return getDb().query<T>(text, values);
}
