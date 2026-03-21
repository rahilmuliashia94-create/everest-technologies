import { useState } from 'react';
import { 
  Shield, 
  LogOut, 
  Home, 
  FileText, 
  CreditCard, 
  Bell, 
  User, 
  Download, 
  CheckCircle, 
  AlertCircle,
  Clock,
  IndianRupee,
  ChevronRight,
  Eye,
  Printer,
  Phone
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

interface Invoice {
  id: string;
  date: string;
  dueDate: string;
  amount: number;
  status: 'paid' | 'pending' | 'overdue';
  description: string;
  items: { name: string; qty: number; price: number }[];
}

interface Payment {
  id: string;
  date: string;
  amount: number;
  method: string;
  invoiceId: string;
}

const ClientDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);
  const [showPaymentDialog, setShowPaymentDialog] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  // Demo client data
  const clientData = {
    name: 'ABC Enterprises Pvt. Ltd.',
    clientId: 'ES-2024-001',
    email: 'contact@abcenterprises.com',
    phone: '+91 98765 43210',
    address: '123 Business Park, Rajkot, Gujarat',
    plan: 'Enterprise Security Plan',
    planExpiry: '2025-03-31',
    supportHours: '24/7',
  };

  const invoices: Invoice[] = [
    {
      id: 'INV-2024-001',
      date: '2024-01-01',
      dueDate: '2024-01-15',
      amount: 45000,
      status: 'paid',
      description: 'Monthly Security Services - January 2024',
      items: [
        { name: 'CCTV Monitoring', qty: 8, price: 3000 },
        { name: 'Alarm System', qty: 1, price: 5000 },
        { name: '24/7 Support', qty: 1, price: 15000 },
        { name: 'Maintenance', qty: 1, price: 8000 },
      ],
    },
    {
      id: 'INV-2024-002',
      date: '2024-02-01',
      dueDate: '2024-02-15',
      amount: 45000,
      status: 'paid',
      description: 'Monthly Security Services - February 2024',
      items: [
        { name: 'CCTV Monitoring', qty: 8, price: 3000 },
        { name: 'Alarm System', qty: 1, price: 5000 },
        { name: '24/7 Support', qty: 1, price: 15000 },
        { name: 'Maintenance', qty: 1, price: 8000 },
      ],
    },
    {
      id: 'INV-2024-003',
      date: '2024-03-01',
      dueDate: '2024-03-15',
      amount: 45000,
      status: 'pending',
      description: 'Monthly Security Services - March 2024',
      items: [
        { name: 'CCTV Monitoring', qty: 8, price: 3000 },
        { name: 'Alarm System', qty: 1, price: 5000 },
        { name: '24/7 Support', qty: 1, price: 15000 },
        { name: 'Maintenance', qty: 1, price: 8000 },
      ],
    },
    {
      id: 'INV-2024-004',
      date: '2024-04-01',
      dueDate: '2024-04-15',
      amount: 52000,
      status: 'overdue',
      description: 'Monthly Security Services + Equipment Upgrade - April 2024',
      items: [
        { name: 'CCTV Monitoring', qty: 10, price: 3000 },
        { name: 'Alarm System', qty: 1, price: 5000 },
        { name: '24/7 Support', qty: 1, price: 15000 },
        { name: 'Equipment Upgrade', qty: 1, price: 7000 },
        { name: 'Maintenance', qty: 1, price: 8000 },
      ],
    },
  ];

  const payments: Payment[] = [
    { id: 'PAY-001', date: '2024-01-10', amount: 45000, method: 'Bank Transfer', invoiceId: 'INV-2024-001' },
    { id: 'PAY-002', date: '2024-02-12', amount: 45000, method: 'UPI', invoiceId: 'INV-2024-002' },
  ];

  const notifications = [
    { id: 1, type: 'warning', message: 'Invoice INV-2024-004 is overdue. Please make payment to avoid service interruption.', date: '2024-04-16' },
    { id: 2, type: 'info', message: 'Your security system maintenance is scheduled for next week.', date: '2024-04-10' },
    { id: 3, type: 'success', message: 'Payment received for Invoice INV-2024-002. Thank you!', date: '2024-02-12' },
  ];

  const handleLogout = () => {
    navigate('/login');
  };

  const handlePayment = () => {
    setShowPaymentDialog(true);
  };

  const processPayment = () => {
    setPaymentSuccess(true);
    setTimeout(() => {
      setShowPaymentDialog(false);
      setPaymentSuccess(false);
      setSelectedInvoice(null);
    }, 2000);
  };

  const totalDue = invoices.filter(inv => inv.status !== 'paid').reduce((sum, inv) => sum + inv.amount, 0);
  const overdueAmount = invoices.filter(inv => inv.status === 'overdue').reduce((sum, inv) => sum + inv.amount, 0);

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(amount);
  };

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
              <IndianRupee className="w-6 h-6 text-red-600" />
            </div>
            <span className="text-xs text-gray-500">Total Due</span>
          </div>
          <p className="text-2xl font-bold text-everest-blue font-['Rajdhani']">{formatCurrency(totalDue)}</p>
          <p className="text-sm text-red-500">{overdueAmount > 0 && `${formatCurrency(overdueAmount)} overdue`}</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <span className="text-xs text-gray-500">Paid Invoices</span>
          </div>
          <p className="text-2xl font-bold text-everest-blue font-['Rajdhani']">{invoices.filter(i => i.status === 'paid').length}</p>
          <p className="text-sm text-green-500">This year</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Clock className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-xs text-gray-500">Plan Expiry</span>
          </div>
          <p className="text-2xl font-bold text-everest-blue font-['Rajdhani']">{formatDate(clientData.planExpiry)}</p>
          <p className="text-sm text-blue-500">{clientData.plan}</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <Bell className="w-6 h-6 text-purple-600" />
            </div>
            <span className="text-xs text-gray-500">Notifications</span>
          </div>
          <p className="text-2xl font-bold text-everest-blue font-['Rajdhani']">{notifications.length}</p>
          <p className="text-sm text-purple-500">Unread messages</p>
        </div>
      </div>

      {/* Recent Invoices */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <h3 className="text-lg font-bold text-everest-blue font-['Rajdhani']">Recent Invoices</h3>
          <button 
            onClick={() => setActiveTab('invoices')}
            className="text-sm text-everest-orange hover:underline flex items-center gap-1"
          >
            View All <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="divide-y divide-gray-100">
          {invoices.slice(0, 3).map((invoice) => (
            <div key={invoice.id} className="p-4 flex items-center justify-between hover:bg-gray-50">
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  invoice.status === 'paid' ? 'bg-green-100' :
                  invoice.status === 'overdue' ? 'bg-red-100' : 'bg-yellow-100'
                }`}>
                  <FileText className={`w-5 h-5 ${
                    invoice.status === 'paid' ? 'text-green-600' :
                    invoice.status === 'overdue' ? 'text-red-600' : 'text-yellow-600'
                  }`} />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{invoice.id}</p>
                  <p className="text-sm text-gray-500">{invoice.description}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-everest-blue">{formatCurrency(invoice.amount)}</p>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  invoice.status === 'paid' ? 'bg-green-100 text-green-600' :
                  invoice.status === 'overdue' ? 'bg-red-100 text-red-600' : 'bg-yellow-100 text-yellow-600'
                }`}>
                  {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Notifications */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h3 className="text-lg font-bold text-everest-blue font-['Rajdhani']">Recent Notifications</h3>
        </div>
        <div className="divide-y divide-gray-100">
          {notifications.map((notification) => (
            <div key={notification.id} className="p-4 flex items-start gap-4 hover:bg-gray-50">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                notification.type === 'success' ? 'bg-green-100' :
                notification.type === 'warning' ? 'bg-red-100' : 'bg-blue-100'
              }`}>
                {notification.type === 'success' ? <CheckCircle className="w-5 h-5 text-green-600" /> :
                 notification.type === 'warning' ? <AlertCircle className="w-5 h-5 text-red-600" /> :
                 <Bell className="w-5 h-5 text-blue-600" />}
              </div>
              <div className="flex-1">
                <p className="text-gray-700">{notification.message}</p>
                <p className="text-sm text-gray-400 mt-1">{formatDate(notification.date)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderInvoices = () => (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6 border-b border-gray-100">
        <h3 className="text-lg font-bold text-everest-blue font-['Rajdhani']">All Invoices</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Invoice #</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Date</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Due Date</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Amount</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Status</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {invoices.map((invoice) => (
              <tr key={invoice.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">{invoice.id}</td>
                <td className="px-6 py-4 text-gray-600">{formatDate(invoice.date)}</td>
                <td className="px-6 py-4 text-gray-600">{formatDate(invoice.dueDate)}</td>
                <td className="px-6 py-4 font-bold text-everest-blue">{formatCurrency(invoice.amount)}</td>
                <td className="px-6 py-4">
                  <span className={`text-xs px-3 py-1 rounded-full ${
                    invoice.status === 'paid' ? 'bg-green-100 text-green-600' :
                    invoice.status === 'overdue' ? 'bg-red-100 text-red-600' : 'bg-yellow-100 text-yellow-600'
                  }`}>
                    {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => setSelectedInvoice(invoice)}
                      className="p-2 hover:bg-gray-100 rounded-lg text-gray-600"
                      title="View"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-600" title="Download">
                      <Download className="w-4 h-4" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-600" title="Print">
                      <Printer className="w-4 h-4" />
                    </button>
                    {invoice.status !== 'paid' && (
                      <button 
                        onClick={() => { setSelectedInvoice(invoice); handlePayment(); }}
                        className="px-3 py-1 bg-everest-orange text-white text-xs rounded-lg hover:bg-everest-blue transition-colors"
                      >
                        Pay Now
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderPayments = () => (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6 border-b border-gray-100">
        <h3 className="text-lg font-bold text-everest-blue font-['Rajdhani']">Payment History</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Payment ID</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Date</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Invoice</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Amount</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Method</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {payments.map((payment) => (
              <tr key={payment.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">{payment.id}</td>
                <td className="px-6 py-4 text-gray-600">{formatDate(payment.date)}</td>
                <td className="px-6 py-4 text-gray-600">{payment.invoiceId}</td>
                <td className="px-6 py-4 font-bold text-green-600">{formatCurrency(payment.amount)}</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">
                    {payment.method}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderProfile = () => (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
      <div className="flex items-center gap-6 mb-8">
        <div className="w-24 h-24 bg-everest-blue rounded-full flex items-center justify-center">
          <User className="w-12 h-12 text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-everest-blue font-['Rajdhani']">{clientData.name}</h3>
          <p className="text-gray-500">Client ID: {clientData.clientId}</p>
          <span className="inline-block mt-2 px-3 py-1 bg-green-100 text-green-600 text-sm rounded-full">
            Active Account
          </span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="text-sm text-gray-500">Email Address</label>
          <p className="font-medium text-gray-900">{clientData.email}</p>
        </div>
        <div>
          <label className="text-sm text-gray-500">Phone Number</label>
          <p className="font-medium text-gray-900">{clientData.phone}</p>
        </div>
        <div className="md:col-span-2">
          <label className="text-sm text-gray-500">Address</label>
          <p className="font-medium text-gray-900">{clientData.address}</p>
        </div>
        <div>
          <label className="text-sm text-gray-500">Current Plan</label>
          <p className="font-medium text-everest-blue">{clientData.plan}</p>
        </div>
        <div>
          <label className="text-sm text-gray-500">Plan Expiry</label>
          <p className="font-medium text-gray-900">{formatDate(clientData.planExpiry)}</p>
        </div>
        <div>
          <label className="text-sm text-gray-500">Support Hours</label>
          <p className="font-medium text-gray-900">{clientData.supportHours}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-[1400px] mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-everest-blue rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="text-lg font-bold text-everest-blue font-['Rajdhani'] leading-tight">
                  EVEREST
                </span>
                <span className="text-xs text-everest-orange font-medium tracking-wider">
                  SECURITY
                </span>
              </div>
            </Link>
            <div className="h-8 w-px bg-gray-200 mx-2" />
            <span className="text-gray-600 font-medium">Client Portal</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 text-sm text-gray-600">
              <User className="w-4 h-4" />
              <span>{clientData.name}</span>
            </div>
            <button 
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-[1400px] mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <nav className="p-2">
                {[
                  { id: 'overview', label: 'Overview', icon: Home },
                  { id: 'invoices', label: 'Invoices', icon: FileText },
                  { id: 'payments', label: 'Payments', icon: CreditCard },
                  { id: 'profile', label: 'Profile', icon: User },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                      activeTab === item.id 
                        ? 'bg-everest-blue text-white' 
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Support Card */}
            <div className="mt-6 bg-everest-blue rounded-2xl p-6 text-white">
              <h4 className="font-bold mb-2">Need Help?</h4>
              <p className="text-white/80 text-sm mb-4">
                Our support team is available 24/7
              </p>
              <a 
                href="tel:+919624696247" 
                className="flex items-center gap-2 text-everest-orange hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                +91 9624696247
              </a>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'overview' && renderOverview()}
            {activeTab === 'invoices' && renderInvoices()}
            {activeTab === 'payments' && renderPayments()}
            {activeTab === 'profile' && renderProfile()}
          </div>
        </div>
      </div>

      {/* Invoice Detail Dialog */}
      <Dialog open={!!selectedInvoice && !showPaymentDialog} onOpenChange={() => setSelectedInvoice(null)}>
        <DialogContent className="max-w-2xl">
          {selectedInvoice && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-everest-blue font-['Rajdhani']">
                  Invoice {selectedInvoice.id}
                </DialogTitle>
                <DialogDescription>{selectedInvoice.description}</DialogDescription>
              </DialogHeader>

              <div className="mt-4 space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500">Invoice Date</p>
                    <p className="font-medium">{formatDate(selectedInvoice.date)}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500">Due Date</p>
                    <p className="font-medium">{formatDate(selectedInvoice.dueDate)}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500">Status</p>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      selectedInvoice.status === 'paid' ? 'bg-green-100 text-green-600' :
                      selectedInvoice.status === 'overdue' ? 'bg-red-100 text-red-600' : 'bg-yellow-100 text-yellow-600'
                    }`}>
                      {selectedInvoice.status.charAt(0).toUpperCase() + selectedInvoice.status.slice(1)}
                    </span>
                  </div>
                </div>

                <div className="border rounded-lg overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Item</th>
                        <th className="px-4 py-3 text-center text-sm font-medium text-gray-500">Qty</th>
                        <th className="px-4 py-3 text-right text-sm font-medium text-gray-500">Price</th>
                        <th className="px-4 py-3 text-right text-sm font-medium text-gray-500">Total</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {selectedInvoice.items.map((item, i) => (
                        <tr key={i}>
                          <td className="px-4 py-3">{item.name}</td>
                          <td className="px-4 py-3 text-center">{item.qty}</td>
                          <td className="px-4 py-3 text-right">{formatCurrency(item.price)}</td>
                          <td className="px-4 py-3 text-right font-medium">{formatCurrency(item.qty * item.price)}</td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot className="bg-gray-50">
                      <tr>
                        <td colSpan={3} className="px-4 py-3 text-right font-bold">Total Amount:</td>
                        <td className="px-4 py-3 text-right font-bold text-everest-blue text-lg">
                          {formatCurrency(selectedInvoice.amount)}
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                  {selectedInvoice.status !== 'paid' && (
                    <Button 
                      onClick={handlePayment}
                      className="flex-1 bg-everest-orange hover:bg-everest-blue"
                    >
                      <CreditCard className="w-4 h-4 mr-2" />
                      Pay Now
                    </Button>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Payment Dialog */}
      <Dialog open={showPaymentDialog} onOpenChange={setShowPaymentDialog}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-everest-blue font-['Rajdhani']">
              {paymentSuccess ? 'Payment Successful!' : 'Make Payment'}
            </DialogTitle>
          </DialogHeader>

          {paymentSuccess ? (
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <p className="text-gray-600">
                Your payment of {selectedInvoice && formatCurrency(selectedInvoice.amount)} has been processed successfully.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {selectedInvoice && (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">Amount to Pay</p>
                  <p className="text-2xl font-bold text-everest-blue">{formatCurrency(selectedInvoice.amount)}</p>
                  <p className="text-sm text-gray-600">{selectedInvoice.id}</p>
                </div>
              )}

              <div className="space-y-2">
                <label className="text-sm font-medium">Payment Method</label>
                <div className="grid grid-cols-2 gap-2">
                  <button className="p-3 border-2 border-everest-blue rounded-lg text-center">
                    <CreditCard className="w-6 h-6 mx-auto mb-1 text-everest-blue" />
                    <span className="text-sm">Card</span>
                  </button>
                  <button className="p-3 border border-gray-200 rounded-lg text-center hover:border-everest-blue">
                    <IndianRupee className="w-6 h-6 mx-auto mb-1 text-gray-400" />
                    <span className="text-sm">UPI</span>
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Card Number</label>
                <input 
                  type="text" 
                  placeholder="1234 5678 9012 3456"
                  className="w-full px-4 py-3 border rounded-lg focus:border-everest-blue focus:ring-1 focus:ring-everest-blue"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Expiry</label>
                  <input 
                    type="text" 
                    placeholder="MM/YY"
                    className="w-full px-4 py-3 border rounded-lg focus:border-everest-blue focus:ring-1 focus:ring-everest-blue"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">CVV</label>
                  <input 
                    type="text" 
                    placeholder="123"
                    className="w-full px-4 py-3 border rounded-lg focus:border-everest-blue focus:ring-1 focus:ring-everest-blue"
                  />
                </div>
              </div>

              <Button 
                onClick={processPayment}
                className="w-full bg-everest-blue hover:bg-everest-orange text-white py-6"
              >
                Pay {selectedInvoice && formatCurrency(selectedInvoice.amount)}
              </Button>

              <p className="text-xs text-gray-500 text-center">
                This is a demo. No actual payment will be processed.
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ClientDashboard;
