
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  DollarSign,
  Package,
  Clock,
  Star,
  Download,
  Users,
  MapPin
} from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";

const Analytics = () => {
  const kpiData = [
    {
      title: "Total Revenue",
      value: "₦2.4M",
      change: "+12.5%",
      changeType: "increase",
      icon: DollarSign,
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      title: "Items Delivered",
      value: "3,247",
      change: "+8.3%",
      changeType: "increase",
      icon: Package,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      title: "Average Delivery Time",
      value: "2.4 hrs",
      change: "-15 mins",
      changeType: "decrease",
      icon: Clock,
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      title: "Success Rate",
      value: "97.8%",
      change: "+2.1%",
      changeType: "increase",
      icon: Star,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50"
    }
  ];

  const deliveryTrendData = [
    { day: "Mon", deliveries: 45, revenue: 180000 },
    { day: "Tue", deliveries: 52, revenue: 210000 },
    { day: "Wed", deliveries: 48, revenue: 195000 },
    { day: "Thu", deliveries: 61, revenue: 245000 },
    { day: "Fri", deliveries: 58, revenue: 232000 },
    { day: "Sat", deliveries: 43, revenue: 172000 },
    { day: "Sun", deliveries: 38, revenue: 152000 }
  ];

  const agentPerformanceData = [
    { name: "Fatima Abdullahi", deliveries: 156, efficiency: 98, revenue: 624000 },
    { name: "Adebayo Okonkwo", deliveries: 142, efficiency: 95, revenue: 568000 },
    { name: "Chinedu Okoro", deliveries: 138, efficiency: 92, revenue: 552000 },
    { name: "Amina Hassan", deliveries: 125, efficiency: 94, revenue: 500000 },
    { name: "Bola Adeniji", deliveries: 118, efficiency: 89, revenue: 472000 }
  ];

  const categoryDistribution = [
    { name: "Medications", value: 65, color: "#28a745" },
    { name: "Supplements", value: 25, color: "#17a2b8" },
    { name: "Medical Devices", value: 10, color: "#ffc107" }
  ];

  const geographicData = [
    { location: "Lagos Island", percentage: 35, deliveries: 1137, color: "#28a745" },
    { location: "Victoria Island", percentage: 28, deliveries: 909, color: "#20c997" },
    { location: "Ikeja", percentage: 22, deliveries: 714, color: "#17a2b8" },
    { location: "Lekki", percentage: 15, deliveries: 487, color: "#6f42c1" }
  ];

  const agentDetailedPerformance = [
    {
      name: "Fatima Abdullahi",
      deliveries: 156,
      successRate: 98.7,
      avgTime: "2.1 hrs",
      revenue: "₦624,000",
      rating: 4.9,
      status: "Available"
    },
    {
      name: "Adebayo Okonkwo",
      deliveries: 142,
      successRate: 95.8,
      avgTime: "2.3 hrs",
      revenue: "₦568,000",
      rating: 4.8,
      status: "On Delivery"
    },
    {
      name: "Chinedu Okoro",
      deliveries: 138,
      successRate: 92.4,
      avgTime: "2.5 hrs",
      revenue: "₦552,000",
      rating: 4.7,
      status: "Available"
    },
    {
      name: "Amina Hassan",
      deliveries: 125,
      successRate: 94.2,
      avgTime: "2.2 hrs",
      revenue: "₦500,000",
      rating: 4.8,
      status: "Available"
    },
    {
      name: "Bola Adeniji",
      deliveries: 118,
      successRate: 89.3,
      avgTime: "2.8 hrs",
      revenue: "₦472,000",
      rating: 4.6,
      status: "Offline"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Analytics & Reports</h1>
          <p className="text-gray-500">Comprehensive business intelligence dashboard</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Export PDF
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Export CSV
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiData.map((kpi, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 font-medium">{kpi.title}</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">{kpi.value}</p>
                  <div className="flex items-center mt-2">
                    <TrendingUp className={`h-4 w-4 mr-1 ${
                      kpi.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                    }`} />
                    <p className={`text-sm font-medium ${
                      kpi.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {kpi.change}
                    </p>
                  </div>
                </div>
                <div className={`p-3 rounded-full ${kpi.bgColor}`}>
                  <kpi.icon className={`h-6 w-6 ${kpi.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Delivery Performance Trend */}
        <Card>
          <CardHeader>
            <CardTitle>Delivery Performance Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={deliveryTrendData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Legend />
                  <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="deliveries"
                    stroke="#28a745"
                    strokeWidth={2}
                    name="Deliveries"
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="revenue"
                    stroke="#17a2b8"
                    strokeWidth={2}
                    name="Revenue (₦)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Agent Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Agent Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={agentPerformanceData} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" width={100} />
                  <Tooltip />
                  <Bar dataKey="deliveries" fill="#28a745" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Item Categories Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Item Categories Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryDistribution}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {categoryDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Geographic Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Geographic Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {geographicData.map((location, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-gray-600" />
                    <div>
                      <p className="font-medium text-gray-900">{location.location}</p>
                      <p className="text-sm text-gray-500">{location.deliveries} deliveries</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-900">{location.percentage}%</p>
                    <div className="w-20 h-2 bg-gray-200 rounded-full mt-1">
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${location.percentage}%`, backgroundColor: location.color }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Performance Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Detailed Agent Performance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4 font-semibold text-gray-900">Agent</th>
                  <th className="text-left p-4 font-semibold text-gray-900">Deliveries</th>
                  <th className="text-left p-4 font-semibold text-gray-900">Success Rate</th>
                  <th className="text-left p-4 font-semibold text-gray-900">Avg Time</th>
                  <th className="text-left p-4 font-semibold text-gray-900">Revenue</th>
                  <th className="text-left p-4 font-semibold text-gray-900">Rating</th>
                  <th className="text-left p-4 font-semibold text-gray-900">Status</th>
                </tr>
              </thead>
              <tbody>
                {agentDetailedPerformance.map((agent, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-4 font-medium text-gray-900">{agent.name}</td>
                    <td className="p-4 text-gray-600">{agent.deliveries}</td>
                    <td className="p-4 text-gray-600">{agent.successRate}%</td>
                    <td className="p-4 text-gray-600">{agent.avgTime}</td>
                    <td className="p-4 text-gray-600 font-semibold text-green-600">{agent.revenue}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-gray-600">{agent.rating}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <Badge
                        variant={agent.status === "Available" ? "default" : agent.status === "On Delivery" ? "secondary" : "outline"}
                        className={
                          agent.status === "Available"
                            ? "bg-green-100 text-green-800"
                            : agent.status === "On Delivery"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-gray-100 text-gray-800"
                        }
                      >
                        {agent.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;
