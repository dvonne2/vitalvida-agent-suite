
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Plus,
  Search,
  Package,
  PackageCheck,
  ShoppingCart,
  ArrowRightLeft,
  Warehouse,
  Download,
  Filter,
  AlertTriangle,
  CheckCircle,
  Clock,
  Truck
} from "lucide-react";

const Inventory = () => {
  const [activeTab, setActiveTab] = useState("simple");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Sample data for different inventory sections
  const overviewStats = {
    totalProducts: 156,
    totalValue: 8420000,
    lowStockAlerts: 8,
    expiringSoon: 12
  };

  const simpleProducts = [
    {
      id: "SP001",
      name: "Paracetamol 500mg",
      code: "PAR-500",
      category: "Analgesics",
      stock: 245,
      unitPrice: 150,
      supplier: "Lagos Pharma Distributors",
      expiryDate: "2025-08-15",
      status: "In Stock"
    },
    {
      id: "SP002",
      name: "Amoxicillin 250mg",
      code: "AMX-250",
      category: "Antibiotics",
      stock: 12,
      unitPrice: 850,
      supplier: "West Africa Drug Company",
      expiryDate: "2024-12-20",
      status: "Low Stock"
    },
    {
      id: "SP003",
      name: "Blood Pressure Monitor",
      code: "BPM-001",
      category: "Medical Devices",
      stock: 25,
      unitPrice: 12500,
      supplier: "Emzor Pharmaceutical Industries",
      expiryDate: "N/A",
      status: "In Stock"
    }
  ];

  const compositeProducts = [
    {
      id: "CP001",
      name: "Malaria Treatment Kit",
      components: ["Artemether-Lumefantrine", "Paracetamol", "ORS Sachets"],
      bundlePrice: 2500,
      componentCost: 2200,
      savings: 300,
      stock: 45,
      status: "Available"
    },
    {
      id: "CP002",
      name: "Hypertension Care Package",
      components: ["Amlodipine", "Blood Pressure Monitor", "Health Journal"],
      bundlePrice: 15000,
      componentCost: 16500,
      savings: 1500,
      stock: 18,
      status: "Available"
    },
    {
      id: "CP003",
      name: "Diabetes Management Bundle",
      components: ["Metformin", "Glucometer", "Test Strips"],
      bundlePrice: 8500,
      componentCost: 9200,
      savings: 700,
      stock: 0,
      status: "Out of Stock"
    }
  ];

  const purchaseOrders = [
    {
      id: "PO001",
      supplier: "Lagos Pharma Distributors",
      orderDate: "2024-01-15",
      expectedDate: "2024-01-20",
      items: 15,
      totalValue: 450000,
      status: "In Transit"
    },
    {
      id: "PO002",
      supplier: "West Africa Drug Company",
      orderDate: "2024-01-12",
      expectedDate: "2024-01-18",
      items: 8,
      totalValue: 320000,
      status: "Pending"
    },
    {
      id: "PO003",
      supplier: "Emzor Pharmaceutical Industries",
      orderDate: "2024-01-10",
      expectedDate: "2024-01-15",
      items: 22,
      totalValue: 680000,
      status: "Received"
    }
  ];

  const transfers = [
    {
      id: "TR001",
      from: "Central Warehouse",
      to: "Adebayo Okonkwo",
      items: 12,
      priority: "High",
      status: "In Transit",
      date: "2024-01-15"
    },
    {
      id: "TR002",
      from: "Central Warehouse",
      to: "Fatima Abdullahi",
      items: 8,
      priority: "Normal",
      status: "Delivered",
      date: "2024-01-14"
    },
    {
      id: "TR003",
      from: "Central Warehouse",
      to: "Chinedu Okoro",
      items: 15,
      priority: "Urgent",
      status: "Pending",
      date: "2024-01-16"
    }
  ];

  const warehouseZones = [
    {
      name: "General Storage",
      capacity: 1000,
      occupied: 750,
      utilization: 75,
      temperature: "Room Temperature"
    },
    {
      name: "Cold Storage",
      capacity: 200,
      occupied: 120,
      utilization: 60,
      temperature: "2-8°C"
    },
    {
      name: "High Security",
      capacity: 100,
      occupied: 45,
      utilization: 45,
      temperature: "Controlled"
    }
  ];

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      "In Stock": { variant: "default", className: "bg-green-100 text-green-800", icon: CheckCircle },
      "Low Stock": { variant: "secondary", className: "bg-yellow-100 text-yellow-800", icon: AlertTriangle },
      "Out of Stock": { variant: "destructive", className: "bg-red-100 text-red-800", icon: AlertTriangle },
      "Available": { variant: "default", className: "bg-green-100 text-green-800", icon: CheckCircle },
      "In Transit": { variant: "secondary", className: "bg-blue-100 text-blue-800", icon: Truck },
      "Pending": { variant: "secondary", className: "bg-yellow-100 text-yellow-800", icon: Clock },
      "Received": { variant: "default", className: "bg-green-100 text-green-800", icon: CheckCircle },
      "Delivered": { variant: "default", className: "bg-green-100 text-green-800", icon: CheckCircle }
    };

    const config = statusConfig[status] || statusConfig["In Stock"];
    const Icon = config.icon;

    return (
      <Badge className={`flex items-center gap-1 ${config.className}`}>
        <Icon className="h-3 w-3" />
        {status}
      </Badge>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Inventory Management</h1>
          <p className="text-gray-500">Comprehensive pharmaceutical inventory control</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
          <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
            <DialogTrigger asChild>
              <Button className="flex items-center gap-2 bg-green-600 hover:bg-green-700">
                <Plus className="h-4 w-4" />
                Add Product
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Product</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label>Product Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select product type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="simple">Simple Product</SelectItem>
                      <SelectItem value="bundle">Composite Bundle</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 font-medium">Total Products</p>
                <p className="text-3xl font-bold text-gray-900">{overviewStats.totalProducts}</p>
              </div>
              <Package className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 font-medium">Total Stock Value</p>
                <p className="text-2xl font-bold text-green-600">₦{overviewStats.totalValue.toLocaleString()}</p>
              </div>
              <PackageCheck className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 font-medium">Low Stock Alerts</p>
                <p className="text-3xl font-bold text-yellow-600">{overviewStats.lowStockAlerts}</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 font-medium">Expiring Soon</p>
                <p className="text-3xl font-bold text-red-600">{overviewStats.expiringSoon}</p>
              </div>
              <Clock className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Inventory Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="simple" className="flex items-center gap-2">
            <Package className="h-4 w-4" />
            Simple Products
          </TabsTrigger>
          <TabsTrigger value="composite" className="flex items-center gap-2">
            <PackageCheck className="h-4 w-4" />
            Composite Products
          </TabsTrigger>
          <TabsTrigger value="purchase" className="flex items-center gap-2">
            <ShoppingCart className="h-4 w-4" />
            Purchase Orders
          </TabsTrigger>
          <TabsTrigger value="transfers" className="flex items-center gap-2">
            <ArrowRightLeft className="h-4 w-4" />
            Transfers
          </TabsTrigger>
          <TabsTrigger value="warehouse" className="flex items-center gap-2">
            <Warehouse className="h-4 w-4" />
            Central Warehouse
          </TabsTrigger>
        </TabsList>

        {/* Simple Products Tab */}
        <TabsContent value="simple" className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button variant="outline" className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  Filter
                </Button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4 font-semibold">Product</th>
                      <th className="text-left p-4 font-semibold">Code</th>
                      <th className="text-left p-4 font-semibold">Category</th>
                      <th className="text-left p-4 font-semibold">Stock</th>
                      <th className="text-left p-4 font-semibold">Unit Price</th>
                      <th className="text-left p-4 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {simpleProducts.map((product) => (
                      <tr key={product.id} className="border-b hover:bg-gray-50">
                        <td className="p-4 font-medium">{product.name}</td>
                        <td className="p-4 text-gray-600 font-mono">{product.code}</td>
                        <td className="p-4">
                          <Badge variant="outline">{product.category}</Badge>
                        </td>
                        <td className="p-4 font-semibold">{product.stock}</td>
                        <td className="p-4 text-green-600 font-semibold">₦{product.unitPrice.toLocaleString()}</td>
                        <td className="p-4">{getStatusBadge(product.status)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Composite Products Tab */}
        <TabsContent value="composite" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Product Bundles</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {compositeProducts.map((bundle) => (
                  <div key={bundle.id} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-lg">{bundle.name}</h3>
                      {getStatusBadge(bundle.status)}
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600 mb-2">Components:</p>
                        <div className="space-y-1">
                          {bundle.components.map((component, idx) => (
                            <Badge key={idx} variant="outline" className="mr-2 mb-1">
                              {component}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Bundle Price:</span>
                          <span className="font-semibold text-green-600">₦{bundle.bundlePrice.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Component Cost:</span>
                          <span className="text-gray-600">₦{bundle.componentCost.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-green-600 font-medium">Customer Savings:</span>
                          <span className="font-semibold text-green-600">₦{bundle.savings.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Stock:</span>
                          <span className="font-semibold">{bundle.stock} units</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Purchase Orders Tab */}
        <TabsContent value="purchase" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Card>
              <CardContent className="p-4 text-center">
                <p className="text-sm text-gray-600">Pending</p>
                <p className="text-2xl font-bold text-yellow-600">5</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <p className="text-sm text-gray-600">In Transit</p>
                <p className="text-2xl font-bold text-blue-600">3</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <p className="text-sm text-gray-600">Received This Month</p>
                <p className="text-2xl font-bold text-green-600">12</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <p className="text-sm text-gray-600">PO Value</p>
                <p className="text-lg font-bold text-green-600">₦1.45M</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardContent className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4 font-semibold">PO ID</th>
                      <th className="text-left p-4 font-semibold">Supplier</th>
                      <th className="text-left p-4 font-semibold">Order Date</th>
                      <th className="text-left p-4 font-semibold">Expected Date</th>
                      <th className="text-left p-4 font-semibold">Items</th>
                      <th className="text-left p-4 font-semibold">Total Value</th>
                      <th className="text-left p-4 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {purchaseOrders.map((po) => (
                      <tr key={po.id} className="border-b hover:bg-gray-50">
                        <td className="p-4 font-mono font-medium">{po.id}</td>
                        <td className="p-4">{po.supplier}</td>
                        <td className="p-4 text-gray-600">{po.orderDate}</td>
                        <td className="p-4 text-gray-600">{po.expectedDate}</td>
                        <td className="p-4 font-semibold">{po.items}</td>
                        <td className="p-4 text-green-600 font-semibold">₦{po.totalValue.toLocaleString()}</td>
                        <td className="p-4">{getStatusBadge(po.status)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Transfers Tab */}
        <TabsContent value="transfers" className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4 font-semibold">Transfer ID</th>
                      <th className="text-left p-4 font-semibold">From</th>
                      <th className="text-left p-4 font-semibold">To</th>
                      <th className="text-left p-4 font-semibold">Items</th>
                      <th className="text-left p-4 font-semibold">Priority</th>
                      <th className="text-left p-4 font-semibold">Date</th>
                      <th className="text-left p-4 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transfers.map((transfer) => (
                      <tr key={transfer.id} className="border-b hover:bg-gray-50">
                        <td className="p-4 font-mono font-medium">{transfer.id}</td>
                        <td className="p-4">{transfer.from}</td>
                        <td className="p-4 font-medium">{transfer.to}</td>
                        <td className="p-4 font-semibold">{transfer.items}</td>
                        <td className="p-4">
                          <Badge 
                            variant={transfer.priority === "Urgent" ? "destructive" : transfer.priority === "High" ? "secondary" : "outline"}
                            className={
                              transfer.priority === "Urgent" ? "bg-red-100 text-red-800" :
                              transfer.priority === "High" ? "bg-yellow-100 text-yellow-800" : 
                              "bg-gray-100 text-gray-800"
                            }
                          >
                            {transfer.priority}
                          </Badge>
                        </td>
                        <td className="p-4 text-gray-600">{transfer.date}</td>
                        <td className="p-4">{getStatusBadge(transfer.status)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Central Warehouse Tab */}
        <TabsContent value="warehouse" className="space-y-4">
          <div className="grid gap-4">
            {warehouseZones.map((zone, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Warehouse className="h-5 w-5 text-blue-600" />
                      {zone.name}
                    </div>
                    <Badge variant="outline">{zone.temperature}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-900">{zone.occupied}</p>
                      <p className="text-sm text-gray-600">Items Stored</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-blue-600">{zone.capacity}</p>
                      <p className="text-sm text-gray-600">Total Capacity</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-green-600">{zone.utilization}%</p>
                      <p className="text-sm text-gray-600">Utilization</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-green-600 h-3 rounded-full transition-all duration-300"
                        style={{ width: `${zone.utilization}%` }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Inventory;
