import CreateNewActivity from "./CreateNewActivity";
import { db } from "~/server/db";
import { weeker_task } from "~/server/db/schema";
import Day from "./Day";
import FinishingWeek from "./FinishingWeek";
import Tasks from "./Tasks";

export default async function Page() {
  const activities = await db.select().from(weeker_task);

  return (
    <>
      <CreateNewActivity />
      {/* <FinishingWeek activities={activities} /> */}
      <Tasks activitiesProps={activities} />
    </>
  );
}
