
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Download,
  RefreshCw,
  Info,
  ArrowRightLeft,
  Check,
  CheckCircle,
  Clock,
  X,
  Search,
  ChevronRight
} from "lucide-react";

const StockTransfers = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const transfers = [
    {
      id: "ST001",
      date: "Aug 15, 9:30 AM",
      from: { name: "Tunde Abuja", location: "Lagos Island" },
      to: { name: "Kemi Johnson", location: "Victoria Island" },
      items: 8,
      products: 2,
      value: 64100,
      status: "completed"
    },
    {
      id: "ST002", 
      date: "Aug 15, 2:20 PM",
      from: { name: "Fatima Abdullahi", location: "Ikoyi" },
      to: { name: "Ahmed Musa", location: "Surulere" },
      items: 10,
      products: 1,
      value: 125000,
      status: "in-transit"
    },
    {
      id: "ST003",
      date: "Aug 15, 11:15 AM", 
      from: { name: "Blessing Okoro", location: "Lekki" },
      to: { name: "Halima Bello", location: "Ikeja" },
      items: 2,
      products: 1,
      value: 30000,
      status: "pending"
    },
    {
      id: "ST004",
      date: "Aug 15, 4:45 PM",
      from: { name: "Oluwaseun Adebayo", location: "Ajah" },
      to: { name: "Chioma Okafor", location: "Maryland" },
      items: 5,
      products: 3,
      value: 42500,
      status: "failed"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <Badge className="bg-green-100 text-green-800">
            <Check className="h-3 w-3 mr-1" />
            Completed
          </Badge>
        );
      case "in-transit":
        return (
          <Badge className="bg-blue-100 text-blue-800">
            <ArrowRightLeft className="h-3 w-3 mr-1" />
            In Transit
          </Badge>
        );
      case "pending":
        return (
          <Badge className="bg-yellow-100 text-yellow-800">
            <Clock className="h-3 w-3 mr-1" />
            Pending Approval
          </Badge>
        );
      case "failed":
        return (
          <Badge className="bg-red-100 text-red-800">
            <X className="h-3 w-3 mr-1" />
            Failed
          </Badge>
        );
      default:
        return null;
    }
  };

  const filteredTransfers = transfers.filter(transfer => {
    const matchesSearch = transfer.from.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         transfer.to.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTab = activeTab === "all" || transfer.status === activeTab;
    return matchesSearch && matchesTab;
  });

  const stats = {
    total: transfers.length,
    completed: transfers.filter(t => t.status === "completed").length,
    inTransit: transfers.filter(t => t.status === "in-transit").length,
    pending: transfers.filter(t => t.status === "pending").length,
    failed: transfers.filter(t => t.status === "failed").length
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Stock Transfers</h1>
          <p className="text-gray-600">Documentation of all inventory transfers between delivery agents</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
          <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700">
            <RefreshCw className="h-4 w-4" />
            Refresh
          </Button>
        </div>
      </div>

      {/* Info Note */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="p-6">
          <div className="flex items-start gap-3">
            <Info className="h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <h3 className="font-medium text-blue-900 mb-1">Note:</h3>
              <p className="text-blue-800">
                Stock transfers are initiated from the Delivery Agent Portal or other VitalVida systems. 
                This page provides read-only documentation and tracking of all transfer activities for 
                audit and inventory control purposes.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Summary Cards */}
      <div className="grid grid-cols-5 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-gray-600">{stats.total}</div>
                <div className="text-sm text-gray-600 mt-1">Total Transfers</div>
              </div>
              <ArrowRightLeft className="h-8 w-8 text-gray-400" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-green-600">{stats.completed}</div>
                <div className="text-sm text-gray-600 mt-1">Completed</div>
              </div>
              <Check className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-blue-600">{stats.inTransit}</div>
                <div className="text-sm text-gray-600 mt-1">In Transit</div>
              </div>
              <CheckCircle className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-yellow-600">{stats.pending}</div>
                <div className="text-sm text-gray-600 mt-1">Pending</div>
              </div>
              <Clock className="h-8 w-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-red-600">{stats.failed}</div>
                <div className="text-sm text-gray-600 mt-1">Failed</div>
              </div>
              <X className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filter Tabs and Search */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex space-x-1">
              <Button
                variant={activeTab === "all" ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveTab("all")}
                className={activeTab === "all" ? "bg-blue-100 text-blue-700" : ""}
              >
                All ({stats.total})
              </Button>
              <Button
                variant={activeTab === "completed" ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveTab("completed")}
                className={activeTab === "completed" ? "bg-blue-100 text-blue-700" : ""}
              >
                Completed ({stats.completed})
              </Button>
              <Button
                variant={activeTab === "in-transit" ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveTab("in-transit")}
                className={activeTab === "in-transit" ? "bg-blue-100 text-blue-700" : ""}
              >
                In Transit ({stats.inTransit})
              </Button>
              <Button
                variant={activeTab === "pending" ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveTab("pending")}
                className={activeTab === "pending" ? "bg-blue-100 text-blue-700" : ""}
              >
                Pending ({stats.pending})
              </Button>
              <Button
                variant={activeTab === "failed" ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveTab("failed")}
                className={activeTab === "failed" ? "bg-blue-100 text-blue-700" : ""}
              >
                Failed ({stats.failed})
              </Button>
            </div>
            <div className="relative">
              <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search transfers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-64"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Transfers Table */}
      <Card>
        <div className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    DATE
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    FROM → TO
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ITEMS
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    VALUE
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    STATUS
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ACTIONS
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredTransfers.map((transfer) => (
                  <tr key={transfer.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {transfer.date}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <div>
                          <div className="font-medium text-gray-900">{transfer.from.name}</div>
                          <div className="text-sm text-gray-500">{transfer.from.location}</div>
                        </div>
                        <ChevronRight className="h-4 w-4 text-gray-400" />
                        <div>
                          <div className="font-medium text-gray-900">{transfer.to.name}</div>
                          <div className="text-sm text-gray-500">{transfer.to.location}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">{transfer.items} items</div>
                      <div className="text-sm text-gray-500">{transfer.products} product{transfer.products !== 1 ? 's' : ''}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      ₦{transfer.value.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getStatusBadge(transfer.status)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-800">
                        View Details
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default StockTransfers;
