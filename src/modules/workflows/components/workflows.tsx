"use client";

import { EntityContainer, EntityHeader } from "@/components/entity-components";
import { useUpgradeModal } from "@/hooks/use-upgrade-modal";
import {
  useCreateWorkflow,
  useSuspenseWorkflows,
} from "@/modules/workflows/hooks/use-workflows";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface WorkflowsProps {}

export const WorkflowsList = ({}: WorkflowsProps) => {
  const workflows = useSuspenseWorkflows();

  return (
    <div className="flex flex-1 justify-center items-center">
      <p> {JSON.stringify(workflows.data, null, 2)}</p>
    </div>
  );
};

export const WorkflowsHeader = ({ disabled }: { disabled?: boolean }) => {
  const router = useRouter();
  const createWorkflow = useCreateWorkflow();
  const { handleError, modal } = useUpgradeModal();

  const handleCreate = () => {
    createWorkflow.mutate(undefined, {
      onSuccess: (data) => {
        router.push(`/workflows/${data.id}`);
      },
      onError: handleError,
    });
  };
  return (
    <>
      {modal}
      <EntityHeader
        title="Workflows"
        description="Create and manage your workflow"
        onNew={handleCreate}
        newButtonLabel="New worflow"
        disabled={disabled}
        isCreating={createWorkflow.isPending}
      />
    </>
  );
};

export const WorflowsContainer = ({ children }: { children: ReactNode }) => {
  return (
    <EntityContainer
      header={<WorkflowsHeader />}
      search={<></>}
      pagination={<></>}
    >
      {children}
    </EntityContainer>
  );
};
