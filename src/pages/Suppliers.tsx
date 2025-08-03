
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Plus,
  Search,
  Building2,
  Phone,
  Mail,
  MapPin,
  Star,
  TrendingUp,
  Package,
  DollarSign,
  Calendar,
  User
} from "lucide-react";

const Suppliers = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const suppliers = [
    {
      id: "SUP001",
      name: "Lagos Pharma Distributors",
      contactPerson: "Mr. Adebayo Fashola",
      phone: "+234 801 555 0001",
      email: "orders@lagospharma.ng",
      address: "15 Commercial Avenue, Yaba, Lagos",
      rating: 4.8,
      totalOrders: 45,
      totalValue: 2450000,
      lastOrder: "Jan 15, 2024",
      status: "Active",
      products: ["Paracetamol", "Amoxicillin", "Vitamin Supplements"],
      paymentTerms: "30 Days",
      deliveryTime: "2-3 Days"
    },
    {
      id: "SUP002",
      name: "West Africa Drug Company",
      contactPerson: "Mrs. Fatima Abubakar",
      phone: "+234 802 555 0002",
      email: "sales@wadco.ng",
      address: "Plot 123 Ikeja Industrial Estate, Lagos",
      rating: 4.9,
      totalOrders: 38,
      totalValue: 3200000,
      lastOrder: "Jan 12, 2024",
      status: "Active",
      products: ["Insulin", "Blood Pressure Monitors", "Antibiotics"],
      paymentTerms: "45 Days",
      deliveryTime: "1-2 Days"
    },
    {
      id: "SUP003",
      name: "Emzor Pharmaceutical Industries",
      contactPerson: "Dr. Chinedu Emeka",
      phone: "+234 803 555 0003",
      email: "procurement@emzor.ng",
      address: "2 Stella Obasanjo Way, Ikeja, Lagos",
      rating: 4.7,
      totalOrders: 28,
      totalValue: 1850000,
      lastOrder: "Jan 10, 2024",
      status: "Active",
      products: ["Medical Devices", "OTC Medications", "Surgical Supplies"],
      paymentTerms: "60 Days",
      deliveryTime: "3-5 Days"
    },
    {
      id: "SUP004",
      name: "Nigeria Healthcare Supplies",
      contactPerson: "Mr. Kemi Olatunji",
      phone: "+234 804 555 0004",
      email: "orders@nhsupplies.ng",
      address: "45 Allen Avenue, Ikeja, Lagos",
      rating: 4.5,
      totalOrders: 22,
      totalValue: 980000,
      lastOrder: "Dec 28, 2023",
      status: "Inactive",
      products: ["Laboratory Equipment", "Diagnostic Kits", "Safety Equipment"],
      paymentTerms: "15 Days",
      deliveryTime: "5-7 Days"
    }
  ];

  const getStatusBadge = (status: string) => {
    return status === "Active" ? (
      <Badge className="bg-green-100 text-green-800">Active</Badge>
    ) : (
      <Badge className="bg-gray-100 text-gray-800">Inactive</Badge>
    );
  };

  const filteredSuppliers = suppliers.filter(supplier =>
    supplier.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    supplier.contactPerson.toLowerCase().includes(searchTerm.toLowerCase()) ||
    supplier.products.some(product => product.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const totalSuppliers = suppliers.length;
  const activeSuppliers = suppliers.filter(s => s.status === "Active").length;
  const totalValue = suppliers.reduce((acc, supplier) => acc + supplier.totalValue, 0);
  const avgRating = suppliers.reduce((acc, supplier) => acc + supplier.rating, 0) / suppliers.length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Suppliers Management</h1>
          <p className="text-gray-500">Manage your pharmaceutical supply chain partners</p>
        </div>
        <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2 bg-green-600 hover:bg-green-700">
              <Plus className="h-4 w-4" />
              Add New Supplier
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add New Supplier</DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-4 py-4 max-h-96 overflow-y-auto">
              <div className="col-span-2 space-y-2">
                <Label htmlFor="companyName">Company Name</Label>
                <Input id="companyName" placeholder="Enter company name" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="contactPerson">Contact Person</Label>
                <Input id="contactPerson" placeholder="Enter contact person name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="+234 XXX XXX XXXX" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="company@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="website">Website (Optional)</Label>
                <Input id="website" placeholder="www.company.com" />
              </div>
              
              <div className="col-span-2 space-y-2">
                <Label htmlFor="address">Business Address</Label>
                <Textarea id="address" placeholder="Enter complete business address" rows={3} />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="paymentTerms">Payment Terms</Label>
                <Input id="paymentTerms" placeholder="e.g., 30 Days" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="deliveryTime">Delivery Time</Label>
                <Input id="deliveryTime" placeholder="e.g., 2-3 Days" />
              </div>
              
              <div className="col-span-2 space-y-2">
                <Label htmlFor="products">Products/Services</Label>
                <Textarea id="products" placeholder="List main products or services offered" rows={3} />
              </div>
              
              <div className="col-span-2 space-y-2">
                <Label htmlFor="notes">Additional Notes (Optional)</Label>
                <Textarea id="notes" placeholder="Any additional information" rows={2} />
              </div>
            </div>
            <div className="flex justify-end gap-3 pt-4 border-t">
              <Button variant="outline" onClick={() => setIsAddModalOpen(false)}>
                Cancel
              </Button>
              <Button className="bg-green-600 hover:bg-green-700">
                Add Supplier
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 font-medium">Total Suppliers</p>
                <p className="text-3xl font-bold text-gray-900">{totalSuppliers}</p>
              </div>
              <Building2 className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 font-medium">Active Suppliers</p>
                <p className="text-3xl font-bold text-green-600">{activeSuppliers}</p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 font-medium">Total Purchase Value</p>
                <p className="text-2xl font-bold text-green-600">₦{totalValue.toLocaleString()}</p>
              </div>
              <DollarSign className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 font-medium">Average Rating</p>
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <p className="text-3xl font-bold text-gray-900">{avgRating.toFixed(1)}</p>
                </div>
              </div>
              <Star className="h-8 w-8 text-yellow-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search Bar */}
      <Card>
        <CardContent className="p-6">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search suppliers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Suppliers Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredSuppliers.map((supplier) => (
          <Card key={supplier.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl text-gray-900">{supplier.name}</CardTitle>
                  <p className="text-gray-600 text-sm mt-1">ID: {supplier.id}</p>
                </div>
                {getStatusBadge(supplier.status)}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Contact Information */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <User className="h-4 w-4" />
                  <span>{supplier.contactPerson}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Phone className="h-4 w-4" />
                  <span>{supplier.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Mail className="h-4 w-4" />
                  <span>{supplier.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span>{supplier.address}</span>
                </div>
              </div>

              {/* Products */}
              <div>
                <p className="text-sm font-medium text-gray-900 mb-2">Products:</p>
                <div className="flex flex-wrap gap-2">
                  {supplier.products.map((product, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {product}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <p className="text-lg font-bold text-green-600">{supplier.totalOrders}</p>
                  <p className="text-xs text-gray-600">Total Orders</p>
                </div>
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <div className="flex items-center justify-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <p className="text-lg font-bold text-blue-600">{supplier.rating}</p>
                  </div>
                  <p className="text-xs text-gray-600">Rating</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-purple-50 rounded-lg">
                  <p className="text-sm font-bold text-purple-600">₦{supplier.totalValue.toLocaleString()}</p>
                  <p className="text-xs text-gray-600">Total Value</p>
                </div>
                <div className="text-center p-3 bg-yellow-50 rounded-lg">
                  <div className="flex items-center justify-center gap-1">
                    <Calendar className="h-3 w-3 text-yellow-600" />
                    <p className="text-xs font-medium text-yellow-600">{supplier.lastOrder}</p>
                  </div>
                  <p className="text-xs text-gray-600">Last Order</p>
                </div>
              </div>

              {/* Business Terms */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t text-sm">
                <div>
                  <p className="text-gray-600">Payment Terms:</p>
                  <p className="font-medium text-gray-900">{supplier.paymentTerms}</p>
                </div>
                <div>
                  <p className="text-gray-600">Delivery Time:</p>
                  <p className="font-medium text-gray-900">{supplier.deliveryTime}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 pt-4 border-t">
                <Button variant="outline" size="sm" className="flex-1">
                  View Details
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  Create PO
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Phone className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Suppliers;
