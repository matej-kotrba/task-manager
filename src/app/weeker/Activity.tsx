"use client";

import { useEffect, useState } from "react";
import useLocalStorage from "../_hooks/useLocalStorage";
import { Checkbox } from "@mantine/core";

export default function Activity({ title, id }: { title: string; id: number }) {
  const { get, set, remove } = useLocalStorage<boolean>(`weeker_task_${id}`);
  const [isCompleted, setIsCompleted] = useState(get() ?? false);

  useEffect(() => {
    set(isCompleted);
  }, [isCompleted, set]);

  return (
    <div className="flex max-w-80 items-center justify-between border px-4 py-2">
      <span
        className={`relative w-fit overflow-hidden text-ellipsis whitespace-nowrap px-1
          after:absolute after:left-0 after:top-1/2
          after:h-[2px] after:w-full after:bg-gray-900 after:content-['']
          ${isCompleted ? "text-stone-500 after:scale-x-100" : "after:scale-x-0"} after:origin-left after:duration-150 after:ease-in`}
      >
        {title}
      </span>
      <Checkbox
        checked={isCompleted}
        onChange={(event) => setIsCompleted(event.currentTarget.checked)}
      />
    </div>
  );
}
