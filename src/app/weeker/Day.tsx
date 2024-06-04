"use client";

import type { weekerDaysEnumValues } from "~/server/db/schema";
import Activity from "./Activity";
import styles from "./styles.module.css";

type DayProps = {
  name: (typeof weekerDaysEnumValues)[number];
  activities: { id: number; title: string }[];
};

export default function Day({ name, activities }: DayProps) {
  return (
    <div className="rounded-lg border p-2">
      <DayTitle name={name} />
      {activities.length > 0 ? (
        activities.map((activity) => {
          return (
            <Activity
              key={activity.id}
              id={activity.id}
              title={activity.title}
            />
          );
        })
      ) : (
        <div>
          <span>No activities planned for this day</span>
        </div>
      )}
    </div>
  );
}

function DayTitle({ name }: { name: string }) {
  return <h3 className={styles.title}>{name}</h3>;
}
