import { useState } from "react";
import { Routes, Route, useNavigate, useLocation, NavLink } from "react-router-dom";
import { 
  Eye, 
  TrendingUp, 
  Search, 
  Clock, 
  Shield, 
  FileText, 
  AlertTriangle,
  X,
  RefreshCw,
  Download,
  ArrowLeft
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const AbdulModules = [
  { id: "overview", title: "Overview", icon: Eye, path: "" },
  { id: "scorecard", title: "Agent Scorecard", icon: TrendingUp, path: "scorecard" },
  { id: "investigation", title: "Investigation Mode", icon: Search, path: "investigation" },
  { id: "timeline", title: "Memory Timeline", icon: Clock, path: "timeline" },
  { id: "enforcement", title: "Enforcement", icon: Shield, path: "enforcement" },
  { id: "reports", title: "Reports", icon: FileText, path: "reports" },
];

const Overview = () => {
  const recentFlags = [
    {
      agent: "Tunde Adebayo",
      severity: "CRITICAL",
      item: "Hair Conditioner 500ml",
      details: "Agent reported 12 sold, 8 returned. Should have 10 remaining...",
      time: "5 mins ago"
    },
    {
      agent: "Halima Bello", 
      severity: "HIGH",
      item: "Paracetamol 500mg",
      details: "Missing 3 units from last delivery batch",
      time: "3 hours ago"
    },
    {
      agent: "Kemi Johnson",
      severity: "MEDIUM", 
      item: "Blood Pressure Monitor",
      details: "Delayed reporting on device handover",
      time: "1 hour ago"
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "CRITICAL": return "text-red-600 bg-red-50 border-red-200";
      case "HIGH": return "text-orange-600 bg-orange-50 border-orange-200";
      case "MEDIUM": return "text-yellow-600 bg-yellow-50 border-yellow-200";
      default: return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  return (
    <div className="space-y-6">
      {/* Critical Alert Banner */}
      <Alert className="border-red-200 bg-red-50">
        <X className="h-4 w-4 text-red-600" />
        <AlertDescription className="text-red-800">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-semibold">CRITICAL INVENTORY DISCREPANCY</div>
              <div>1 item(s) require immediate attention</div>
            </div>
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              Investigate Now
            </Button>
          </div>
        </AlertDescription>
      </Alert>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-l-4 border-l-green-500">
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-green-600">98.7%</div>
            <div className="text-sm text-gray-600">AUDIT ACCURACY</div>
            <div className="text-xs text-green-600 mt-1">+0.3% from yesterday</div>
          </CardContent>
        </Card>
        
        <Card className="border-l-4 border-l-red-500">
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-red-600">3</div>
            <div className="text-sm text-gray-600">ACTIVE FLAGS</div>
            <div className="text-xs text-red-600 mt-1">+1 since last hour</div>
          </CardContent>
        </Card>
        
        <Card className="border-l-4 border-l-blue-500">
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-blue-600">1,247</div>
            <div className="text-sm text-gray-600">ITEMS TRACKED</div>
            <div className="text-xs text-blue-600 mt-1">Across 24 agents</div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Flags Section */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Recent Flags</CardTitle>
          <Button variant="ghost" className="text-red-600 hover:text-red-700">
            View All
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentFlags.map((flag, index) => (
              <div key={index} className={`p-4 border rounded-lg ${getSeverityColor(flag.severity)}`}>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-semibold">{flag.agent}</span>
                      <Badge className={`${getSeverityColor(flag.severity)} text-xs`}>
                        {flag.severity}
                      </Badge>
                      <span className="text-sm text-gray-500">{flag.time}</span>
                    </div>
                    <div className="font-medium mb-1">{flag.item}</div>
                    <div className="text-sm text-gray-600">{flag.details}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const Investigation = () => {
  const [query, setQuery] = useState("");
  const quickExamples = [
    "Run report for Tunde Abuja DA001: all items given vs delivered",
    "agent:DA001 item:Shampoo period:7d view:recon",
    "whereIs:Shampoo count:1 agent:DA001 whyNot6?"
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Investigation Mode</h2>
          <p className="text-gray-600">Abdul's forensic audit tools - track every movement, catch every discrepancy</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button className="bg-red-600 hover:bg-red-700 text-white">
            <RefreshCw className="h-4 w-4 mr-2" />
            Live Refresh
          </Button>
        </div>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Abdul's Investigation Query (Natural language or structured)</h3>
            <div className="flex gap-2">
              <Input
                placeholder="e.g., 'Run report for Tunde Abuja DA001: all items given vs delivered'"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1"
              />
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                Run Report
              </Button>
            </div>
            
            <div>
              <p className="text-sm text-gray-600 mb-2">Quick Examples:</p>
              <div className="space-y-2">
                {quickExamples.map((example, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="sm"
                    className="text-left justify-start h-auto p-2 text-sm text-gray-700 hover:bg-gray-50"
                    onClick={() => setQuery(example)}
                  >
                    {example}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sample Investigation Result */}
      <Card>
        <CardHeader>
          <CardTitle className="text-red-600">Investigation Results - Tunde Abuja (DA001)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">10</div>
                <div className="text-sm text-gray-600">ISSUED</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-green-600">4</div>
                <div className="text-sm text-gray-600">DELIVERED</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-yellow-600">6</div>
                <div className="text-sm text-gray-600">EXPECTED</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center border-red-200 bg-red-50">
                <div className="text-2xl font-bold text-red-600">5</div>
                <div className="text-sm text-gray-600">DECLARED</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center bg-red-100 border-red-200">
                <div className="text-2xl font-bold text-red-700">-1</div>
                <div className="text-sm text-red-700 font-medium">VARIANCE</div>
              </CardContent>
            </Card>
          </div>
          
          <Alert className="border-red-200 bg-red-50">
            <AlertTriangle className="h-4 w-4 text-red-600" />
            <AlertDescription className="text-red-800">
              <strong>Abdul's Conclusion:</strong> Unexplained inventory loss (1 unit) for Hair Conditioner 500ml. 
              Enforcement action recommended.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Chain-of-Custody Timeline Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mt-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-900">Chain-of-Custody Timeline</h3>
        <div className="text-sm text-gray-600 mb-4">Every touch, in order - signed events with proof</div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Time</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Event</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Qty</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">From → To</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Who Signed</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Evidence</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50">
                <td className="px-3 py-2 text-sm text-gray-900">2025-08-11 09:02</td>
                <td className="px-3 py-2 text-sm font-medium text-gray-900">Issue Request Approved</td>
                <td className="px-3 py-2 text-sm text-center text-gray-900">10</td>
                <td className="px-3 py-2 text-sm text-gray-600">Inv. Manager → Logistics Manager</td>
                <td className="px-3 py-2 text-sm text-gray-600">Inventory Mgr (e-sign)</td>
                <td className="px-3 py-2 text-sm text-blue-600">Approval ID, IP, device</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-3 py-2 text-sm text-gray-900">2025-08-11 10:15</td>
                <td className="px-3 py-2 text-sm font-medium text-gray-900">Picked from Warehouse</td>
                <td className="px-3 py-2 text-sm text-center text-gray-900">10</td>
                <td className="px-3 py-2 text-sm text-gray-600">Warehouse → Logistics Staging</td>
                <td className="px-3 py-2 text-sm text-gray-600">Storekeeper (QR + photo)</td>
                <td className="px-3 py-2 text-sm text-blue-600">QR scan, bin ID, photo, GPS</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-3 py-2 text-sm text-gray-900">2025-08-11 10:47</td>
                <td className="px-3 py-2 text-sm font-medium text-gray-900">Handover to Logistics</td>
                <td className="px-3 py-2 text-sm text-center text-gray-900">10</td>
                <td className="px-3 py-2 text-sm text-gray-600">Logistics Staging → Logistics Mgr</td>
                <td className="px-3 py-2 text-sm text-gray-600">Logistics Mgr (PIN + face ID)</td>
                <td className="px-3 py-2 text-sm text-blue-600">Handover doc PDF</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-3 py-2 text-sm text-gray-900">2025-08-11 14:06</td>
                <td className="px-3 py-2 text-sm font-medium text-gray-900">Dispatch to Agent</td>
                <td className="px-3 py-2 text-sm text-center text-gray-900">10</td>
                <td className="px-3 py-2 text-sm text-gray-600">Logistics Mgr → DA001</td>
                <td className="px-3 py-2 text-sm text-gray-600">Logistics Mgr & DA001 (dual sign)</td>
                <td className="px-3 py-2 text-sm text-blue-600">Agent app signed, GPS, time</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-3 py-2 text-sm text-gray-900">2025-08-11 14:08</td>
                <td className="px-3 py-2 text-sm font-medium text-gray-900">Agent Received</td>
                <td className="px-3 py-2 text-sm text-center text-gray-900">10</td>
                <td className="px-3 py-2 text-sm text-gray-600">— DA001</td>
                <td className="px-3 py-2 text-sm text-gray-600">DA001 (confirm receive)</td>
                <td className="px-3 py-2 text-sm text-blue-600">Agent app confirmation, device ID</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-3 py-2 text-sm text-gray-900">2025-08-12 16:22</td>
                <td className="px-3 py-2 text-sm font-medium text-gray-900">Delivered (Sale)</td>
                <td className="px-3 py-2 text-sm text-center text-red-600">-1</td>
                <td className="px-3 py-2 text-sm text-gray-600">DA001 → Customer #54021</td>
                <td className="px-3 py-2 text-sm text-gray-600">DA001</td>
                <td className="px-3 py-2 text-sm text-blue-600">e-receipt, order ID, GPS</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-3 py-2 text-sm text-gray-900">2025-08-13 11:05</td>
                <td className="px-3 py-2 text-sm font-medium text-gray-900">Delivered (Sale)</td>
                <td className="px-3 py-2 text-sm text-center text-red-600">-1</td>
                <td className="px-3 py-2 text-sm text-gray-600">DA001 → Customer #54098</td>
                <td className="px-3 py-2 text-sm text-gray-600">DA001</td>
                <td className="px-3 py-2 text-sm text-blue-600">e-receipt, order ID, GPS</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-3 py-2 text-sm text-gray-900">2025-08-13 17:40</td>
                <td className="px-3 py-2 text-sm font-medium text-gray-900">Delivered (Sale)</td>
                <td className="px-3 py-2 text-sm text-center text-red-600">-1</td>
                <td className="px-3 py-2 text-sm text-gray-600">DA001 → Customer #54122</td>
                <td className="px-3 py-2 text-sm text-gray-600">DA001</td>
                <td className="px-3 py-2 text-sm text-blue-600">e-receipt, order ID, GPS</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-3 py-2 text-sm text-gray-900">2025-08-14 09:18</td>
                <td className="px-3 py-2 text-sm font-medium text-gray-900">Delivered (Sale)</td>
                <td className="px-3 py-2 text-sm text-center text-red-600">-1</td>
                <td className="px-3 py-2 text-sm text-gray-600">DA001 → Customer #54177</td>
                <td className="px-3 py-2 text-sm text-gray-600">DA001</td>
                <td className="px-3 py-2 text-sm text-blue-600">e-receipt, order ID, GPS</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-3 py-2 text-sm text-gray-900">2025-08-15 07:05</td>
                <td className="px-3 py-2 text-sm font-medium text-gray-900">Agent Self-Declare</td>
                <td className="px-3 py-2 text-sm text-center text-red-600">5</td>
                <td className="px-3 py-2 text-sm text-gray-600">— DA001</td>
                <td className="px-3 py-2 text-sm text-gray-600">DA001 (PIN)</td>
                <td className="px-3 py-2 text-sm text-blue-600">Declaration log, device, IP</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Deliveries & Payments Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mt-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-900">Deliveries & Payments (drill-down)</h3>
        
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Order</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Item</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Qty</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Price</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Delivered At</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Paid At</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Method</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Match</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50">
                <td className="px-3 py-2 text-sm font-medium text-blue-600">#54021</td>
                <td className="px-3 py-2 text-sm text-gray-900">Aminat Hassan</td>
                <td className="px-3 py-2 text-sm text-gray-600">Shampoo</td>
                <td className="px-3 py-2 text-sm text-center text-gray-900">1</td>
                <td className="px-3 py-2 text-sm text-gray-900">₦8,500</td>
                <td className="px-3 py-2 text-sm text-gray-600">2025-08-12 16:22</td>
                <td className="px-3 py-2 text-sm text-gray-600">16:25</td>
                <td className="px-3 py-2 text-sm"><span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">POS</span></td>
                <td className="px-3 py-2 text-sm text-green-600">✅</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-3 py-2 text-sm font-medium text-blue-600">#54098</td>
                <td className="px-3 py-2 text-sm text-gray-900">Chika U.</td>
                <td className="px-3 py-2 text-sm text-gray-600">Shampoo</td>
                <td className="px-3 py-2 text-sm text-center text-gray-900">1</td>
                <td className="px-3 py-2 text-sm text-gray-900">₦8,500</td>
                <td className="px-3 py-2 text-sm text-gray-600">2025-08-13 11:05</td>
                <td className="px-3 py-2 text-sm text-gray-600">11:12</td>
                <td className="px-3 py-2 text-sm"><span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">POS</span></td>
                <td className="px-3 py-2 text-sm text-green-600">✅</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-3 py-2 text-sm font-medium text-blue-600">#54122</td>
                <td className="px-3 py-2 text-sm text-gray-900">Dr. Okoro</td>
                <td className="px-3 py-2 text-sm text-gray-600">Shampoo</td>
                <td className="px-3 py-2 text-sm text-center text-gray-900">1</td>
                <td className="px-3 py-2 text-sm text-gray-900">₦8,500</td>
                <td className="px-3 py-2 text-sm text-gray-600">2025-08-13 17:40</td>
                <td className="px-3 py-2 text-sm text-gray-600">17:45</td>
                <td className="px-3 py-2 text-sm"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Transfer</span></td>
                <td className="px-3 py-2 text-sm text-green-600">✅</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-3 py-2 text-sm font-medium text-blue-600">#54177</td>
                <td className="px-3 py-2 text-sm text-gray-900">K. Adebayo</td>
                <td className="px-3 py-2 text-sm text-gray-600">Shampoo</td>
                <td className="px-3 py-2 text-sm text-center text-gray-900">1</td>
                <td className="px-3 py-2 text-sm text-gray-900">₦8,500</td>
                <td className="px-3 py-2 text-sm text-gray-600">2025-08-14 09:18</td>
                <td className="px-3 py-2 text-sm text-gray-600">09:21</td>
                <td className="px-3 py-2 text-sm"><span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">POS</span></td>
                <td className="px-3 py-2 text-sm text-green-600">✅</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Open Actions Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mt-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-900">Open Actions</h3>
        <div className="flex flex-wrap gap-3">
          <button className="flex items-center space-x-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
            <span>🔒</span>
            <span>Freeze DA001 Shampoo Bin</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
            <span>⚠️</span>
            <span>Open Case</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <span>📱</span>
            <span>Request Physical Count (QR)</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
            <span>💳</span>
            <span>Debit 1 unit</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const AgentScorecard = () => {
  const agentData = [
    { name: "Fatima Abdullahi", score: 99.8, trend: "+0.2%", deliveries: 247, flags: 0, location: "Lagos Island", status: "excellent" },
    { name: "Chinedu Okoro", score: 98.5, trend: "+1.1%", deliveries: 189, flags: 1, location: "Victoria Island", status: "good" },
    { name: "Amina Hassan", score: 97.9, trend: "-0.3%", deliveries: 156, flags: 2, location: "Ikeja", status: "good" },
    { name: "Tunde Adebayo", score: 85.2, trend: "-12.6%", deliveries: 98, flags: 5, location: "Lekki", status: "critical" },
    { name: "Kemi Johnson", score: 92.1, trend: "-2.8%", deliveries: 134, flags: 3, location: "Surulere", status: "warning" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "excellent": return "bg-green-500";
      case "good": return "bg-green-400";
      case "warning": return "bg-yellow-500";
      case "critical": return "bg-red-500";
      default: return "bg-gray-400";
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Agent Scorecard</h2>
        <p className="text-gray-600">Performance rankings and audit scores for all delivery agents</p>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Agent</TableHead>
                <TableHead>Score</TableHead>
                <TableHead>Trend</TableHead>
                <TableHead>Deliveries</TableHead>
                <TableHead>Flags</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {agentData.map((agent, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${getStatusColor(agent.status)}`} />
                      <span className="font-medium">{agent.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="font-semibold">{agent.score}%</TableCell>
                  <TableCell className={agent.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}>
                    {agent.trend}
                  </TableCell>
                  <TableCell>{agent.deliveries}</TableCell>
                  <TableCell>
                    {agent.flags > 0 ? (
                      <Badge variant="destructive">{agent.flags}</Badge>
                    ) : (
                      <span className="text-gray-400">0</span>
                    )}
                  </TableCell>
                  <TableCell>{agent.location}</TableCell>
                  <TableCell>
                    <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white">
                      Audit
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

const AbdulAuditor = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname.split('/abdul/')[1] || '';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Abdul Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-red-500"
                onClick={() => navigate('/')}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Main
              </Button>
              <div className="flex items-center gap-3">
                <div className="bg-red-500 bg-opacity-50 p-3 rounded-lg">
                  <Eye className="h-6 w-6" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">Abdul - Inventory Auditor</h1>
                  <div className="flex items-center gap-2 text-red-100">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span>ACTIVE</span>
                    <span className="ml-4">Last audit: 2 mins ago</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-red-100">System Status: Active</div>
              <div className="text-sm text-red-200">Zero tolerance. Perfect memory. Every item tracked.</div>
            </div>
          </div>
        </div>

        {/* Module Navigation */}
        <div className="border-t border-red-500">
          <div className="px-6">
            <div className="text-sm text-red-200 mb-2 pt-4">ABDUL'S MODULES</div>
            <nav className="flex gap-1 pb-4">
              {AbdulModules.map((module) => (
                <NavLink
                  key={module.id}
                  to={`/abdul/${module.path}`}
                  end={module.path === ""}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-red-500 text-white"
                        : "text-red-100 hover:bg-red-500 hover:bg-opacity-50"
                    }`
                  }
                >
                  <module.icon className="h-4 w-4" />
                  {module.title}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6">
        <Routes>
          <Route index element={<Overview />} />
          <Route path="scorecard" element={<AgentScorecard />} />
          <Route path="investigation" element={<Investigation />} />
          <Route path="timeline" element={<div>Memory Timeline - Coming Soon</div>} />
          <Route path="enforcement" element={<div>Enforcement - Coming Soon</div>} />
          <Route path="reports" element={<div>Reports - Coming Soon</div>} />
        </Routes>
      </div>
    </div>
  );
};

export default AbdulAuditor;
