"use client";

import { useEffect, useRef, useState } from "react";
import Activity from "./Activity";
import styles from "./styles.module.css";
import type { WeekerTaskDays, WeekerTask } from "~/types/weeker";

type DayProps = {
  name: WeekerTaskDays[number];
  activitiesProps: WeekerTask[];
};

export default function Day({ name, activitiesProps }: DayProps) {
  const totalActivities = activitiesProps.length;

  const [activities, setActivities] = useState<
    (WeekerTask & { completed: boolean })[]
  >(activitiesProps.map((activity) => ({ ...activity, completed: false })));

  function changeActivityCompletion(id: number, completed: boolean) {
    setActivities((old) => {
      const activity = old.find((ac) => ac.id === id);
      if (!activity) return old;
      activity.completed = completed;
      return [...old];
    });
  }

  return (
    <div className="rounded-lg border p-2">
      <div className="flex items-center gap-2">
        <DayTitle name={name} />
        <span>
          {activities.reduce((sum, ac) => (ac.completed ? sum + 1 : sum), 0)}/
          {totalActivities}
        </span>
      </div>
      {activities.length > 0 ? (
        <div className="flex flex-col gap-1">
          {activities.map((activity) => {
            return (
              <Activity
                key={activity.id}
                id={activity.id}
                title={activity.title}
                completed={activity.completed}
                changeCompletion={changeActivityCompletion}
              />
            );
          })}
        </div>
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
