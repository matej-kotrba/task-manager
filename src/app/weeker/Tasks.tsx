"use client";

import type { WeekerTask } from "~/types/weeker";
import Day from "./Day";
import { useState } from "react";

export default function Tasks({
  activitiesProps,
}: {
  activitiesProps: WeekerTask[];
}) {
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
    <div className="flex flex-col gap-2">
      <Day
        name="monday"
        activities={activities.filter((ac) => ac.day === "monday")}
        changeActivityCompletion={changeActivityCompletion}
      />
      <Day
        name="tuesday"
        activities={activities.filter((ac) => ac.day === "tuesday")}
        changeActivityCompletion={changeActivityCompletion}
      />
      <Day
        name="wednesday"
        activities={activities.filter((ac) => ac.day === "wednesday")}
        changeActivityCompletion={changeActivityCompletion}
      />
      <Day
        name="thursday"
        activities={activities.filter((ac) => ac.day === "thursday")}
        changeActivityCompletion={changeActivityCompletion}
      />
      <Day
        name="friday"
        activities={activities.filter((ac) => ac.day === "friday")}
        changeActivityCompletion={changeActivityCompletion}
      />
      <Day
        name="saturday"
        activities={activities.filter((ac) => ac.day === "saturday")}
        changeActivityCompletion={changeActivityCompletion}
      />
      <Day
        name="sunday"
        activities={activities.filter((ac) => ac.day === "sunday")}
        changeActivityCompletion={changeActivityCompletion}
      />
    </div>
  );
}
