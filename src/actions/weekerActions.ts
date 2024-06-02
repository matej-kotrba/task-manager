"use server"

import type { ZodIssue } from "zod";
import { db } from "~/server/db"
import { weeker_task } from "~/server/db/schema"
import { createWeekerTaskSchema } from "~/utils/validators"

export type ReturnState = {
  success: boolean;
  errors: ZodIssue[];
};

export async function createNewWeekerTask(state: ReturnState, formData: FormData): Promise<ReturnState> {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return {
    success: true,
    errors: []
  }
  const data = Object.fromEntries(formData)

  const validated = createWeekerTaskSchema.safeParse(data)

  if (validated.success === false) {
    console.error(validated.error.errors)
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