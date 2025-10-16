import { requireAuth } from "@/lib/auth-utils";

interface PageProps {}

export default async function Page({}: PageProps) {
  await requireAuth();
  return <div>Workflow page</div>;
}
