import { InitialNode } from "@/components/initial-node";
import { NodeType } from "@/generated/prisma";
import { HttpRequestNode } from "@/modules/executions/components/http-request/node";
import { GoogleFormTrigger } from "@/modules/triggers/components/google-form-trigger/node";
import { ManualTriggerNode } from "@/modules/triggers/components/manual-triggers/node";
import type { NodeTypes } from "@xyflow/react";

export const nodeComponents = {
  [NodeType.INITIAL]: InitialNode,
  [NodeType.HTTP_REQUEST]: HttpRequestNode,
  [NodeType.MANUAL_TRIGGER]: ManualTriggerNode,
  [NodeType.GOOGLE_FORM_TRIGGER]: GoogleFormTrigger,
} as const satisfies NodeTypes;

export type RegisteredNodeType = keyof typeof nodeComponents;
