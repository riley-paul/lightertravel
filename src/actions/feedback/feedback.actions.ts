import { defineAction } from "astro:actions";
import * as feedbackInputs from "./feedback.inputs";
import * as feedbackHandlers from "./feedback.handlers";

export const create = defineAction({
  input: feedbackInputs.create,
  handler: feedbackHandlers.create,
});
