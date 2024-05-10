import { task } from "~/server/db/schema"
import { createInsertSchema } from "drizzle-zod"
import { z } from "zod"

export const createTaskSchema = createInsertSchema(task, {
  title: z.string().min(1).max(255),
})