'use server';

import { db } from '@/app/drizzle/db';
import { UserTable } from '@/app/drizzle/schema';
import { handleError } from '../utils';

export const createUser = async (user: CreateUserParams) => {
  const { clerkId, email, first_name, last_name } = user || {};
  try {
    const newUser = await db.insert(UserTable).values({
      clerkId,
      email,
      first_name,
      last_name,
    });
    return newUser;
  } catch (error) {
    handleError(error);
  }
};
