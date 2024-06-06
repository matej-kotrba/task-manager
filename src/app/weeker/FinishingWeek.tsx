"use client";

import { Button, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Check } from "lucide-react";
import type { WeekerTask } from "~/types/weeker";

export default function FinishingWeek({
  activities,
}: {
  activities: (WeekerTask & { completed: boolean })[];
}) {
  const [opened, { open, close }] = useDisclosure(false);

  function closeForm() {
    close();
  }

  function getDayActivitiesTotal(day: string) {
    return activities.filter((ac) => ac.day === day).length;
  }

  function getDayActivitiesDone(day: string) {
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
        <div>
          <h4>Your weekly report:</h4>
          <div>
            <span>
              Monday: {}/{}
            </span>
          </div>
        </div>
      </Modal>
    </>
  );
}
