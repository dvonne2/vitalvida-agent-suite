
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Plus,
  Search,
  Phone,
  MapPin,
  Star,
  Clock,
  Package,
  DollarSign,
  User,
  Eye,
  Calendar,
  Users,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Navigation,
  Flag
} from "lucide-react";

const DeliveryAgents = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [activeProfileTab, setActiveProfileTab] = useState("pending");
  const [searchTerm, setSearchTerm] = useState("");

  const agents = [
    {
      id: "AG001",
      name: "Fatima Abdullahi",
      phone: "+234 801 234 5678",
      email: "fatima.abdullahi@vitalvida.com",
      location: "Victoria Island, Lagos",
      status: "Available",
      rating: 4.9,
      totalDeliveries: 156,
      successRate: 98.7,
      currentStockValue: 45000,
      lastActivity: "2 mins ago",
      photo: "/placeholder.svg",
      pendingOrders: 5,
      completedToday: 8
    },
    {
      id: "AG002",
      name: "Adebayo Okonkwo",
      phone: "+234 802 345 6789",
      email: "adebayo.okonkwo@vitalvida.com",
      location: "Lagos Island, Lagos",
      status: "On Delivery",
      rating: 4.8,
      totalDeliveries: 142,
      successRate: 95.8,
      currentStockValue: 38000,
      lastActivity: "15 mins ago",
      photo: "/placeholder.svg",
      pendingOrders: 3,
      completedToday: 6
    },
    {
      id: "AG003",
      name: "Chinedu Okoro",
      phone: "+234 803 456 7890",
      email: "chinedu.okoro@vitalvida.com",
      location: "Ikeja, Lagos",
      status: "Available",
      rating: 4.7,
      totalDeliveries: 138,
      successRate: 92.4,
      currentStockValue: 52000,
      lastActivity: "1 hour ago",
      photo: "/placeholder.svg",
      pendingOrders: 7,
      completedToday: 4
    },
    {
      id: "AG004",
      name: "Amina Hassan",
      phone: "+234 804 567 8901",
      email: "amina.hassan@vitalvida.com",
      location: "Lekki, Lagos",
      status: "Offline",
      rating: 4.8,
      totalDeliveries: 125,
      successRate: 94.2,
      currentStockValue: 28000,
      lastActivity: "3 hours ago",
      photo: "/placeholder.svg",
      pendingOrders: 2,
      completedToday: 0
    }
  ];

  const pendingOrders = [
    {
      id: "ORD001",
      customer: "Mrs. Blessing Adebayo",
      phone: "+234 805 123 4567",
      address: "15 Adeola Odeku Street, Victoria Island, Lagos",
      items: ["Paracetamol 500mg", "Vitamin C"],
      value: 2500,
      priority: "High",
      expectedTime: "2:30 PM",
      status: "Due Today",
      orderTime: "10:30 AM"
    },
    {
      id: "ORD002",
      customer: "Mr. Kemi Olatunji",
      phone: "+234 806 234 5678",
      address: "Plot 42 Ozumba Mbadiwe, Victoria Island, Lagos",
      items: ["Blood Pressure Monitor", "Amlodipine"],
      value: 15200,
      priority: "Normal",
      expectedTime: "4:00 PM",
      status: "Overdue",
      orderTime: "Yesterday 3:00 PM"
    },
    {
      id: "ORD003",
      customer: "Dr. Folake Martins",
      phone: "+234 807 345 6789",
      address: "23 Tiamiyu Savage Street, Victoria Island, Lagos",
      items: ["Insulin Pen", "Glucometer"],
      value: 12800,
      priority: "Urgent",
      expectedTime: "1:00 PM",
      status: "Due Today",
      orderTime: "11:15 AM"
    }
  ];

  const orderHistory = [
    {
      id: "ORD104",
      customer: "Mrs. Funmi Adebayo",
      address: "12 Kofo Abayomi Street, Victoria Island",
      completedTime: "11:45 AM",
      deliveryTime: "2.2 hrs",
      rating: 5,
      value: 8500,
      items: ["Malaria Kit", "ORS"],
      paymentStatus: "Paid"
    },
    {
      id: "ORD105",
      customer: "Mr. Tunde Bakare",
      address: "8 Adetokunbo Ademola Street, Victoria Island",
      completedTime: "Yesterday 4:30 PM",
      deliveryTime: "1.8 hrs",
      rating: 5,
      value: 5200,
      items: ["Amoxicillin", "Paracetamol"],
      paymentStatus: "Paid"
    }
  ];

  const productsReceived = [
    {
      id: "REC001",
      batchNumber: "BT2024-001",
      products: ["Paracetamol 500mg (50 pcs)", "Vitamin C (30 pcs)"],
      supplier: "Lagos Pharma Distributors",
      receivedDate: "Jan 15, 2024",
      totalValue: 12500
    },
    {
      id: "REC002",
      batchNumber: "BT2024-002",
      products: ["Blood Pressure Monitor (5 pcs)", "Glucometer (3 pcs)"],
      supplier: "Emzor Pharmaceutical Industries",
      receivedDate: "Jan 12, 2024",
      totalValue: 75000
    }
  ];

  const currentStock = [
    {
      product: "Paracetamol 500mg",
      quantity: 45,
      status: "Good",
      expiryDate: "Aug 2025",
      lastMovement: "2 hrs ago - Delivered 2 units"
    },
    {
      product: "Blood Pressure Monitor",
      quantity: 3,
      status: "Low",
      expiryDate: "N/A",
      lastMovement: "Yesterday - Received 5 units"
    },
    {
      product: "Vitamin C 1000mg",
      quantity: 8,
      status: "Critical",
      expiryDate: "Dec 2024",
      lastMovement: "3 hrs ago - Delivered 1 unit"
    }
  ];

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      Available: { className: "bg-green-100 text-green-800", icon: CheckCircle },
      "On Delivery": { className: "bg-yellow-100 text-yellow-800", icon: Clock },
      Offline: { className: "bg-gray-100 text-gray-800", icon: AlertCircle }
    };

    const config = statusConfig[status] || statusConfig.Available;
    const Icon = config.icon;

    return (
      <Badge className={`flex items-center gap-1 ${config.className}`}>
        <Icon className="h-3 w-3" />
        {status}
      </Badge>
    );
  };

  const getPriorityBadge = (priority: string) => {
    const priorityConfig = {
      Urgent: { className: "bg-red-100 text-red-800" },
      High: { className: "bg-orange-100 text-orange-800" },
      Normal: { className: "bg-blue-100 text-blue-800" }
    };

    const config = priorityConfig[priority] || priorityConfig.Normal;

    return (
      <Badge className={config.className}>
        {priority}
      </Badge>
    );
  };

  const getStockStatusBadge = (status: string) => {
    const statusConfig = {
      Good: { className: "bg-green-100 text-green-800 border-green-300" },
      Low: { className: "bg-yellow-100 text-yellow-800 border-yellow-300" },
      Critical: { className: "bg-red-100 text-red-800 border-red-300" }
    };

    return (
      <Badge className={`border ${statusConfig[status]?.className || statusConfig.Good.className}`}>
        {status}
      </Badge>
    );
  };

  const openAgentProfile = (agent: any) => {
    setSelectedAgent(agent);
    setIsProfileModalOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Delivery Agents</h1>
          <p className="text-gray-500">Manage your delivery team and track performance</p>
        </div>
        <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2 bg-green-600 hover:bg-green-700">
              <Plus className="h-4 w-4" />
              Add New Agent
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add New Delivery Agent</DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input id="fullName" placeholder="Enter full name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="+234 XXX XXX XXXX" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="agent@vitalvida.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Home Address</Label>
                <Input id="address" placeholder="Enter address" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="guarantor1">First Guarantor</Label>
                <Input id="guarantor1" placeholder="Guarantor name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="relationship1">Relationship</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select relationship" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="family">Family Member</SelectItem>
                    <SelectItem value="friend">Friend</SelectItem>
                    <SelectItem value="colleague">Colleague</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="guarantor2">Second Guarantor</Label>
                <Input id="guarantor2" placeholder="Guarantor name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="relationship2">Relationship</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select relationship" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="family">Family Member</SelectItem>
                    <SelectItem value="friend">Friend</SelectItem>
                    <SelectItem value="colleague">Colleague</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="col-span-2 space-y-2">
                <Label htmlFor="serviceArea">Service Area</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select service area" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="victoria">Victoria Island</SelectItem>
                    <SelectItem value="lagos">Lagos Island</SelectItem>
                    <SelectItem value="ikeja">Ikeja</SelectItem>
                    <SelectItem value="lekki">Lekki</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <Button variant="outline" onClick={() => setIsAddModalOpen(false)}>
                Cancel
              </Button>
              <Button className="bg-green-600 hover:bg-green-700">
                Add Agent
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Search Bar */}
      <Card>
        <CardContent className="p-6">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search agents..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Agent Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {agents.map((agent) => (
          <Card key={agent.id} className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <User className="h-6 w-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-gray-900">{agent.name}</h3>
                  <p className="text-sm text-gray-500">ID: {agent.id}</p>
                </div>
                {getStatusBadge(agent.status)}
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Phone className="h-4 w-4" />
                  {agent.phone}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin className="h-4 w-4" />
                  {agent.location}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="h-4 w-4" />
                  Last active: {agent.lastActivity}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <p className="text-lg font-bold text-green-600">{agent.totalDeliveries}</p>
                  <p className="text-xs text-gray-600">Total Deliveries</p>
                </div>
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <div className="flex items-center justify-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <p className="text-lg font-bold text-blue-600">{agent.rating}</p>
                  </div>
                  <p className="text-xs text-gray-600">Rating</p>
                </div>
                <div className="text-center p-3 bg-yellow-50 rounded-lg">
                  <p className="text-lg font-bold text-yellow-600">{agent.successRate}%</p>
                  <p className="text-xs text-gray-600">Success Rate</p>
                </div>
                <div className="text-center p-3 bg-purple-50 rounded-lg">
                  <p className="text-sm font-bold text-purple-600">₦{agent.currentStockValue.toLocaleString()}</p>
                  <p className="text-xs text-gray-600">Stock Value</p>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-600">
                  <span className="font-medium">{agent.pendingOrders}</span> pending orders
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                  onClick={() => openAgentProfile(agent)}
                >
                  <Eye className="h-4 w-4" />
                  View Profile
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Agent Profile Modal */}
      <Dialog open={isProfileModalOpen} onOpenChange={setIsProfileModalOpen}>
        <DialogContent className="max-w-6xl h-[90vh] overflow-hidden flex flex-col">
          {selectedAgent && (
            <>
              {/* Green Header Section */}
              <div className="bg-green-600 text-white p-6 -m-6 mb-6">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <User className="h-10 w-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-2">{selectedAgent.name}</h2>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        {selectedAgent.phone}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {selectedAgent.location}
                      </div>
                      <div>Status: {selectedAgent.status}</div>
                      <div>Last Active: {selectedAgent.lastActivity}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    {getStatusBadge(selectedAgent.status)}
                  </div>
                </div>

                {/* Performance Cards */}
                <div className="grid grid-cols-4 gap-4 mt-6">
                  <div className="bg-white bg-opacity-10 p-4 rounded-lg text-center">
                    <p className="text-2xl font-bold">{selectedAgent.totalDeliveries}</p>
                    <p className="text-sm opacity-90">Total Deliveries</p>
                  </div>
                  <div className="bg-white bg-opacity-10 p-4 rounded-lg text-center">
                    <p className="text-2xl font-bold">{selectedAgent.successRate}%</p>
                    <p className="text-sm opacity-90">Success Rate</p>
                  </div>
                  <div className="bg-white bg-opacity-10 p-4 rounded-lg text-center">
                    <p className="text-xl font-bold">₦{selectedAgent.currentStockValue.toLocaleString()}</p>
                    <p className="text-sm opacity-90">Stock Value</p>
                  </div>
                  <div className="bg-white bg-opacity-10 p-4 rounded-lg text-center">
                    <div className="flex items-center justify-center gap-1">
                      <Star className="h-4 w-4 text-yellow-300 fill-current" />
                      <p className="text-2xl font-bold">{selectedAgent.rating}</p>
                    </div>
                    <p className="text-sm opacity-90">Rating</p>
                  </div>
                </div>
              </div>

              {/* Tabs Section */}
              <div className="flex-1 overflow-hidden">
                <Tabs value={activeProfileTab} onValueChange={setActiveProfileTab} className="h-full flex flex-col">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="pending" className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      Pending Orders ({pendingOrders.length})
                    </TabsTrigger>
                    <TabsTrigger value="history" className="flex items-center gap-2">
                      <Package className="h-4 w-4" />
                      Orders History
                    </TabsTrigger>
                    <TabsTrigger value="received" className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4" />
                      Products Received
                    </TabsTrigger>
                    <TabsTrigger value="stock" className="flex items-center gap-2">
                      <Package className="h-4 w-4" />
                      Current Stock
                    </TabsTrigger>
                  </TabsList>

                  {/* Pending Orders Tab */}
                  <TabsContent value="pending" className="flex-1 overflow-auto">
                    <div className="space-y-4">
                      <div className="grid grid-cols-4 gap-4 mb-6">
                        <Card>
                          <CardContent className="p-4 text-center">
                            <p className="text-2xl font-bold text-gray-900">{pendingOrders.length}</p>
                            <p className="text-sm text-gray-600">Total Pending</p>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="p-4 text-center">
                            <p className="text-2xl font-bold text-red-600">1</p>
                            <p className="text-sm text-gray-600">Overdue</p>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="p-4 text-center">
                            <p className="text-2xl font-bold text-green-600">2</p>
                            <p className="text-sm text-gray-600">Due Today</p>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="p-4 text-center">
                            <p className="text-2xl font-bold text-orange-600">1</p>
                            <p className="text-sm text-gray-600">High Priority</p>
                          </CardContent>
                        </Card>
                      </div>

                      {pendingOrders.map((order) => (
                        <Card key={order.id} className="p-4">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <h4 className="font-semibold text-lg">{order.customer}</h4>
                              <p className="text-sm text-gray-600 flex items-center gap-2">
                                <Phone className="h-4 w-4" />
                                {order.phone}
                              </p>
                            </div>
                            <div className="text-right">
                              {getPriorityBadge(order.priority)}
                              <p className="text-sm text-gray-500 mt-1">{order.expectedTime}</p>
                            </div>
                          </div>

                          <div className="mb-3">
                            <p className="text-sm text-gray-600 flex items-start gap-2 mb-2">
                              <MapPin className="h-4 w-4 mt-0.5" />
                              {order.address}
                            </p>
                            <p className="text-sm text-gray-600">
                              <strong>Items:</strong> {order.items.join(", ")}
                            </p>
                            <p className="text-lg font-semibold text-green-600 mt-2">
                              Total: ₦{order.value.toLocaleString()}
                            </p>
                          </div>

                          <div className="flex justify-between items-center pt-3 border-t">
                            <Badge className={
                              order.status === "Overdue" ? "bg-red-100 text-red-800" : "bg-yellow-100 text-yellow-800"
                            }>
                              {order.status}
                            </Badge>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm" className="flex items-center gap-2">
                                <Phone className="h-4 w-4" />
                                Call
                              </Button>
                              <Button variant="outline" size="sm" className="flex items-center gap-2">
                                <Navigation className="h-4 w-4" />
                                Directions
                              </Button>
                              <Button size="sm" className="bg-green-600 hover:bg-green-700">
                                <CheckCircle className="h-4 w-4 mr-2" />
                                Mark Delivered
                              </Button>
                              <Button variant="outline" size="sm" className="flex items-center gap-2">
                                <Flag className="h-4 w-4" />
                                Report Issue
                              </Button>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>

                  {/* Orders History Tab */}
                  <TabsContent value="history" className="flex-1 overflow-auto">
                    <div className="space-y-4">
                      {orderHistory.map((order) => (
                        <Card key={order.id} className="p-4 border-l-4 border-l-green-500">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <h4 className="font-semibold">{order.customer}</h4>
                              <p className="text-sm text-gray-600">{order.address}</p>
                            </div>
                            <div className="text-right">
                              <div className="flex items-center gap-1">
                                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                                <span className="font-medium">{order.rating}</span>
                              </div>
                              <p className="text-sm text-gray-500">{order.completedTime}</p>
                            </div>
                          </div>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <p className="text-sm text-gray-600">Items: {order.items.join(", ")}</p>
                              <p className="text-lg font-semibold text-green-600">₦{order.value.toLocaleString()}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-600">Delivery Time: {order.deliveryTime}</p>
                              <Badge className="bg-green-100 text-green-800 mt-1">
                                {order.paymentStatus}
                              </Badge>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>

                  {/* Products Received Tab */}
                  <TabsContent value="received" className="flex-1 overflow-auto">
                    <div className="space-y-4">
                      {productsReceived.map((batch) => (
                        <Card key={batch.id} className="p-4 border-l-4 border-l-blue-500">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <h4 className="font-semibold">Batch: {batch.batchNumber}</h4>
                              <p className="text-sm text-gray-600">{batch.supplier}</p>
                            </div>
                            <div className="text-right">
                              <p className="font-semibold text-blue-600">₦{batch.totalValue.toLocaleString()}</p>
                              <p className="text-sm text-gray-500">{batch.receivedDate}</p>
                            </div>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600 mb-2"><strong>Products:</strong></p>
                            <div className="flex flex-wrap gap-2">
                              {batch.products.map((product, idx) => (
                                <Badge key={idx} variant="outline">{product}</Badge>
                              ))}
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>

                  {/* Current Stock Tab */}
                  <TabsContent value="stock" className="flex-1 overflow-auto">
                    <div className="space-y-4">
                      {currentStock.map((item, idx) => (
                        <Card key={idx} className={`p-4 border-l-4 ${
                          item.status === "Good" ? "border-l-green-500" :
                          item.status === "Low" ? "border-l-yellow-500" : "border-l-red-500"
                        }`}>
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <h4 className="font-semibold">{item.product}</h4>
                              <p className="text-sm text-gray-600">Expires: {item.expiryDate}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-2xl font-bold text-gray-900">{item.quantity}</p>
                              {getStockStatusBadge(item.status)}
                            </div>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">{item.lastMovement}</p>
                            <div className="flex gap-2 mt-2">
                              <Button variant="outline" size="sm">-</Button>
                              <Button variant="outline" size="sm">+</Button>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DeliveryAgents;
