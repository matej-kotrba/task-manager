import type { weeker_task } from "~/server/db/schema";

export type WeekerTask = (typeof weeker_task)["$inferSelect"]
export type WeekerTaskDays = (typeof weeker_task)["day"]["enumValues"]