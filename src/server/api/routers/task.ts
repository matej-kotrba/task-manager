import {
  createTRPCRouter,
  publicProcedure,
} from "~/server/api/trpc";
import { task } from "~/server/db/schema";
import { createTaskSchema } from "~/utils/validators";

export const taskRouter = createTRPCRouter({
  createTask: publicProcedure.input(createTaskSchema).mutation(async ({ ctx, input }) => {
    await ctx.db.insert(task).values({
      title: input.title,
      description: input.description,
      isCompleted: input.isCompleted,
      scheduledFinishedDate: input.scheduledFinishedDate,
    })
  })
});