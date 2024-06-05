"use client";

import { Button, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Check } from "lucide-react";

export default function FinishingWeek() {
  const [opened, { open, close }] = useDisclosure(false);

  function closeForm() {
    close();
  }

  return (
    <>
      <Button
        className="fixed bottom-4 right-4"
        size="xl"
        rightSection={<Check />}
      >
        Finish this week
      </Button>
      <Modal opened={opened} onClose={closeForm} title="Wrapping up this week">
        <p>Are you sure you want to reset the tasks?</p>
        <div>
          <h4>Your weekly report:</h4>
          <div></div>
        </div>
      </Modal>
    </>
  );
}
