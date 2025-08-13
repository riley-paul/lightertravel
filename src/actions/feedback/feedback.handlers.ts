import { isAuthorized } from "@/actions/helpers";
import { createDb } from "@/db";
import { v4 as uuid } from "uuid";
import { AppFeedback } from "@/db/schema";
import type { ActionHandler } from "astro:actions";
import * as feedbackInputs from "./feedback.inputs";
import type { AppFeedbackSelect } from "@/lib/types";

export const create: ActionHandler<
  typeof feedbackInputs.create,
  AppFeedbackSelect
> = async ({ feedback }, c) => {
  const db = createDb(c.locals.runtime.env);
  const userId = isAuthorized(c).id;
  return await db
    .insert(AppFeedback)
    .values({ id: uuid(), feedback, userId })
    .returning()
    .then((rows) => rows[0]);
};
