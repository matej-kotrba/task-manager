"use server"

import type { z, ZodIssue } from "zod";
import { db } from "~/server/db"
import { weeker_task } from "~/server/db/schema"
import { createWeekerTaskSchema } from "~/utils/validators"

export type ReturnState = {
  success: boolean;
  errors: ZodIssue[];
};

export type CreateInsertWeekerTask = z.infer<typeof createWeekerTaskSchema>

export async function createNewWeekerTask(formData: FormData): Promise<ReturnState> {
  const data = Object.fromEntries(formData)

  const validated = createWeekerTaskSchema.safeParse(data)

  if (validated.success === false) {
    return {
      success: false,
      errors: validated.error.errors
    }
  }

  const response = await db.insert(weeker_task).values({
    title: validated.data.title,
    description: validated.data.description,
    day: validated.data.day,
  })

  return {
    success: true,
    errors: []
  }
}