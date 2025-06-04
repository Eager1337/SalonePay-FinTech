"use client"

import { useState } from "react"
import {
  ArrowLeft,
  Eye,
  EyeOff,
  Send,
  History,
  Settings,
  LogOut,
  Plus,
  User,
  Phone,
  MessageCircle,
  Calendar,
  TrendingUp,
  TrendingDown,
  PieChart,
  Target,
  Edit3,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function SalonePayApp() {
  const [currentScreen, setCurrentScreen] = useState("login")
  const [showPassword, setShowPassword] = useState(false)
  const [walletBalance] = useState(125000)
  const [userName] = useState("Aminata")

  const screens = [
    { id: "login", name: "Login" },
    { id: "dashboard", name: "Dashboard" },
    { id: "send", name: "Send Money" },
    { id: "history", name: "History" },
    { id: "budget", name: "Budget" },
  ]

  const transactions = [
    { id: 1, type: "received", amount: 25000, from: "Mohamed K.", date: "2024-01-15", time: "14:30" },
    { id: 2, type: "sent", amount: 15000, to: "Fatima S.", date: "2024-01-14", time: "09:15" },
    { id: 3, type: "received", amount: 50000, from: "Ibrahim T.", date: "2024-01-13", time: "16:45" },
    { id: 4, type: "sent", amount: 8000, to: "Adama B.", date: "2024-01-12", time: "11:20" },
  ]

  const budgetCategories = [
    { name: "Food", allocated: 80000, spent: 45000, color: "bg-orange-500" },
    { name: "Transport", allocated: 30000, spent: 28000, color: "bg-blue-500" },
    { name: "Bills", allocated: 50000, spent: 35000, color: "bg-red-500" },
    { name: "Entertainment", allocated: 25000, spent: 12000, color: "bg-purple-500" },
    { name: "Savings", allocated: 40000, spent: 40000, color: "bg-green-500" },
  ]

  const LoginScreen = () => (
    <div className="h-full bg-gradient-to-br from-white via-purple-50 to-purple-100 flex flex-col justify-center px-8 relative overflow-hidden">
      {/* Abstract background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-400 rounded-full blur-xl"></div>
        <div className="absolute bottom-40 right-10 w-24 h-24 bg-green-400 rounded-full blur-lg"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-400 rounded-full blur-md"></div>
      </div>

      <div className="relative z-10">
        {/* Logo */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 bg-clip-text text-transparent mb-2">
            SalonePay
          </h1>
          <p className="text-gray-600 text-lg">Your Digital Wallet</p>
        </div>

        {/* Login Form */}
        <div className="space-y-6">
          <div>
            <Input
              type="email"
              placeholder="Email address"
              className="h-14 text-lg rounded-2xl border-2 border-purple-200 focus:border-purple-400 bg-white/80 backdrop-blur-sm"
            />
          </div>

          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="h-14 text-lg rounded-2xl border-2 border-purple-200 focus:border-purple-400 bg-white/80 backdrop-blur-sm pr-12"
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <Button
            onClick={() => setCurrentScreen("dashboard")}
            className="w-full h-14 text-lg font-semibold rounded-2xl bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-lg shadow-green-500/30"
          >
            Login
          </Button>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600">
            Don't have an account? <span className="text-purple-600 font-semibold">Sign up</span>
          </p>
        </div>
      </div>
    </div>
  )

  const DashboardScreen = () => (
    <div className="h-full bg-gradient-to-br from-slate-50 to-purple-50 relative overflow-hidden">
      {/* Abstract background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-40 h-40 bg-purple-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-green-400 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-blue-400 rounded-full blur-xl"></div>
        </div>
      </div>

      <div className="relative z-10 p-6 h-full flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Welcome, {userName}!</h2>
            <p className="text-gray-600">Ready to manage your money?</p>
          </div>
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
            <User className="text-white" size={24} />
          </div>
        </div>

        {/* Wallet Balance Card */}
        <Card className="mb-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-xl shadow-purple-500/20 rounded-3xl border-0">
          <CardContent className="p-6">
            <p className="text-purple-100 mb-2">Wallet Balance</p>
            <h3 className="text-3xl font-bold mb-4">Le {walletBalance.toLocaleString()}</h3>
            <div className="flex justify-between items-center">
              <span className="text-purple-100">Available</span>
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                <div className="w-2 h-2 bg-white/30 rounded-full"></div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 gap-4 mb-8 flex-1">
          <Button
            onClick={() => setCurrentScreen("send")}
            className="h-16 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-2xl shadow-lg shadow-green-500/20 text-lg font-semibold"
          >
            <Send className="mr-3" size={24} />
            Send Money
          </Button>

          <Button
            onClick={() => setCurrentScreen("history")}
            className="h-16 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-2xl shadow-lg shadow-blue-500/20 text-lg font-semibold"
          >
            <History className="mr-3" size={24} />
            Transaction History
          </Button>

          <Button
            onClick={() => setCurrentScreen("budget")}
            className="h-16 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-2xl shadow-lg shadow-orange-500/20 text-lg font-semibold"
          >
            <PieChart className="mr-3" size={24} />
            Budget Planner
          </Button>

          <Button
            variant="outline"
            className="h-16 border-2 border-gray-300 hover:border-gray-400 rounded-2xl text-lg font-semibold"
          >
            <Settings className="mr-3" size={24} />
            Settings
          </Button>
        </div>

        {/* Logout */}
        <Button
          onClick={() => setCurrentScreen("login")}
          variant="ghost"
          className="text-red-500 hover:text-red-600 hover:bg-red-50 rounded-2xl h-12"
        >
          <LogOut className="mr-2" size={20} />
          Logout
        </Button>
      </div>
    </div>
  )

  const SendMoneyScreen = () => (
    <div className="h-full bg-gradient-to-br from-slate-50 to-orange-50 p-6 relative overflow-hidden">
      {/* Abstract background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-32 h-32 bg-orange-400 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-blue-400 rounded-full blur-xl"></div>
      </div>

      <div className="relative z-10 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCurrentScreen("dashboard")}
            className="mr-4 rounded-full"
          >
            <ArrowLeft size={24} />
          </Button>
          <h2 className="text-2xl font-bold text-gray-800">Send Money</h2>
        </div>

        {/* Form */}
        <div className="space-y-6 flex-1">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Recipient</label>
            <div className="relative">
              <Input
                placeholder="Phone number or email"
                className="h-14 text-lg rounded-2xl border-2 border-orange-200 focus:border-orange-400 pl-12"
              />
              <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Amount (Le)</label>
            <Input
              type="number"
              placeholder="0"
              className="h-14 text-2xl font-bold rounded-2xl border-2 border-orange-200 focus:border-orange-400 text-center"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Message (Optional)</label>
            <div className="relative">
              <Input
                placeholder="Add a note..."
                className="h-14 text-lg rounded-2xl border-2 border-orange-200 focus:border-orange-400 pl-12"
              />
              <MessageCircle className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>

          {/* Quick Amount Buttons */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Quick Amounts</label>
            <div className="grid grid-cols-3 gap-3">
              {[5000, 10000, 25000].map((amount) => (
                <Button
                  key={amount}
                  variant="outline"
                  className="h-12 rounded-xl border-2 border-orange-200 hover:border-orange-400 hover:bg-orange-50"
                >
                  Le {amount.toLocaleString()}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Confirmation Text */}
        <div className="bg-orange-50 p-4 rounded-2xl mb-6">
          <p className="text-center text-gray-700">
            You are sending <span className="font-bold text-orange-600">Le 50,000</span> to{" "}
            <span className="font-bold">Mohamed K.</span>
          </p>
        </div>

        {/* Send Button */}
        <Button className="w-full h-16 text-xl font-bold rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-lg shadow-orange-500/30">
          <Send className="mr-3" size={24} />
          Send Money
        </Button>
      </div>
    </div>
  )

  const TransactionHistoryScreen = () => (
    <div className="h-full bg-gradient-to-br from-slate-50 to-blue-50 p-6 relative overflow-hidden">
      {/* Abstract background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-28 h-28 bg-blue-400 rounded-full blur-2xl"></div>
        <div className="absolute bottom-40 right-20 w-20 h-20 bg-green-400 rounded-full blur-xl"></div>
      </div>

      <div className="relative z-10 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCurrentScreen("dashboard")}
            className="mr-4 rounded-full"
          >
            <ArrowLeft size={24} />
          </Button>
          <h2 className="text-2xl font-bold text-gray-800">Transaction History</h2>
        </div>

        {/* Transactions List */}
        <div className="space-y-4 flex-1 overflow-y-auto">
          {transactions.map((transaction) => (
            <Card
              key={transaction.id}
              className={`rounded-2xl shadow-sm border-l-4 ${
                transaction.type === "received" ? "border-l-green-500 bg-green-50/50" : "border-l-red-500 bg-red-50/50"
              }`}
            >
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        transaction.type === "received" ? "bg-green-500" : "bg-red-500"
                      }`}
                    >
                      {transaction.type === "received" ? (
                        <TrendingUp className="text-white" size={20} />
                      ) : (
                        <TrendingDown className="text-white" size={20} />
                      )}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">
                        {transaction.type === "received" ? "From" : "To"}: {transaction.from || transaction.to}
                      </p>
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar size={14} className="mr-1" />
                        {transaction.date} • {transaction.time}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p
                      className={`text-lg font-bold ${
                        transaction.type === "received" ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {transaction.type === "received" ? "+" : "-"}Le {transaction.amount.toLocaleString()}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <Button
          variant="outline"
          className="w-full h-12 mt-4 rounded-2xl border-2 border-blue-200 hover:border-blue-400 hover:bg-blue-50"
        >
          Load More Transactions
        </Button>
      </div>
    </div>
  )

  const BudgetPlannerScreen = () => (
    <div className="h-full bg-gradient-to-br from-slate-50 to-green-50 p-6 relative overflow-hidden">
      {/* Abstract background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-36 h-36 bg-green-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-purple-400 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setCurrentScreen("dashboard")}
              className="mr-4 rounded-full"
            >
              <ArrowLeft size={24} />
            </Button>
            <h2 className="text-2xl font-bold text-gray-800">Budget Planner</h2>
          </div>
          <Button size="icon" className="rounded-full bg-green-500 hover:bg-green-600">
            <Plus className="text-white" size={20} />
          </Button>
        </div>

        {/* Monthly Overview */}
        <Card className="mb-6 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-3xl border-0 shadow-lg shadow-green-500/20">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-green-100">Monthly Budget</p>
                <h3 className="text-2xl font-bold">Le 225,000</h3>
              </div>
              <div className="text-right">
                <p className="text-green-100">Spent</p>
                <h3 className="text-2xl font-bold">Le 160,000</h3>
              </div>
            </div>
            <Progress value={71} className="h-3 bg-green-400" />
            <p className="text-green-100 text-sm mt-2">71% of budget used</p>
          </CardContent>
        </Card>

        {/* Budget Categories */}
        <div className="space-y-4 flex-1 overflow-y-auto">
          {budgetCategories.map((category, index) => {
            const percentage = (category.spent / category.allocated) * 100
            return (
              <Card key={index} className="rounded-2xl shadow-sm">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded-full ${category.color}`}></div>
                      <span className="font-semibold text-gray-800">{category.name}</span>
                    </div>
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                      <Edit3 size={16} />
                    </Button>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Le {category.spent.toLocaleString()} spent</span>
                      <span>Le {category.allocated.toLocaleString()} budget</span>
                    </div>
                    <Progress value={percentage} className={`h-2 ${percentage > 90 ? "bg-red-200" : "bg-gray-200"}`} />
                    <div className="flex justify-between items-center">
                      <span
                        className={`text-sm font-semibold ${
                          percentage > 90 ? "text-red-600" : percentage > 75 ? "text-orange-600" : "text-green-600"
                        }`}
                      >
                        {percentage.toFixed(0)}% used
                      </span>
                      <span className="text-sm text-gray-500">
                        Le {(category.allocated - category.spent).toLocaleString()} left
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Add Category Button */}
        <Button className="w-full h-12 mt-4 rounded-2xl bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 shadow-lg shadow-purple-500/20">
          <Target className="mr-2" size={20} />
          Add New Category
        </Button>
      </div>
    </div>
  )

  const renderScreen = () => {
    switch (currentScreen) {
      case "login":
        return <LoginScreen />
      case "dashboard":
        return <DashboardScreen />
      case "send":
        return <SendMoneyScreen />
      case "history":
        return <TransactionHistoryScreen />
      case "budget":
        return <BudgetPlannerScreen />
      default:
        return <LoginScreen />
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
          <div className="bg-white rounded-2xl h-[700px] overflow-hidden">{renderScreen()}</div>
        </div>
      </div>

      {/* Screen Navigation */}
      <div className="p-4 bg-gray-50">
        <div className="flex justify-center space-x-2 mb-4">
          {screens.map((screen) => (
            <Button
              key={screen.id}
              variant={currentScreen === screen.id ? "default" : "outline"}
              size="sm"
              onClick={() => setCurrentScreen(screen.id)}
              className="text-xs rounded-full"
            >
              {screen.name}
            </Button>
          ))}
        </div>
        <p className="text-center text-xs text-gray-500">SalonePay - Modern Financial App for Sierra Leone</p>
      </div>
    </div>
  )
}
