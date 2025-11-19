import env from "@/envs-runtime";
import { createDb } from "..";
import { User } from "../schema";

export default async function deleteAllData() {
  const db = createDb(env);
  await Promise.all([db.delete(User)]);
}
