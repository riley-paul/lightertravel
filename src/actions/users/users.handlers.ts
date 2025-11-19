import { type ActionHandler } from "astro:actions";
import { createDb } from "@/db";
import { User } from "@/db/schema";
import { eq } from "drizzle-orm";
import { getUser, isAuthorized } from "@/actions/helpers";
import * as userInputs from "./users.inputs";
import type { UserSelect } from "@/lib/types";

export const getMe: ActionHandler<
  typeof userInputs.getMe,
  UserSelect | null
> = async (_, c) => {
  const user = c.locals.user;
  if (!user) return null;
  return await getUser(c, user.id);
};

export const remove: ActionHandler<typeof userInputs.remove, null> = async (
  _,
  c,
) => {
  const db = createDb(c.locals.runtime.env);
  const userId = isAuthorized(c).id;
  await db.delete(User).where(eq(User.id, userId));
  return null;
};
