import { z } from "zod";

export const create = z.object({ feedback: z.string() });
