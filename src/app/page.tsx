import { onNewTaskSubmit } from "~/actions/taskActions";
import { api } from "~/trpc/server";

export default async function Home() {
  return (
    <form
      action={onNewTaskSubmit}
      className="flex w-[200px] flex-col gap-2 bg-gray-500"
    >
      <input type="text" name="title" />
      <input type="text" name="description" />
      <input type="checkbox" name="isCompleted" />
      <input type="date" name="scheduledFinishedDate" />
      <input type="time" name="scheduledFinishedTime" />
      <button type="submit">Submit</button>
    </form>
  );
}
