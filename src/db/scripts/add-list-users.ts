import env from "@/envs-runtime";
import { createDb } from "..";
import { List, ListUser } from "../schema";

async function addListUsers() {
  const db = createDb(env);

  const lists = await db.select().from(List);
  const newListUsers = await db
    .insert(ListUser)
    .values(
      lists.map((list) => ({
        listId: list.id,
        userId: list.userId,
        isAdmin: true,
        isPending: false,
      })),
    )
    .returning();

  console.log(`Added ${newListUsers.length} list users.`);
}

addListUsers().catch((err) => {
  console.error("Error adding list users:", err);
  process.exit(1);
});
