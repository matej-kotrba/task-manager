"use client";

import { useEffect, useState } from "react";
import useLocalStorage from "../_hooks/useLocalStorage";
import { Checkbox } from "@mantine/core";

export default function Activity({
  title,
  id,
  completed,
  changeCompletion,
}: {
  title: string;
  id: number;
  completed: boolean;
  changeCompletion: (id: number, completed: boolean) => void;
}) {
  const { get, set } = useLocalStorage<boolean>(`weeker_task_${id}`);

  useEffect(() => {
    const localCompleted = get();
    if (localCompleted) {
      changeCompletion(id, localCompleted);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  function onCheckboxChange(event: React.ChangeEvent<HTMLInputElement>) {
    set(event.currentTarget.checked);
    changeCompletion(id, event.currentTarget.checked);
  }

  return (
    <div className="flex max-w-80 items-center justify-between border px-4 py-2">
      <span
        className={`relative w-fit overflow-hidden text-ellipsis whitespace-nowrap px-1
          after:absolute after:left-0 after:top-1/2
          after:h-[2px] after:w-full after:bg-gray-900 after:content-['']
          ${completed ? "text-stone-500 after:scale-x-100" : "after:scale-x-0"} after:origin-left after:duration-150 after:ease-in`}
      >
        {title}
      </span>
      <Checkbox checked={completed} onChange={onCheckboxChange} />
    </div>
  );
}
