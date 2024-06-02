"use client";

import { Plus } from "lucide-react";
import styles from "./styles.module.css";
import {
  Button,
  type ComboboxItem,
  Modal,
  Select,
  Space,
  Textarea,
  TextInput,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useRef } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { createNewWeekerTask, type ReturnState } from "~/actions/weekerActions";
import { hasLength, useForm } from "@mantine/form";

const days: ComboboxItem[] = [
  {
    label: "Monday",
    value: "monday",
  },
  {
    label: "Tuesday",
    value: "tuesday",
  },
  {
    label: "Wednesday",
    value: "wednesday",
  },
  {
    label: "Thursday",
    value: "thursday",
  },
  {
    label: "Friday",
    value: "friday",
  },
  {
    label: "Saturday",
    value: "saturday",
  },
  {
    label: "Sunday",
    value: "sunday",
  },
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

const initialState: ReturnState = {
  success: false,
  errors: [],
};

export default function WeekerPage() {
  const [opened, { open, close }] = useDisclosure(false);
  const [state, formAction] = useFormState(createNewWeekerTask, initialState);
  const form = useForm({
    mode: "uncontrolled",
    validate: {
      title: hasLength(
        { min: 1, max: 255 },
        "Title has to be between 1 and 255 characters",
      ),
    },
  });

  const createNewWeekerTaskForm = useRef(null);

  const randomActivity =
    randomActivities[Math.floor(Math.random() * randomActivities.length)];

  return (
    <>
      <Modal opened={opened} onClose={close} title="Create new activity">
        <form ref={createNewWeekerTaskForm} action={formAction}>
          <Select
            label="Select a day of the activity"
            maxDropdownHeight={1000}
            placeholder="Selected day"
            data={days}
            name="day"
            required
          />
          <Space h="sm" />
          <TextInput
            label="Name of the activity"
            placeholder={randomActivity?.title}
            name="title"
            required
          />
          <Space h="sm" />
          <Textarea
            label="Description of the activity"
            placeholder={randomActivity?.description}
            rows={5}
            name="description"
          />
          <Space h="xl" />
          <div className="flex justify-end gap-2">
            <Button color="red" variant="outline" onClick={close}>
              Cancel
            </Button>
            <Button type="submit" loading={false}>
              Create
            </Button>
          </div>
        </form>
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
