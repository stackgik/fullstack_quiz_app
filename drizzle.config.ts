import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './app/drizzle/schema.ts',
  out: './app/drizzle/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.PSQL_DATABASE_URL as string,
  },
  verbose: true,
  strict: true,
});
