import { zCategoryItemInsert, zItemInsert } from "@/lib/types";
import { z } from "zod";

const categoryItemInputs = {
  create: z.object({
    data: zCategoryItemInsert,
  }),
  createAndAddToCategory: z.object({
    categoryId: z.string(),
    itemData: zItemInsert.partial().optional(),
    categoryItemData: zCategoryItemInsert.partial().optional(),
  }),
  update: z.object({
    categoryItemId: z.string(),
    data: zCategoryItemInsert.partial(),
  }),
  remove: z.object({ categoryItemId: z.string() }),
};
export default categoryItemInputs;
