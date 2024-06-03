"use client";

import { Plus } from "lucide-react";
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
import { useRef, useMemo } from "react";
import { useFormState } from "react-dom";
import {
  createNewWeekerTask,
  type CreateInsertWeekerTask,
} from "~/actions/weekerActions";
import { useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";
import { createWeekerTaskSchema } from "~/utils/validators";

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

export default function WeekerPage() {
  const form = useForm<CreateInsertWeekerTask>({
    mode: "uncontrolled",
    // validate: zodResolver(createWeekerTaskSchema),
  });

  const [opened, { open, close }] = useDisclosure(false);

  function closeForm() {
    form.reset();
    close();
  }

  const createNewWeekerTaskForm = useRef(null);

  const randomActivity = useMemo(
    () => randomActivities[Math.floor(Math.random() * randomActivities.length)],
    [],
  );

  async function handleSubmit(formData: FormData) {
    const response = await createNewWeekerTask(formData);
    if (response.success === true) {
      closeForm();
    }
  }

  return (
    <>
      <Modal opened={opened} onClose={closeForm} title="Create new activity">
        <form ref={createNewWeekerTaskForm} action={handleSubmit}>
          <Select
            label="Select a day of the activity"
            maxDropdownHeight={1000}
            placeholder="Selected day"
            data={days}
            name="day"
            key={form.key("day")}
            error={form.errors?.day}
            {...form.getInputProps("day")}
          />
          <Space h="sm" />
          <TextInput
            label="Name of the activity"
            placeholder={randomActivity?.title}
            name="title"
            key={form.key("title")}
            error={form.errors?.title}
            {...form.getInputProps("title")}
          />
          <Space h="sm" />
          <Textarea
            label="Description of the activity"
            placeholder={randomActivity?.description}
            rows={5}
            name="description"
            key={form.key("description")}
            error={form.errors?.description}
            {...form.getInputProps("description")}
          />
          <Space h="xl" />
          <div className="flex justify-end gap-2">
            <Button color="red" variant="outline" onClick={closeForm}>
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
    </>
  );
}
