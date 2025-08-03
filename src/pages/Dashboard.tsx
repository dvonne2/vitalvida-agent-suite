
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Truck,
  CheckCircle,
  Star,
  Plus,
  Download,
  Clock,
  Package,
  TrendingUp,
  Activity
} from "lucide-react";

const Dashboard = () => {
  const [activities] = useState([
    {
      id: 1,
      type: "delivery_completed",
      agent: "Adebayo Okonkwo",
      customer: "Mrs. Amina Hassan",
      location: "Victoria Island, Lagos",
      time: "2 mins ago",
      value: "₦8,500"
    },
    {
      id: 2,
      type: "agent_available",
      agent: "Fatima Abdullahi",
      location: "Ikeja, Lagos",
      time: "5 mins ago"
    },
    {
      id: 3,
      type: "stock_alert",
      product: "Paracetamol 500mg",
      level: "Low Stock - 15 units",
      time: "8 mins ago"
    },
    {
      id: 4,
      type: "new_order",
      customer: "Dr. Chinedu Okoro",
      location: "Lagos Island",
      time: "12 mins ago",
      value: "₦15,200"
    },
    {
      id: 5,
      type: "delivery_rating",
      agent: "Amina Hassan",
      customer: "Mr. Bola Adeniji",
      rating: "5 stars",
      time: "18 mins ago"
    }
  ]);

  const metrics = [
    {
      title: "Total Agents",
      value: "24",
      change: "+3 this month",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      title: "Active Deliveries",
      value: "12",
      change: "+2 from yesterday",
      icon: Truck,
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      title: "Completed Today",
      value: "47",
      change: "97.8% success rate",
      icon: CheckCircle,
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      title: "Average Rating",
      value: "4.9",
      change: "+0.2 this month",
      icon: Star,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50"
    }
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "delivery_completed":
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case "agent_available":
        return <Users className="h-4 w-4 text-blue-600" />;
      case "stock_alert":
        return <Package className="h-4 w-4 text-orange-600" />;
      case "new_order":
        return <TrendingUp className="h-4 w-4 text-purple-600" />;
      case "delivery_rating":
        return <Star className="h-4 w-4 text-yellow-600" />;
      default:
        return <Activity className="h-4 w-4 text-gray-600" />;
    }
  };

  const getActivityText = (activity: any) => {
    switch (activity.type) {
      case "delivery_completed":
        return (
          <>
            <span className="font-medium">{activity.agent}</span> completed delivery to{" "}
            <span className="font-medium">{activity.customer}</span> in {activity.location}
            {activity.value && <span className="text-green-600 font-semibold"> • {activity.value}</span>}
          </>
        );
      case "agent_available":
        return (
          <>
            <span className="font-medium">{activity.agent}</span> is now available in {activity.location}
          </>
        );
      case "stock_alert":
        return (
          <>
            <span className="font-medium">{activity.product}</span> - {activity.level}
          </>
        );
      case "new_order":
        return (
          <>
            New order from <span className="font-medium">{activity.customer}</span> in {activity.location}
            {activity.value && <span className="text-green-600 font-semibold"> • {activity.value}</span>}
          </>
        );
      case "delivery_rating":
        return (
          <>
            <span className="font-medium">{activity.agent}</span> received {activity.rating} from{" "}
            <span className="font-medium">{activity.customer}</span>
          </>
        );
      default:
        return "Unknown activity";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-500">Welcome back! Here's what's happening today.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
          <Button className="flex items-center gap-2 bg-green-600 hover:bg-green-700">
            <Plus className="h-4 w-4" />
            Add Agent
          </Button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 font-medium">{metric.title}</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">{metric.value}</p>
                  <p className="text-sm text-green-600 mt-1 font-medium">{metric.change}</p>
                </div>
                <div className={`p-3 rounded-full ${metric.bgColor}`}>
                  <metric.icon className={`h-6 w-6 ${metric.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-green-600" />
              Recent Activities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activities.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="mt-1">
                    {getActivityIcon(activity.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900">
                      {getActivityText(activity)}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <Clock className="h-3 w-3 text-gray-400" />
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Performance Indicators */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-600" />
              Performance Indicators
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 rounded-lg bg-green-50 border border-green-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-green-800">Today's Success Rate</p>
                  <p className="text-2xl font-bold text-green-900">97.8%</p>
                </div>
                <div className="p-2 bg-green-100 rounded-full">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-blue-50 border border-blue-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-blue-800">Average Delivery Time</p>
                  <p className="text-2xl font-bold text-blue-900">2.4 hrs</p>
                </div>
                <div className="p-2 bg-blue-100 rounded-full">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-yellow-50 border border-yellow-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-yellow-800">Top Performer</p>
                  <p className="text-lg font-bold text-yellow-900">Fatima Abdullahi</p>
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 mt-1">
                    15 deliveries today
                  </Badge>
                </div>
                <div className="p-2 bg-yellow-100 rounded-full">
                  <Star className="h-6 w-6 text-yellow-600" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
