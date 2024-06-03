import styles from "./styles.module.css";
import CreateNewActivity from "./CreateNewActivity";
import { db } from "~/server/db";
import { eq } from "drizzle-orm";
import { weeker_task, weekerDaysEnumValues } from "~/server/db/schema";

type DayProps = {
  name: (typeof weekerDaysEnumValues)[number];
};

export default function Page() {
  return (
    <>
      <CreateNewActivity />
      <div className="flex flex-col gap-2">
        <Day name="monday" />
        <Day name="tuesday" />
        <Day name="wednesday" />
        <Day name="thursday" />
        <Day name="friday" />
        <Day name="saturday" />
        <Day name="sunday" />
      </div>
    </>
  );
}

async function Day({ name }: DayProps) {
  const activities = await db
    .select()
    .from(weeker_task)
    .where(eq(weeker_task.day, name));

  return (
    <div className="rounded-lg border p-2">
      <DayTitle name={name} />
      {activities.map((activity) => {
        return <div key={activity.id}>{activity.title}</div>;
      })}
    </div>
  );
}

function DayTitle({ name }: { name: string }) {
  return <h3 className={styles.title}>{name}</h3>;
}
