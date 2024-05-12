"use client";

import { useState } from "react";
import { Popover, Button } from "@mantine/core";

const soloLineHeights = 0.3;
const timeLineHeights = [0.6, 1.2, 2.4, 1.2, 0.6];
const timeGaps = [40, 74, 90, 74, 40];

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
      array.push(
        <div style={{ lineHeight: `${soloLineHeights}em` }}>
          {timeValues[i]}
        </div>,
      );
      continue;
    }

    array.push(
      <div
        className="flex justify-between"
        style={{
          gap: timeGaps[i - 1],
          lineHeight: `${timeLineHeights[i - 1]}em`,
        }}
      >
        <div>{timeValues[timeValues.length - i - 1]}</div>
        <div>{timeValues[i]}</div>
      </div>,
    );
  }

  return (
    <>
      <div className="flex flex-col items-center">
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
