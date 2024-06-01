"use client";

import { Plus } from "lucide-react";
import styles from "./styles.module.css";
import {
  Button,
  Modal,
  Select,
  Space,
  Textarea,
  TextInput,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const randomActivities: { title: string; description: string }[] = [
  {
    title: "Go to the gym",
    description: "Workout for 1 hour",
  },
  {
    title: "Read a book",
    description: "Read 10 pages",
  },
  {
    title: "Go for a walk",
    description: "Walk for 30 minutes",
  },
  {
    title: "Cook a meal",
    description: "Cook a healthy meal",
  },
  {
    title: "Meditate",
    description: "Meditate for 10 minutes",
  },
  {
    title: "Learn something new",
    description: "Watch a tutorial",
  },
  {
    title: "Write a blog post",
    description: "Write 500 words",
  },
  {
    title: "Work on a side project",
    description: "Work for 1 hour",
  },
  {
    title: "Listen to a podcast",
    description: "Listen to a podcast episode",
  },
  {
    title: "Clean your room",
    description: "Clean your room for 15 minutes",
  },
];

export default function WeekerPage() {
  const [opened, { open, close }] = useDisclosure(false);

  const randomActivity =
    randomActivities[Math.floor(Math.random() * randomActivities.length)];

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Create new activity"
        onSubmit={(e) => {
          console.log(e);
        }}
      >
        <Select
          maxDropdownHeight={1000}
          placeholder="Selected day"
          data={days}
        />
        <Space h="sm" />
        <TextInput
          label="Name of the activity"
          placeholder={randomActivity?.title}
        />
        <Space h="sm" />
        <Textarea
          label="Description of the activity"
          placeholder={randomActivity?.description}
        />
        <Space h="xl" />
        <div className="flex justify-end gap-2">
          <Button color="red" variant="outline" onClick={close}>
            Cancel
          </Button>
          <Button>Create</Button>
        </div>
      </Modal>
      <div className="mb-4 flex justify-end">
        <Button type="button" rightSection={<Plus />} onClick={open}>
          Create new activity
        </Button>
      </div>
      {/* <div className="flex flex-col gap-2">
        <Day name="Monday" />
        <Day name="Monday" />
        <Day name="Monday" />
        <Day name="Monday" />
      </div> */}
    </>
  );
}

type DayProps = {
  name: string;
};

function Day({ name }: DayProps) {
  return (
    <div className="rounded-lg border p-2">
      <DayTitle name={name} />
      <div className="h-[100px]"></div>
    </div>
  );
}

function DayTitle({ name }: { name: string }) {
  return <h3 className={styles.title}>{name}</h3>;
}
