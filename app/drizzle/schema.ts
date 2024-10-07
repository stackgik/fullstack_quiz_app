import { integer, pgTable, text, uuid, varchar } from 'drizzle-orm/pg-core';

export const UserTable = pgTable('users', {
  id: uuid('id').primaryKey().defaultRandom(),
  clerkId: text('clerkId').notNull(),
  email: varchar('email', { length: 255 }).unique().notNull(),
  first_name: varchar('first_name', { length: 50 }).notNull(),
  last_name: varchar('last_name', { length: 50 }).notNull(),
  highest_score: integer('highest_score').default(0),
});

export const QuestionsTable = pgTable('questions', {
  id: uuid('id').primaryKey().defaultRandom(),
  question: text('question').notNull(),
  options: text('options').array().notNull(),
  correct_answer: text('correct_answer').notNull(),
  category: varchar('category', { length: 50 }).notNull(),
});
