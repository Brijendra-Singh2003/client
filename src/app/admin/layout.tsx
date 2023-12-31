import AdminSidebar from "@/components/AdminSidebar";
import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div className="grid lg:grid-cols-[240px,auto]">
      <AdminSidebar>{children}</AdminSidebar>
    </div>
  );
}
