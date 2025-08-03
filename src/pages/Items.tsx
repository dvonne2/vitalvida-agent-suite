
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Plus,
  Search,
  Filter,
  Package,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Calendar,
  Building2,
  DollarSign
} from "lucide-react";

const Items = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const products = [
    {
      id: "P001",
      name: "Paracetamol 500mg",
      code: "PAR-500",
      category: "Medications",
      stock: 245,
      minStock: 50,
      unitPrice: 150,
      supplier: "Lagos Pharma Distributors",
      expiryDate: "2025-08-15",
      status: "In Stock",
      image: "/placeholder.svg"
    },
    {
      id: "P002",
      name: "Amoxicillin 250mg",
      code: "AMX-250",
      category: "Medications",
      stock: 12,
      minStock: 30,
      unitPrice: 850,
      supplier: "West Africa Drug Company",
      expiryDate: "2024-12-20",
      status: "Low Stock",
      image: "/placeholder.svg"
    },
    {
      id: "P003",
      name: "Blood Pressure Monitor",
      code: "BPM-001",
      category: "Medical Devices",
      stock: 25,
      minStock: 10,
      unitPrice: 12500,
      supplier: "Emzor Pharmaceutical Industries",
      expiryDate: "N/A",
      status: "In Stock",
      image: "/placeholder.svg"
    },
    {
      id: "P004",
      name: "Vitamin C 1000mg",
      code: "VTC-1000",
      category: "Supplements",
      stock: 0,
      minStock: 25,
      unitPrice: 450,
      supplier: "Lagos Pharma Distributors",
      expiryDate: "2024-10-30",
      status: "Out of Stock",
      image: "/placeholder.svg"
    },
    {
      id: "P005",
      name: "Insulin Pen",
      code: "INS-PEN",
      category: "Medical Devices",
      stock: 8,
      minStock: 15,
      unitPrice: 8500,
      supplier: "West Africa Drug Company",
      expiryDate: "2025-06-10",
      status: "Low Stock",
      image: "/placeholder.svg"
    }
  ];

  const getStatusBadge = (status: string, stock: number, minStock: number) => {
    if (stock === 0) {
      return <Badge variant="destructive" className="flex items-center gap-1">
        <XCircle className="h-3 w-3" />
        Out of Stock
      </Badge>;
    } else if (stock <= minStock) {
      return <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 flex items-center gap-1">
        <AlertTriangle className="h-3 w-3" />
        Low Stock
      </Badge>;
    } else {
      return <Badge variant="default" className="bg-green-100 text-green-800 flex items-center gap-1">
        <CheckCircle className="h-3 w-3" />
        In Stock
      </Badge>;
    }
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.code.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ["all", "Medications", "Supplements", "Medical Devices"];
  const stockSummary = {
    total: products.length,
    inStock: products.filter(p => p.stock > p.minStock).length,
    lowStock: products.filter(p => p.stock <= p.minStock && p.stock > 0).length,
    outOfStock: products.filter(p => p.stock === 0).length,
    totalValue: products.reduce((acc, p) => acc + (p.stock * p.unitPrice), 0)
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Items Management</h1>
          <p className="text-gray-500">Manage your pharmaceutical inventory items</p>
        </div>
        <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2 bg-green-600 hover:bg-green-700">
              <Plus className="h-4 w-4" />
              Add New Product
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add New Product</DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="name">Product Name</Label>
                <Input id="name" placeholder="Enter product name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="code">Product Code/SKU</Label>
                <Input id="code" placeholder="Enter product code" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="medications">Medications</SelectItem>
                    <SelectItem value="supplements">Supplements</SelectItem>
                    <SelectItem value="devices">Medical Devices</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="supplier">Supplier</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select supplier" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lagos">Lagos Pharma Distributors</SelectItem>
                    <SelectItem value="west">West Africa Drug Company</SelectItem>
                    <SelectItem value="emzor">Emzor Pharmaceutical Industries</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="unitPrice">Unit Price (₦)</Label>
                <Input id="unitPrice" type="number" placeholder="0.00" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="minStock">Minimum Stock Level</Label>
                <Input id="minStock" type="number" placeholder="0" />
              </div>
              <div className="col-span-2 space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Product description (optional)" />
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <Button variant="outline" onClick={() => setIsAddModalOpen(false)}>
                Cancel
              </Button>
              <Button className="bg-green-600 hover:bg-green-700">
                Add Product
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Package className="h-5 w-5 text-blue-600" />
              <div>
                <p className="text-sm text-gray-600">Total Products</p>
                <p className="text-2xl font-bold text-gray-900">{stockSummary.total}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <div>
                <p className="text-sm text-gray-600">In Stock</p>
                <p className="text-2xl font-bold text-green-600">{stockSummary.inStock}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-yellow-600" />
              <div>
                <p className="text-sm text-gray-600">Low Stock</p>
                <p className="text-2xl font-bold text-yellow-600">{stockSummary.lowStock}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <XCircle className="h-5 w-5 text-red-600" />
              <div>
                <p className="text-sm text-gray-600">Out of Stock</p>
                <p className="text-2xl font-bold text-red-600">{stockSummary.outOfStock}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-green-600" />
              <div>
                <p className="text-sm text-gray-600">Total Value</p>
                <p className="text-lg font-bold text-green-600">
                  ₦{stockSummary.totalValue.toLocaleString()}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-48">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Products Table */}
      <Card>
        <CardHeader>
          <CardTitle>Product Inventory</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4 font-semibold text-gray-900">Product</th>
                  <th className="text-left p-4 font-semibold text-gray-900">Code/SKU</th>
                  <th className="text-left p-4 font-semibold text-gray-900">Category</th>
                  <th className="text-left p-4 font-semibold text-gray-900">Stock Level</th>
                  <th className="text-left p-4 font-semibold text-gray-900">Unit Price</th>
                  <th className="text-left p-4 font-semibold text-gray-900">Supplier</th>
                  <th className="text-left p-4 font-semibold text-gray-900">Expiry Date</th>
                  <th className="text-left p-4 font-semibold text-gray-900">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product) => (
                  <tr key={product.id} className="border-b hover:bg-gray-50 cursor-pointer">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center">
                          <Package className="h-5 w-5 text-gray-400" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{product.name}</p>
                          <p className="text-sm text-gray-500">ID: {product.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-gray-600 font-mono">{product.code}</td>
                    <td className="p-4">
                      <Badge variant="outline">{product.category}</Badge>
                    </td>
                    <td className="p-4">
                      <div>
                        <p className="font-semibold text-gray-900">{product.stock}</p>
                        <p className="text-xs text-gray-500">Min: {product.minStock}</p>
                      </div>
                    </td>
                    <td className="p-4 font-semibold text-green-600">₦{product.unitPrice.toLocaleString()}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <Building2 className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{product.supplier}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{product.expiryDate}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      {getStatusBadge(product.status, product.stock, product.minStock)}
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

export default Items;
