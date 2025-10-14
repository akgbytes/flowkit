import { baseProcedure, createTRPCRouter } from "../init";
import { prisma } from "@/db";
export const appRouter = createTRPCRouter({
  getUsers: baseProcedure.query(() => {
    return prisma.user.findMany();
  }),
});

export type AppRouter = typeof appRouter;
