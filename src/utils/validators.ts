import { task, weeker_task } from "~/server/db/schema"
import { createInsertSchema } from "drizzle-zod"
import { z } from "zod"

export const createTaskSchema = createInsertSchema(task)

export const createWeekerTaskSchema = createInsertSchema(weeker_task)