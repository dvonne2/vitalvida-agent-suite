
import React, { useState } from "react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, 
  Users, 
  BookOpen, 
  Megaphone, 
  Package, 
  Truck, 
  Phone, 
  Calculator, 
  Settings, 
  Building, 
  UserCog, 
  Crown, 
  HeartHandshake, 
  Monitor, 
  DollarSign, 
  CreditCard, 
  Smartphone, 
  Database, 
  FileText, 
  Activity,
  Search,
  RefreshCw,
  Plus,
  ExternalLink,
  CheckCircle,
  Clock,
  XCircle
} from "lucide-react";

const Integrations = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Connected':
        return <Badge className="bg-green-100 text-green-800 border-green-200"><CheckCircle className="w-3 h-3 mr-1" />Connected</Badge>;
      case 'Pending':
        return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200"><Clock className="w-3 h-3 mr-1" />Pending</Badge>;
      case 'Disconnected':
        return <Badge className="bg-red-100 text-red-800 border-red-200"><XCircle className="w-3 h-3 mr-1" />Disconnected</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  const IntegrationCard = ({ icon: Icon, title, description, status, features, color }: any) => (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className={`p-2 rounded-lg ${color}`}>
              <Icon className="w-5 h-5 text-white" />
            </div>
            <div>
              <CardTitle className="text-lg">{title}</CardTitle>
              <CardDescription className="text-sm">{description}</CardDescription>
            </div>
          </div>
          {getStatusBadge(status)}
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <ul className="text-sm text-gray-600 space-y-1 mb-4">
          {features.map((feature: string, index: number) => (
            <li key={index} className="flex items-center space-x-2">
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div className="flex space-x-2">
          <Button size="sm" variant="outline" className="flex-1">Configure</Button>
          <Button size="sm" variant="ghost" className="text-blue-600">
            <FileText className="w-4 h-4 mr-1" />
            Logs
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  const vitalvidaSystems = [
    {
      icon: HeartHandshake,
      title: "VitalVida CRM",
      description: "Customer relationship management system",
      status: "Connected",
      features: ["Customer data sync", "Lead management", "Sales tracking"],
      color: "bg-blue-600"
    },
    {
      icon: BookOpen,
      title: "VitalVida Books",
      description: "Financial accounting and bookkeeping",
      status: "Connected",
      features: ["Transaction sync", "Financial reports", "Audit trails"],
      color: "bg-green-600"
    },
    {
      icon: Megaphone,
      title: "VitalVida Marketing",
      description: "Marketing automation and campaigns",
      status: "Pending",
      features: ["Campaign tracking", "Customer segmentation", "Analytics"],
      color: "bg-purple-600"
    }
  ];

  const businessPortals = [
    { icon: Package, title: "Inventory Management Portal", status: "Connected", features: ["Stock tracking", "Order management", "Alerts"], color: "bg-blue-600" },
    { icon: Truck, title: "Logistics Operations", status: "Connected", features: ["Route optimization", "Delivery tracking", "Fleet management"], color: "bg-green-600" },
    { icon: Phone, title: "Telesales Operations", status: "Connected", features: ["Call management", "Lead tracking", "Performance metrics"], color: "bg-orange-600" },
    { icon: Truck, title: "Delivery Operations", status: "Connected", features: ["Driver management", "Real-time tracking", "Proof of delivery"], color: "bg-indigo-600" },
    { icon: Calculator, title: "Accountant Finance", status: "Connected", features: ["Financial reporting", "Budget tracking", "Cost analysis"], color: "bg-emerald-600" },
    { icon: Settings, title: "Financial Controller Management", status: "Pending", features: ["Financial oversight", "Compliance tracking", "Risk management"], color: "bg-gray-600" },
    { icon: Building, title: "Manufacturing Operations", status: "Connected", features: ["Production tracking", "Quality control", "Resource planning"], color: "bg-amber-600" },
    { icon: UserCog, title: "General Manager Executive", status: "Pending", features: ["Executive dashboard", "KPI monitoring", "Strategic planning"], color: "bg-red-600" },
    { icon: Crown, title: "CEO Executive Officer", status: "Pending", features: ["Executive overview", "Strategic metrics", "Board reporting"], color: "bg-violet-600" },
    { icon: Users, title: "HR Human Resources", status: "Disconnected", features: ["Employee management", "Payroll integration", "Performance tracking"], color: "bg-pink-600" },
    { icon: Monitor, title: "Media Buyer Marketing", status: "Pending", features: ["Ad campaign management", "Media planning", "ROI tracking"], color: "bg-cyan-600" },
    { icon: DollarSign, title: "Investor Management", status: "Disconnected", features: ["Investment tracking", "Reporting", "Communication"], color: "bg-teal-600" }
  ];

  const paymentSystems = [
    { icon: CreditCard, title: "Bank Payment APIs", status: "Connected", features: ["Payment processing", "Transaction verification", "Reconciliation"], color: "bg-blue-600" },
    { icon: Smartphone, title: "Mobile Money Integration", status: "Connected", features: ["Mobile payments", "Wallet integration", "SMS notifications"], color: "bg-green-600" }
  ];

  const systemAdmin = [
    { icon: Users, title: "User Management", status: "Connected", features: ["User authentication", "Role management", "Access control"], color: "bg-gray-600" },
    { icon: FileText, title: "System Logs", status: "Connected", features: ["Activity logging", "Error tracking", "Audit trails"], color: "bg-orange-600" },
    { icon: Database, title: "Database", status: "Connected", features: ["Data management", "Backup systems", "Performance monitoring"], color: "bg-purple-600" }
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center space-x-3">
            <Zap className="text-yellow-600" />
            <span>VitalVida Inventory - System Integrations</span>
          </h1>
          <p className="text-gray-600 mt-2">Manage all system connections and API integrations</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" className="flex items-center space-x-2">
            <RefreshCw className="w-4 h-4" />
            <span>Refresh All</span>
          </Button>
          <Button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700">
            <Plus className="w-4 h-4" />
            <span>Add Integration</span>
          </Button>
        </div>
      </div>

      {/* Search */}
      <div className="mb-6">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search integrations..."
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* System Health Monitoring */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600">45ms</div>
            <div className="text-sm text-gray-600">API Response Time</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">12/15</div>
            <div className="text-sm text-gray-600">Active Connections</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600">Good</div>
            <div className="text-sm text-gray-600">Database Health</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-orange-600">24</div>
            <div className="text-sm text-gray-600">Recent Activities</div>
          </CardContent>
        </Card>
      </div>

      {/* VitalVida Core Systems */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center space-x-2">
          <Zap className="text-blue-600" />
          <span>VitalVida Core Systems</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vitalvidaSystems.map((system, index) => (
            <IntegrationCard key={index} {...system} description={system.description} />
          ))}
        </div>
      </div>

      {/* Business Portals */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center space-x-2">
          <Building className="text-green-600" />
          <span>Business Portals</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {businessPortals.map((portal, index) => (
            <IntegrationCard key={index} {...portal} description="Business operation portal" />
          ))}
        </div>
      </div>

      {/* Payment Systems */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center space-x-2">
          <CreditCard className="text-purple-600" />
          <span>Payment Systems</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {paymentSystems.map((system, index) => (
            <IntegrationCard key={index} {...system} description="Payment processing integration" />
          ))}
        </div>
      </div>

      {/* System Administration */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center space-x-2">
          <Settings className="text-gray-600" />
          <span>System Administration</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {systemAdmin.map((system, index) => (
            <IntegrationCard key={index} {...system} description="System administration tool" />
          ))}
        </div>
      </div>

      {/* API Management */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Activity className="text-blue-600" />
              <span>API Endpoints</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { endpoint: "/api/inventory/items", status: "Active", calls: "1.2k" },
                { endpoint: "/api/orders/create", status: "Active", calls: "856" },
                { endpoint: "/api/agents/tracking", status: "Active", calls: "743" },
                { endpoint: "/api/payments/process", status: "Active", calls: "432" },
                { endpoint: "/api/reports/generate", status: "Maintenance", calls: "89" }
              ].map((api, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-mono text-sm text-gray-900">{api.endpoint}</div>
                    <div className="text-xs text-gray-500">{api.calls} calls today</div>
                  </div>
                  <Badge variant={api.status === "Active" ? "default" : "secondary"}>
                    {api.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <ExternalLink className="text-green-600" />
              <span>Webhooks</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { url: "https://crm.vitalvida.com/webhook", status: "Active", events: "Order updates" },
                { url: "https://logistics.vitalvida.com/hook", status: "Active", events: "Delivery status" },
                { url: "https://accounting.vitalvida.com/api", status: "Active", events: "Payment events" },
                { url: "https://marketing.vitalvida.com/track", status: "Pending", events: "Customer events" },
                { url: "https://hr.vitalvida.com/notify", status: "Error", events: "User changes" }
              ].map((webhook, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-mono text-sm text-gray-900 truncate max-w-48">{webhook.url}</div>
                    <div className="text-xs text-gray-500">{webhook.events}</div>
                  </div>
                  <Badge variant={webhook.status === "Active" ? "default" : webhook.status === "Error" ? "destructive" : "secondary"}>
                    {webhook.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Integrations;
