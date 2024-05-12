"use client";

import { onNewTaskSubmit } from "~/actions/taskActions";
import { TextInput, Textarea } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useForm } from "@mantine/form";
import { createTaskSchema } from "~/utils/validators";
import { zodResolver } from "mantine-form-zod-resolver";
import TimeInput from "./_components/inputs/TimeInput";

export default function Home() {
  const form = useForm({
    mode: "uncontrolled",
    validate: zodResolver(createTaskSchema),
  });

  return (
    <form action={onNewTaskSubmit} className="flex w-[200px] flex-col gap-2">
      <TextInput
        label="Title"
        placeholder="Title"
        withAsterisk
        key={form.key("title")}
        {...form.getInputProps("name")}
      />
      <Textarea
        label="Description"
        placeholder="Description"
        key={form.key("description")}
        {...form.getInputProps("description")}
      />
      <DateInput
        minDate={new Date()}
        label="Date input"
        placeholder="Date input"
        key={form.key("scheduledFinishedDate")}
        {...form.getInputProps("scheduledFinishedDate")}
      />
      <TimeInput />
    </form>
  );
}
