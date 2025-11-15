import AppHeader from "@/components/app-header";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <AppHeader />
      <main className="flex-1">{children}</main>
    </>
  );
}
