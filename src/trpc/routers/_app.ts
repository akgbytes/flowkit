import { createTRPCRouter } from "../init";
import { workflowRouter } from "./workflows/routers";

export const appRouter = createTRPCRouter({
  workflows: workflowRouter,
});

export type AppRouter = typeof appRouter;
