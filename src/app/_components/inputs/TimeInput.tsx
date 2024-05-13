"use client";

import { useState } from "react";
import { Popover, Button } from "@mantine/core";
import { twMerge } from "tailwind-merge";

const soloLineHeights = 0.3;
const timeLineHeights = [0.6, 1.2, 2, 1.2, 0.6];
const timeGaps = [2.5, 4.5, 5.5, 4.5, 2.5];

export default function TimeInput() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const timeValues = Array(13)
    .fill(0)
    .map((_, index) => {
      return index.toString();
    });

  const array = [];

  for (let i = 0; i < timeValues.length / 2; i++) {
    if (i === 0 || i + 1 === Math.ceil(timeValues.length / 2)) {
      array.push(<NumberButton>{timeValues[i]}</NumberButton>);
      continue;
    }

    array.push(
      <div
        className="flex justify-between"
        style={{
          gap: `${timeGaps[i - 1]}em`,
          lineHeight: `${timeLineHeights[i - 1]}em`,
        }}
      >
        <NumberButton>{timeValues[timeValues.length - i - 1]}</NumberButton>
        <NumberButton>{timeValues[i]}</NumberButton>
      </div>,
    );
  }

  return (
    <>
      <div className="flex flex-col items-center text-3xl">
        {array.map((item) => item)}
      </div>
      <Popover width={400} position="top">
        <Popover.Target>
          <Button type="button">
            {hours.toString().length === 1
              ? "0" + hours.toString()
              : hours.toString()}
            :
            {minutes.toString().length === 1
              ? "0" + minutes.toString()
              : minutes.toString()}
          </Button>
        </Popover.Target>
        <Popover.Dropdown className="bg-gray-100">
          alkjsdnajkshd
        </Popover.Dropdown>
      </Popover>
    </>
  );
}

type NumberButtonProps = {
  className?: string;
  style?: Record<string, string>;
  children: React.ReactNode;
};

function NumberButton({ className, children, style }: NumberButtonProps) {
  return (
    <button
      type="button"
      className={twMerge(
        "grid place-content-center hover:bg-gray-500",
        className,
      )}
      style={{
        lineHeight: "1.2em",
        ...style,
      }}
    >
      {children}
    </button>
  );
}
