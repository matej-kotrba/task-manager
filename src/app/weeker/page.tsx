import CreateNewActivity from "./CreateNewActivity";
import { db } from "~/server/db";
import { weeker_task } from "~/server/db/schema";
import Tasks from "./Tasks";

export default async function Page() {
  const activities = await db.select().from(weeker_task);

  return (
    <>
      <CreateNewActivity />
      <Tasks activitiesProps={activities} />
    </>
  );
}
