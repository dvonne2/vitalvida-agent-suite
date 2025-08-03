
import { Outlet } from "react-router-dom";
import { AppSidebar } from "./AppSidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";

const AppLayout = () => {
  return (
    <>
      <AppSidebar />
      <div className="flex-1 flex flex-col">
        <header className="h-16 flex items-center border-b bg-white px-6 shadow-sm">
          <SidebarTrigger className="text-gray-600 hover:text-green-600" />
          <div className="ml-4">
            <h1 className="text-xl font-semibold text-gray-900">Vitalvida Inventory</h1>
            <p className="text-sm text-gray-500">Agent Management</p>
          </div>
        </header>
        <main className="flex-1 p-6 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default AppLayout;
