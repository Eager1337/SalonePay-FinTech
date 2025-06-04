"use client"

import { useState } from "react"
import {
  ArrowLeft,
  Settings,
  User,
  Send,
  History,
  Shield,
  Eye,
  EyeOff,
  Fingerprint,
  Moon,
  Sun,
  Mail,
  Globe,
  Trash2,
  Edit3,
  Camera,
  Crown,
  Copy,
  Search,
  TrendingUp,
  TrendingDown,
  Users,
  DollarSign,
  BarChart3,
  UserX,
  UserCheck,
  Calendar,
  Home,
  Bell,
  Lock,
  Smartphone,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function FinanceAppScreens() {
  const [currentScreen, setCurrentScreen] = useState("settings")
  const [darkMode, setDarkMode] = useState(false)
  const [fingerprintEnabled, setFingerprintEnabled] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [transactionFilter, setTransactionFilter] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const screens = [
    { id: "settings", name: "Settings", icon: Settings },
    { id: "profile", name: "Profile", icon: User },
    { id: "send", name: "Send", icon: Send },
    { id: "history", name: "History", icon: History },
    { id: "admin", name: "Admin", icon: Shield },
    { id: "dark", name: "Dark Mode", icon: Moon },
  ]

  const transactions = [
    {
      id: 1,
      type: "sent",
      recipient: "John Doe",
      amount: 50000,
      currency: "SLL",
      date: "2024-01-15",
      time: "14:30",
      status: "completed",
    },
    {
      id: 2,
      type: "received",
      sender: "Mary Johnson",
      amount: 25000,
      currency: "SLL",
      date: "2024-01-14",
      time: "09:15",
      status: "completed",
    },
    {
      id: 3,
      type: "sent",
      recipient: "Ahmed Hassan",
      amount: 100,
      currency: "USD",
      date: "2024-01-13",
      time: "16:45",
      status: "pending",
    },
    {
      id: 4,
      type: "received",
      sender: "Sarah Wilson",
      amount: 75000,
      currency: "SLL",
      date: "2024-01-12",
      time: "11:20",
      status: "completed",
    },
    {
      id: 5,
      type: "sent",
      recipient: "David Brown",
      amount: 200,
      currency: "USD",
      date: "2024-01-11",
      time: "08:30",
      status: "completed",
    },
  ]

  const filteredTransactions = transactions.filter((transaction) => {
    const matchesFilter = transactionFilter === "all" || transaction.type === transactionFilter
    const matchesSearch =
      searchQuery === "" ||
      (transaction.recipient && transaction.recipient.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (transaction.sender && transaction.sender.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesFilter && matchesSearch
  })

  const SettingsScreen = () => (
    <div className="h-full bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="flex items-center mb-8">
        <Button variant="ghost" size="icon" onClick={() => setCurrentScreen("profile")} className="mr-4 rounded-full">
          <ArrowLeft size={24} />
        </Button>
        <h2 className="text-2xl font-bold text-gray-800">Settings</h2>
      </div>

      <div className="space-y-4">
        {/* Security Section */}
        <Card className="rounded-2xl shadow-sm border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg text-gray-800 flex items-center">
              <Lock className="mr-2 text-blue-500" size={20} />
              Security
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <Eye className="text-orange-600" size={18} />
                </div>
                <span className="font-medium text-gray-700">Change Password</span>
              </div>
              <Button variant="ghost" size="sm" className="text-blue-600">
                Update
              </Button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Fingerprint className="text-green-600" size={18} />
                </div>
                <span className="font-medium text-gray-700">Fingerprint Login</span>
              </div>
              <Switch checked={fingerprintEnabled} onCheckedChange={setFingerprintEnabled} />
            </div>
          </CardContent>
        </Card>

        {/* Preferences Section */}
        <Card className="rounded-2xl shadow-sm border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg text-gray-800 flex items-center">
              <Settings className="mr-2 text-purple-500" size={20} />
              Preferences
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  {darkMode ? (
                    <Moon className="text-purple-600" size={18} />
                  ) : (
                    <Sun className="text-purple-600" size={18} />
                  )}
                </div>
                <span className="font-medium text-gray-700">Dark Mode</span>
              </div>
              <Switch checked={darkMode} onCheckedChange={setDarkMode} />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Globe className="text-blue-600" size={18} />
                </div>
                <span className="font-medium text-gray-700">Language</span>
              </div>
              <Select defaultValue="english">
                <SelectTrigger className="w-24 h-8 text-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="krio">Krio</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Account Section */}
        <Card className="rounded-2xl shadow-sm border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg text-gray-800 flex items-center">
              <User className="mr-2 text-green-500" size={20} />
              Account
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Mail className="text-blue-600" size={18} />
                </div>
                <span className="font-medium text-gray-700">Update Email</span>
              </div>
              <Button variant="ghost" size="sm" className="text-blue-600">
                Edit
              </Button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <Trash2 className="text-red-600" size={18} />
                </div>
                <span className="font-medium text-gray-700">Delete Account</span>
              </div>
              <Button variant="ghost" size="sm" className="text-red-600">
                Delete
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const ProfileScreen = () => (
    <div className="h-full bg-gradient-to-br from-slate-50 to-purple-50 p-6">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Profile</h2>
        <Button variant="ghost" size="icon" onClick={() => setCurrentScreen("settings")} className="rounded-full">
          <Settings size={24} />
        </Button>
      </div>

      <div className="space-y-6">
        {/* Profile Card */}
        <Card className="rounded-3xl shadow-lg border-0 bg-gradient-to-r from-purple-500 to-blue-500 text-white">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4 mb-6">
              <div className="relative">
                <Avatar className="w-20 h-20 border-4 border-white/20">
                  <AvatarImage src="/placeholder.svg?height=80&width=80" />
                  <AvatarFallback className="bg-white/20 text-white text-xl font-bold">AK</AvatarFallback>
                </Avatar>
                <Button
                  size="icon"
                  className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-white text-purple-600 hover:bg-gray-100"
                >
                  <Camera size={16} />
                </Button>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold">Aminata Kamara</h3>
                <p className="text-purple-100">+232 76 123 456</p>
                <p className="text-purple-100">aminata@example.com</p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <Badge className="bg-white/20 text-white border-white/30 px-3 py-1">
                <Crown className="mr-1" size={14} />
                Premium Member
              </Badge>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                <Edit3 className="mr-2" size={16} />
                Edit Profile
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Wallet Info */}
        <Card className="rounded-2xl shadow-sm border-0 bg-white/80 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Wallet ID</span>
                <div className="flex items-center space-x-2">
                  <span className="font-mono text-sm bg-gray-100 px-3 py-1 rounded-lg">WLT-2024-001</span>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Copy size={16} />
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-600">Member Since</span>
                <span className="font-semibold">January 2024</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-600">Verification Status</span>
                <Badge className="bg-green-100 text-green-700">Verified</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <Button
            onClick={() => setCurrentScreen("send")}
            className="h-16 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-2xl shadow-lg"
          >
            <Send className="mr-2" size={20} />
            Send Money
          </Button>
          <Button
            onClick={() => setCurrentScreen("history")}
            className="h-16 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-2xl shadow-lg"
          >
            <History className="mr-2" size={20} />
            History
          </Button>
        </div>
      </div>
    </div>
  )

  const SendMoneyScreen = () => (
    <div className="h-full bg-gradient-to-br from-slate-50 to-green-50 p-6">
      <div className="flex items-center mb-8">
        <Button variant="ghost" size="icon" onClick={() => setCurrentScreen("profile")} className="mr-4 rounded-full">
          <ArrowLeft size={24} />
        </Button>
        <h2 className="text-2xl font-bold text-gray-800">Send Money</h2>
      </div>

      <div className="space-y-6">
        {/* Recipient Info */}
        <Card className="rounded-2xl shadow-sm border-0 bg-white/80 backdrop-blur-sm">
          <CardContent className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Recipient Name</label>
              <Input
                placeholder="Enter full name"
                className="h-12 rounded-xl border-2 border-gray-200 focus:border-green-400"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
              <div className="flex space-x-2">
                <Select defaultValue="+232">
                  <SelectTrigger className="w-20 h-12 rounded-xl border-2 border-gray-200">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="+232">+232</SelectItem>
                    <SelectItem value="+1">+1</SelectItem>
                    <SelectItem value="+44">+44</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  placeholder="76 123 456"
                  className="flex-1 h-12 rounded-xl border-2 border-gray-200 focus:border-green-400"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Amount */}
        <Card className="rounded-2xl shadow-sm border-0 bg-white/80 backdrop-blur-sm">
          <CardContent className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Amount</label>
              <div className="flex space-x-2">
                <Input
                  type="number"
                  placeholder="0.00"
                  className="flex-1 h-14 text-2xl font-bold rounded-xl border-2 border-gray-200 focus:border-green-400 text-center"
                />
                <Select defaultValue="SLL">
                  <SelectTrigger className="w-24 h-14 rounded-xl border-2 border-gray-200">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="SLL">SLL</SelectItem>
                    <SelectItem value="USD">USD</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Quick Amounts */}
            <div className="grid grid-cols-3 gap-2">
              {[10000, 25000, 50000].map((amount) => (
                <Button
                  key={amount}
                  variant="outline"
                  className="h-10 rounded-xl border-2 border-green-200 hover:border-green-400 hover:bg-green-50 text-sm"
                >
                  {amount.toLocaleString()} SLL
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Transaction Fee */}
        <Card className="rounded-2xl shadow-sm border-0 bg-blue-50/50">
          <CardContent className="p-4">
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-600">Transaction Fee</span>
              <span className="font-semibold text-blue-600">500 SLL</span>
            </div>
            <div className="flex justify-between items-center text-sm mt-2">
              <span className="font-semibold text-gray-800">Total Amount</span>
              <span className="font-bold text-lg text-gray-800">50,500 SLL</span>
            </div>
          </CardContent>
        </Card>

        {/* Send Button */}
        <Button className="w-full h-16 text-xl font-bold rounded-2xl bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-lg shadow-green-500/30">
          <Send className="mr-3" size={24} />
          Send Now
        </Button>
      </div>
    </div>
  )

  const TransactionHistoryScreen = () => (
    <div className="h-full bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="flex items-center mb-6">
        <Button variant="ghost" size="icon" onClick={() => setCurrentScreen("profile")} className="mr-4 rounded-full">
          <ArrowLeft size={24} />
        </Button>
        <h2 className="text-2xl font-bold text-gray-800">Transaction History</h2>
      </div>

      {/* Search and Filters */}
      <div className="space-y-4 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <Input
            placeholder="Search transactions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 h-12 rounded-xl border-2 border-gray-200 focus:border-blue-400 bg-white/80"
          />
        </div>

        <div className="flex space-x-2">
          {["all", "sent", "received"].map((filter) => (
            <Button
              key={filter}
              variant={transactionFilter === filter ? "default" : "outline"}
              size="sm"
              onClick={() => setTransactionFilter(filter)}
              className="rounded-full capitalize"
            >
              {filter}
            </Button>
          ))}
        </div>
      </div>

      {/* Transactions List */}
      <div className="space-y-3 flex-1 overflow-y-auto">
        {filteredTransactions.map((transaction) => (
          <Card key={transaction.id} className="rounded-2xl shadow-sm border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      transaction.type === "received" ? "bg-green-100" : "bg-blue-100"
                    }`}
                  >
                    {transaction.type === "received" ? (
                      <TrendingUp className="text-green-600" size={20} />
                    ) : (
                      <TrendingDown className="text-blue-600" size={20} />
                    )}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{transaction.recipient || transaction.sender}</p>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Calendar size={12} />
                      <span>
                        {transaction.date} • {transaction.time}
                      </span>
                      <Badge variant={transaction.status === "completed" ? "default" : "secondary"} className="text-xs">
                        {transaction.status}
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p
                    className={`text-lg font-bold ${
                      transaction.type === "received" ? "text-green-600" : "text-blue-600"
                    }`}
                  >
                    {transaction.type === "received" ? "+" : "-"}
                    {transaction.amount.toLocaleString()} {transaction.currency}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )

  const AdminDashboardScreen = () => (
    <div className="h-full bg-gradient-to-br from-slate-50 to-red-50 p-6">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Admin Dashboard</h2>
        <Badge className="bg-red-100 text-red-700 px-3 py-1">
          <Shield className="mr-1" size={14} />
          Admin
        </Badge>
      </div>

      <div className="space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="rounded-2xl shadow-sm border-0 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm">Total Users</p>
                  <h3 className="text-2xl font-bold">12,847</h3>
                </div>
                <Users className="text-blue-200" size={32} />
              </div>
              <div className="flex items-center mt-2 text-blue-100 text-sm">
                <TrendingUp size={14} className="mr-1" />
                +12% this month
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-sm border-0 bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100 text-sm">Transactions</p>
                  <h3 className="text-2xl font-bold">45,231</h3>
                </div>
                <DollarSign className="text-green-200" size={32} />
              </div>
              <div className="flex items-center mt-2 text-green-100 text-sm">
                <TrendingUp size={14} className="mr-1" />
                +8% this week
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Analytics Preview */}
        <Card className="rounded-2xl shadow-sm border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center text-gray-800">
              <BarChart3 className="mr-2 text-purple-500" size={20} />
              Analytics Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-32 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl flex items-center justify-center">
              <div className="text-center text-gray-600">
                <BarChart3 size={32} className="mx-auto mb-2 opacity-50" />
                <p className="text-sm">Chart visualization would go here</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Admin Actions */}
        <Card className="rounded-2xl shadow-sm border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-gray-800">Account Management</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <UserX className="text-red-600" size={18} />
                </div>
                <span className="font-medium text-gray-700">Freeze Account</span>
              </div>
              <Button variant="outline" className="border-red-200 text-red-600 hover:bg-red-50">
                Freeze
              </Button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <UserCheck className="text-green-600" size={18} />
                </div>
                <span className="font-medium text-gray-700">Unfreeze Account</span>
              </div>
              <Button variant="outline" className="border-green-200 text-green-600 hover:bg-green-50">
                Unfreeze
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="rounded-2xl shadow-sm border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-gray-800">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { action: "New user registration", user: "John Doe", time: "2 min ago" },
                { action: "Large transaction alert", user: "Mary Johnson", time: "5 min ago" },
                { action: "Account verification", user: "Ahmed Hassan", time: "10 min ago" },
              ].map((activity, index) => (
                <div key={index} className="flex items-center justify-between py-2">
                  <div>
                    <p className="font-medium text-gray-800">{activity.action}</p>
                    <p className="text-sm text-gray-600">{activity.user}</p>
                  </div>
                  <span className="text-xs text-gray-500">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const DarkModeScreen = () => (
    <div className="h-full bg-gray-900 text-white p-6">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold">Dark Mode Preview</h2>
        <div className="flex items-center space-x-2">
          <Moon className="text-blue-400" size={20} />
          <span className="text-sm text-gray-300">Dark Theme</span>
        </div>
      </div>

      <div className="space-y-6">
        {/* Login Form Preview */}
        <Card className="rounded-2xl shadow-lg border border-gray-700 bg-gray-800">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Smartphone className="mr-2 text-blue-400" size={20} />
              Login Form (Dark)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              placeholder="Email address"
              className="h-12 bg-gray-700 border-gray-600 text-white placeholder-gray-400 rounded-xl focus:border-blue-400"
            />
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="h-12 bg-gray-700 border-gray-600 text-white placeholder-gray-400 rounded-xl focus:border-blue-400 pr-12"
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            <Button className="w-full h-12 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-xl">
              Login
            </Button>
          </CardContent>
        </Card>

        {/* Dashboard Preview */}
        <Card className="rounded-2xl shadow-lg border border-gray-700 bg-gray-800">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Home className="mr-2 text-green-400" size={20} />
              Dashboard (Dark)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-gradient-to-r from-gray-700 to-gray-600 p-4 rounded-xl">
              <p className="text-gray-300 text-sm">Wallet Balance</p>
              <h3 className="text-2xl font-bold text-white">Le 125,000</h3>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Button className="h-12 bg-green-600 hover:bg-green-700 rounded-xl">
                <Send className="mr-2" size={16} />
                Send
              </Button>
              <Button className="h-12 bg-blue-600 hover:bg-blue-700 rounded-xl">
                <History className="mr-2" size={16} />
                History
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Notification Preview */}
        <Card className="rounded-2xl shadow-lg border border-gray-700 bg-gray-800">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <Bell className="text-white" size={18} />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-white">Transaction Completed</p>
                <p className="text-sm text-gray-400">You sent Le 50,000 to John Doe</p>
              </div>
              <span className="text-xs text-gray-500">2m ago</span>
            </div>
          </CardContent>
        </Card>

        {/* Color Palette */}
        <Card className="rounded-2xl shadow-lg border border-gray-700 bg-gray-800">
          <CardHeader>
            <CardTitle className="text-white">Dark Mode Colors</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-4 gap-3">
              <div className="space-y-2">
                <div className="w-full h-8 bg-blue-500 rounded"></div>
                <p className="text-xs text-gray-400">Primary</p>
              </div>
              <div className="space-y-2">
                <div className="w-full h-8 bg-green-500 rounded"></div>
                <p className="text-xs text-gray-400">Success</p>
              </div>
              <div className="space-y-2">
                <div className="w-full h-8 bg-orange-500 rounded"></div>
                <p className="text-xs text-gray-400">Warning</p>
              </div>
              <div className="space-y-2">
                <div className="w-full h-8 bg-red-500 rounded"></div>
                <p className="text-xs text-gray-400">Danger</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const renderScreen = () => {
    switch (currentScreen) {
      case "settings":
        return <SettingsScreen />
      case "profile":
        return <ProfileScreen />
      case "send":
        return <SendMoneyScreen />
      case "history":
        return <TransactionHistoryScreen />
      case "admin":
        return <AdminDashboardScreen />
      case "dark":
        return <DarkModeScreen />
      default:
        return <SettingsScreen />
    }
  }

  return (
    <div className="max-w-sm mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
      {/* Phone Frame */}
      <div className="bg-black p-2 rounded-3xl">
        <div className="bg-gray-900 rounded-2xl p-1">
          {/* Status Bar */}
          <div className="flex justify-between items-center px-6 py-2 text-white text-sm">
            <span className="font-semibold">9:41</span>
            <div className="flex space-x-1">
              <div className="w-4 h-2 bg-white rounded-sm"></div>
              <div className="w-4 h-2 bg-white rounded-sm"></div>
              <div className="w-4 h-2 bg-white rounded-sm"></div>
            </div>
          </div>

          {/* Screen Content */}
          <div
            className={`${currentScreen === "dark" ? "bg-gray-900" : "bg-white"} rounded-2xl h-[700px] overflow-hidden`}
          >
            {renderScreen()}
          </div>
        </div>
      </div>

      {/* Screen Navigation */}
      <div className="p-4 bg-gray-50">
        <div className="grid grid-cols-3 gap-2 mb-4">
          {screens.map((screen) => {
            const IconComponent = screen.icon
            return (
              <Button
                key={screen.id}
                variant={currentScreen === screen.id ? "default" : "outline"}
                size="sm"
                onClick={() => setCurrentScreen(screen.id)}
                className="text-xs rounded-lg h-12 flex flex-col items-center justify-center space-y-1"
              >
                <IconComponent size={16} />
                <span>{screen.name}</span>
              </Button>
            )
          })}
        </div>
        <p className="text-center text-xs text-gray-500">Modern Finance App - Complete UI Kit</p>
      </div>
    </div>
  )
}
