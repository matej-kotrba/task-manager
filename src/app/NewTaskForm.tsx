"use client";

import { onNewTaskSubmit } from "~/actions/taskActions";
import { TextInput, Textarea, Button } from "@mantine/core";
import { DateInput, TimeInput } from "@mantine/dates";
import { useForm } from "@mantine/form";
import { createTaskSchema } from "~/utils/validators";
import { zodResolver } from "mantine-form-zod-resolver";

export default function Home() {
  const form = useForm({
    mode: "uncontrolled",
    validate: zodResolver(createTaskSchema),
  });

  function updateTimeLimit() {
    minDate = calculateMinDate();
  }

  function calculateMinDate(): string {
    const date = new Date();
    return date.getHours() + ":" + date.getMinutes();
  }

  let minDate = calculateMinDate();

  return (
    <form action={onNewTaskSubmit} className="flex w-[400px] flex-col gap-2">
      <TextInput
        name="title"
        label="Title"
        placeholder="Title"
        withAsterisk
        key={form.key("title")}
        {...form.getInputProps("title")}
      />
      <Textarea
        name="description"
        label="Description"
        placeholder="Description"
        key={form.key("description")}
        {...form.getInputProps("description")}
      />
      <DateInput
        name="scheduledFinishedDate"
        minDate={new Date()}
        withAsterisk
        label="Date input"
        placeholder="Date input"
        key={form.key("scheduledFinishedDate")}
        {...form.getInputProps("scheduledFinishedDate")}
        onChange={updateTimeLimit}
      />
      <TimeInput
        name="scheduledFinishedTime"
        label="Time input"
        minTime={minDate}
        withAsterisk
        placeholder="Time input"
        key={form.key("scheduledFinishedTime")}
        {...form.getInputProps("scheduledFinishedTime")}
        onChange={updateTimeLimit}
      />
      <Button variant="filled" type="submit">
        Submit
      </Button>
    </form>
  );
}
