import ErrorFallback from "@/components/error-fallback";
import SuspenseFallback from "@/components/suspense-fallback";
import { requireAuth } from "@/lib/auth-utils";
import {
  WorflowsContainer,
  WorkflowsList,
} from "@/modules/workflows/components/workflows";
import { prefetchWorkflows } from "@/modules/workflows/server/prefetch";
import { HydrateClient } from "@/trpc/server";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

interface PageProps {}

export default async function Page({}: PageProps) {
  await requireAuth();

  prefetchWorkflows();

  return (
    <WorflowsContainer>
      <HydrateClient>
        <ErrorBoundary fallback={<ErrorFallback />}>
          <Suspense fallback={<SuspenseFallback />}>
            <WorkflowsList />
          </Suspense>
        </ErrorBoundary>
      </HydrateClient>
    </WorflowsContainer>
  );
}
