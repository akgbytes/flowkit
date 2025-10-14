import { requireUnauth } from "@/lib/auth-utils";
import SignUpForm from "@/modules/auth/components/sign-up-form";

export default async function Page() {
  await requireUnauth();
  return <SignUpForm />;
}
