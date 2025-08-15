
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppLayout from "./components/layout/AppLayout";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Items from "./pages/Items";
import Inventory from "./pages/Inventory";
import DeliveryAgents from "./pages/DeliveryAgents";
import Suppliers from "./pages/Suppliers";
import StockTransfers from "./pages/StockTransfers";
import Settings from "./pages/Settings";
import Help from "./pages/Help";
import AbdulAuditor from "./pages/AbdulAuditor";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <div className="min-h-screen flex w-full">
            <Routes>
              <Route path="/" element={<AppLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="analytics" element={<Analytics />} />
                <Route path="items" element={<Items />} />
                <Route path="inventory" element={<Inventory />} />
                <Route path="agents" element={<DeliveryAgents />} />
                <Route path="suppliers" element={<Suppliers />} />
                <Route path="stock-transfers" element={<StockTransfers />} />
                <Route path="integrations" element={<div className="p-6"><h1 className="text-2xl font-bold">System Integrations</h1><p className="text-gray-600">Coming soon...</p></div>} />
                <Route path="notifications" element={<div className="p-6"><h1 className="text-2xl font-bold">Notifications & Alerts</h1><p className="text-gray-600">Coming soon...</p></div>} />
                <Route path="abdul/*" element={<AbdulAuditor />} />
                <Route path="settings" element={<Settings />} />
                <Route path="help" element={<Help />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
