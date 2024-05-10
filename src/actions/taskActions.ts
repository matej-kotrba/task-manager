"use server";

import type { ZodIssue } from "zod";
import { db } from "~/server/db";
import { task } from "~/server/db/schema";
import { createTaskSchema } from "~/utils/validators";

type OnNewTaskSubmitResponse = {
  success: boolean
  errors: ZodIssue[]
}

export async function onNewTaskSubmit(formData: FormData): Promise<OnNewTaskSubmitResponse> {
  const data = Object.fromEntries(formData)

  const validation = createTaskSchema.safeParse(data)

  console.log(validation.error?.errors)

  if (validation.success === false) {
    return {
      success: false,
      errors: validation.error.errors
    }
  }

  const response = await db.insert(task).values({
    title: validation.data.title,
    description: validation.data.description,
    scheduledFinishedDate: validation.data.scheduledFinishedDate,
    scheduledFinishedTime: validation.data.scheduledFinishedTime,
  })


  return {
    success: true,
    errors: []
  }
}