import { requireUnauth } from "@/lib/auth-utils";
import SignInForm from "@/modules/auth/components/sign-in-form";

export default async function Page() {
  await requireUnauth();
  return <SignInForm />;
}
