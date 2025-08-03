
import { useState } from "react";
import {
  BarChart3,
  Package2,
  Warehouse,
  Truck,
  Building2,
  Settings,
  HelpCircle,
  LayoutDashboard,
  Package
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";

const navigationItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Analytics & Reports", url: "/analytics", icon: BarChart3 },
  { title: "Items", url: "/items", icon: Package },
  { title: "Inventory", url: "/inventory", icon: Warehouse },
  { title: "Delivery Agents", url: "/agents", icon: Truck },
  { title: "Suppliers", url: "/suppliers", icon: Building2 },
  { title: "Settings", url: "/settings", icon: Settings },
  { title: "Help", url: "/help", icon: HelpCircle, badge: "3" },
];

export function AppSidebar() {
  const { collapsed } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => {
    if (path === "/") return currentPath === "/";
    return currentPath.startsWith(path);
  };

  const getNavCls = (path: string) =>
    isActive(path)
      ? "bg-green-50 text-green-700 border-r-2 border-green-600"
      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900";

  return (
    <Sidebar className={collapsed ? "w-16" : "w-64"} collapsible>
      <SidebarContent className="bg-white border-r">
        {/* Brand Section */}
        <div className="p-6 border-b">
          {!collapsed && (
            <div>
              <h2 className="text-2xl font-bold text-green-600">Vitalvida</h2>
              <p className="text-sm text-gray-500">Inventory Management</p>
            </div>
          )}
          {collapsed && (
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">V</span>
            </div>
          )}
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className={collapsed ? "hidden" : ""}>
            Main Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end={item.url === "/"}
                      className={`flex items-center px-3 py-2 rounded-md transition-colors ${getNavCls(item.url)}`}
                    >
                      <item.icon className={`h-5 w-5 ${collapsed ? "" : "mr-3"}`} />
                      {!collapsed && (
                        <div className="flex items-center justify-between flex-1">
                          <span className="font-medium">{item.title}</span>
                          {item.badge && (
                            <Badge variant="secondary" className="bg-green-100 text-green-700 text-xs">
                              {item.badge}
                            </Badge>
                          )}
                        </div>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
