import { prisma } from "@/db";
import {
  createTRPCRouter,
  premiumProcedure,
  protectedProcedure,
} from "@/trpc/init";
import { generateSlug } from "random-word-slugs";
import * as z from "zod";

export const workflowRouter = createTRPCRouter({
  create: premiumProcedure.mutation(async ({ ctx }) => {
    const workflow = await prisma.workflow.create({
      data: {
        name: generateSlug(3),
        userId: ctx.auth.user.id,
      },
    });

    return workflow;
  }),

  remove: protectedProcedure
    .input(
      z.object({
        id: z.uuid(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const workflow = await prisma.workflow.delete({
        where: {
          id: input.id,
          userId: ctx.auth.user.id,
        },
      });
    }),

  updateName: protectedProcedure
    .input(
      z.object({
        id: z.uuid(),
        name: z.string().trim().nonempty(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const workflow = await prisma.workflow.update({
        where: {
          id: input.id,
          userId: ctx.auth.user.id,
        },
        data: {
          name: input.name,
        },
      });
    }),

  getOne: protectedProcedure
    .input(
      z.object({
        id: z.uuid(),
      })
    )
    .query(async ({ ctx, input }) => {
      const workflow = await prisma.workflow.findUnique({
        where: { id: input.id, userId: ctx.auth.user.id },
      });

      return workflow;
    }),

  getMany: protectedProcedure
    // .input(
    //   z.object({
    //     search: z.string(),
    //   })
    // )
    .query(async ({ ctx }) => {
      const workflow = await prisma.workflow.findMany({
        where: { userId: ctx.auth.user.id },
      });

      return workflow;
    }),
});
