import CreateNewActivity from "./CreateNewActivity";
import { db } from "~/server/db";
import { weeker_task, type weekerDaysEnumValues } from "~/server/db/schema";
import Day from "./Day";

export default async function Page() {
  const activities = await db.select().from(weeker_task);

  return (
    <>
      <CreateNewActivity />
      <div className="flex flex-col gap-2">
        <Day
          name="monday"
          activities={activities.filter((ac) => ac.day === "monday")}
        />
        <Day
          name="tuesday"
          activities={activities.filter((ac) => ac.day === "tuesday")}
        />
        <Day
          name="wednesday"
          activities={activities.filter((ac) => ac.day === "wednesday")}
        />
        <Day
          name="thursday"
          activities={activities.filter((ac) => ac.day === "thursday")}
        />
        <Day
          name="friday"
          activities={activities.filter((ac) => ac.day === "friday")}
        />
        <Day
          name="saturday"
          activities={activities.filter((ac) => ac.day === "saturday")}
        />
        <Day
          name="sunday"
          activities={activities.filter((ac) => ac.day === "sunday")}
        />
      </div>
    </>
  );
}
