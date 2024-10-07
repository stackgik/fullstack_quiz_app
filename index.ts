import { db } from './app/drizzle/db';
import { UserTable } from './app/drizzle/schema';

const main = async () => {
  await db.insert(UserTable).values({
    clerkId: '12345',
    email: 'john.doe@example.com',
    first_name: 'John',
    last_name: 'Doe',
  });
};

main();
