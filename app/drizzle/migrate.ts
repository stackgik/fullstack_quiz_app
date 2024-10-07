import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';
// for migrations
const migrationClient = postgres(process.env.PSQL_DATABASE_URL as string, {
  max: 1,
});

const main = async () => {
  await migrate(drizzle(migrationClient), {
    migrationsFolder: './migrations',
  });

  await migrationClient.end();
};

main();
