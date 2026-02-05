import Header from "@/components/dashboard/Header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/insurance-sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="bg-secondary">
        <Header />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
