'use server';

import { db } from '@/app/drizzle/db';
import { UserTable } from '@/app/drizzle/schema';
import { handleError } from '../utils';

// # Create a new user
export const createUser = async (user: CreateUserParams) => {
  const { clerkId, email, first_name, last_name } = user || {};

  try {
    //? Drizzle ORM returns an array of inserted rows, even when only one was inserted, hence the destructuring.

    const [newUser] = await db
      .insert(UserTable)
      .values({
        clerkId,
        email,
        first_name,
        last_name,
      })
      .returning();
    return newUser;
  } catch (error) {
    handleError(error);
  }
};

// # Select all users
export const getUsers = async () => {
  try {
    const users = await db.select().from(UserTable);
    return users;
  } catch (error) {
    handleError(error);
  }
};
