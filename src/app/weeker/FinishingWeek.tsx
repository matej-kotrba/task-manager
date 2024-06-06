"use client";

import { Button, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Check, Repeat } from "lucide-react";
import type { WeekerTask, WeekerTaskDays } from "~/types/weeker";

export default function FinishingWeek({
  activities,
  resetActivities,
}: {
  activities: (WeekerTask & { completed: boolean })[];
  resetActivities: () => void;
}) {
  const [opened, { open, close }] = useDisclosure(false);

  function closeForm() {
    close();
  }

  function getDayActivitiesTotal(day: WeekerTaskDays[number]) {
    return activities.filter((ac) => ac.day === day).length;
  }

  function getDayActivitiesDone(day: WeekerTaskDays[number]) {
    return activities
      .filter((ac) => ac.day === day)
      .reduce((acc, ac) => acc + (ac.completed ? 1 : 0), 0);
  }

  return (
    <>
      <Button
        className="fixed bottom-4 right-4"
        size="xl"
        rightSection={<Check />}
        onClick={open}
      >
        Finish this week
      </Button>
      <Modal opened={opened} onClose={closeForm} title="Wrapping up this week">
        <p>Are you sure you want to reset the tasks?</p>
        <div className="mt-2">
          <h4>Your weekly report:</h4>
          <div className="flex flex-col gap-1">
            <span
              className={
                getDayActivitiesDone("monday") ===
                getDayActivitiesTotal("monday")
                  ? "text-green-500"
                  : "text-red-500"
              }
            >
              Monday: {getDayActivitiesDone("monday")}/
              {getDayActivitiesTotal("monday")}
            </span>
            <span
              className={
                getDayActivitiesDone("tuesday") ===
                getDayActivitiesTotal("tuesday")
                  ? "text-green-500"
                  : "text-red-500"
              }
            >
              Tuesday: {getDayActivitiesDone("tuesday")}/
              {getDayActivitiesTotal("tuesday")}
            </span>
            <span
              className={
                getDayActivitiesDone("wednesday") ===
                getDayActivitiesTotal("wednesday")
                  ? "text-green-500"
                  : "text-red-500"
              }
            >
              Wednesday: {getDayActivitiesDone("wednesday")}/
              {getDayActivitiesTotal("wednesday")}
            </span>
            <span
              className={
                getDayActivitiesDone("thursday") ===
                getDayActivitiesTotal("thursday")
                  ? "text-green-500"
                  : "text-red-500"
              }
            >
              Thursday: {getDayActivitiesDone("thursday")}/
              {getDayActivitiesTotal("thursday")}
            </span>
            <span
              className={
                getDayActivitiesDone("friday") ===
                getDayActivitiesTotal("friday")
                  ? "text-green-500"
                  : "text-red-500"
              }
            >
              Friday: {getDayActivitiesDone("friday")}/
              {getDayActivitiesTotal("friday")}
            </span>
            <span
              className={
                getDayActivitiesDone("saturday") ===
                getDayActivitiesTotal("saturday")
                  ? "text-green-500"
                  : "text-red-500"
              }
            >
              Saturday: {getDayActivitiesDone("saturday")}/
              {getDayActivitiesTotal("saturday")}
            </span>
            <span
              className={
                getDayActivitiesDone("sunday") ===
                getDayActivitiesTotal("sunday")
                  ? "text-green-500"
                  : "text-red-500"
              }
            >
              Sunday: {getDayActivitiesDone("sunday")}/
              {getDayActivitiesTotal("sunday")}
            </span>
          </div>
        </div>
        <Button
          className="mt-2"
          onClick={() => {
            resetActivities();
            close();
          }}
          rightSection={<Repeat />}
        >
          Reset
        </Button>
      </Modal>
    </>
  );
}
