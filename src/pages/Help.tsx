
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  HelpCircle,
  Search,
  Book,
  MessageCircle,
  Phone,
  Mail,
  ExternalLink,
  FileText,
  Video,
  Users
} from "lucide-react";

const Help = () => {
  const faqs = [
    {
      question: "How do I add a new delivery agent?",
      answer: "To add a new delivery agent, go to the Delivery Agents section and click 'Add New Agent'. Fill in all required information including personal details, contact information, and guarantor details. Make sure to verify all information before saving."
    },
    {
      question: "How can I track inventory levels?",
      answer: "You can monitor inventory levels in the Items section. The system automatically tracks stock levels and will alert you when items fall below minimum stock levels. You can also view detailed stock reports in the Analytics section."
    },
    {
      question: "What should I do when stock runs low?",
      answer: "When stock runs low, the system will automatically generate alerts. You can create purchase orders directly from the Inventory > Purchase Orders section. Select your supplier, add items, and submit the order for processing."
    },
    {
      question: "How do I create product bundles?",
      answer: "In the Inventory > Composite Products section, click 'Create Bundle'. Select the individual products you want to include, set the bundle price, and save. The system will automatically calculate customer savings and track bundle availability."
    },
    {
      question: "Can I export reports for accounting?",
      answer: "Yes, you can export various reports including delivery reports, inventory reports, and financial summaries. Go to Analytics & Reports and click the Export button to download reports in PDF or CSV format."
    },
    {
      question: "How do I reset an agent's password?",
      answer: "Only administrators can reset agent passwords. Contact your system administrator or use the password reset function in the agent's profile under the Delivery Agents section."
    }
  ];

  const supportTickets = [
    {
      id: "TKT-001",
      title: "System slow during peak hours",
      status: "Open",
      priority: "High",
      created: "Jan 15, 2024"
    },
    {
      id: "TKT-002", 
      title: "Unable to export inventory reports",
      status: "In Progress",
      priority: "Medium",
      created: "Jan 14, 2024"
    },
    {
      id: "TKT-003",
      title: "Agent profile photo upload issue",
      status: "Resolved",
      priority: "Low",
      created: "Jan 12, 2024"
    }
  ];

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      "Open": { className: "bg-red-100 text-red-800" },
      "In Progress": { className: "bg-yellow-100 text-yellow-800" },
      "Resolved": { className: "bg-green-100 text-green-800" }
    };

    return (
      <Badge className={statusConfig[status]?.className || "bg-gray-100 text-gray-800"}>
        {status}
      </Badge>
    );
  };

  const getPriorityBadge = (priority: string) => {
    const priorityConfig = {
      "High": { className: "bg-red-100 text-red-800" },
      "Medium": { className: "bg-yellow-100 text-yellow-800" },
      "Low": { className: "bg-blue-100 text-blue-800" }
    };

    return (
      <Badge className={priorityConfig[priority]?.className || "bg-gray-100 text-gray-800"}>
        {priority}
      </Badge>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Help & Support</h1>
        <p className="text-gray-500">Find answers to your questions and get assistance</p>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="p-6">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search for help topics..."
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Help Options */}
        <div className="lg:col-span-1 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-green-600" />
                Quick Help
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start" asChild>
                <a href="#" className="flex items-center gap-2">
                  <Book className="h-4 w-4" />
                  User Manual
                  <ExternalLink className="h-3 w-3 ml-auto" />
                </a>
              </Button>
              
              <Button variant="outline" className="w-full justify-start" asChild>
                <a href="#" className="flex items-center gap-2">
                  <Video className="h-4 w-4" />
                  Video Tutorials
                  <ExternalLink className="h-3 w-3 ml-auto" />
                </a>
              </Button>
              
              <Button variant="outline" className="w-full justify-start" asChild>
                <a href="#" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  System Documentation
                  <ExternalLink className="h-3 w-3 ml-auto" />
                </a>
              </Button>
              
              <Button variant="outline" className="w-full justify-start" asChild>
                <a href="#" className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Community Forum
                  <ExternalLink className="h-3 w-3 ml-auto" />
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Contact Support */}
          <Card>
            <CardHeader>
              <CardTitle>Contact Support</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <Phone className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <p className="font-medium text-green-900">Call Support</p>
                <p className="text-sm text-green-700">+234 800 VITAL (84825)</p>
                <p className="text-xs text-green-600">Mon-Fri: 8AM-6PM WAT</p>
              </div>
              
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Mail className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <p className="font-medium text-blue-900">Email Support</p>
                <p className="text-sm text-blue-700">support@vitalvida.ng</p>
                <p className="text-xs text-blue-600">Response within 24 hours</p>
              </div>
              
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <MessageCircle className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <p className="font-medium text-purple-900">Live Chat</p>
                <p className="text-sm text-purple-700">Available now</p>
                <Button size="sm" className="bg-purple-600 hover:bg-purple-700 mt-2">
                  Start Chat
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* FAQ Section */}
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          {/* Support Tickets */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Your Support Tickets</CardTitle>
                <Button className="bg-green-600 hover:bg-green-700" size="sm">
                  Create New Ticket
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {supportTickets.map((ticket) => (
                  <div key={ticket.id} className="p-4 border rounded-lg hover:bg-gray-50">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900">{ticket.title}</h4>
                      <div className="flex gap-2">
                        {getPriorityBadge(ticket.priority)}
                        {getStatusBadge(ticket.status)}
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>Ticket ID: {ticket.id}</span>
                      <span>Created: {ticket.created}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* System Status */}
          <Card>
            <CardHeader>
              <CardTitle>System Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="font-medium">Core System</span>
                  </div>
                  <span className="text-green-600 font-medium">Operational</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="font-medium">Database</span>
                  </div>
                  <span className="text-green-600 font-medium">Operational</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="font-medium">SMS Notifications</span>
                  </div>
                  <span className="text-yellow-600 font-medium">Degraded</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="font-medium">API Services</span>
                  </div>
                  <span className="text-green-600 font-medium">Operational</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Help;
