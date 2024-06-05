import CreateNewActivity from "./CreateNewActivity";
import { db } from "~/server/db";
import { weeker_task } from "~/server/db/schema";
import Day from "./Day";
import FinishingWeek from "./FinishingWeek";

export default async function Page() {
  const activities = await db.select().from(weeker_task);

  return (
    <>
      <CreateNewActivity />
      <FinishingWeek />
      <div className="flex flex-col gap-2">
        <Day
          name="monday"
          activitiesProps={activities.filter((ac) => ac.day === "monday")}
        />
        <Day
          name="tuesday"
          activitiesProps={activities.filter((ac) => ac.day === "tuesday")}
        />
        <Day
          name="wednesday"
          activitiesProps={activities.filter((ac) => ac.day === "wednesday")}
        />
        <Day
          name="thursday"
          activitiesProps={activities.filter((ac) => ac.day === "thursday")}
        />
        <Day
          name="friday"
          activitiesProps={activities.filter((ac) => ac.day === "friday")}
        />
        <Day
          name="saturday"
          activitiesProps={activities.filter((ac) => ac.day === "saturday")}
        />
        <Day
          name="sunday"
          activitiesProps={activities.filter((ac) => ac.day === "sunday")}
        />
      </div>
    </>
  );
}
