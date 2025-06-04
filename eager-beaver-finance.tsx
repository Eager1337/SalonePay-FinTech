"use client"

import { useState, useEffect, useRef } from "react"
import {
  ArrowLeft,
  Settings,
  User,
  Send,
  History,
  Eye,
  EyeOff,
  Fingerprint,
  Moon,
  Sun,
  TrendingUp,
  TrendingDown,
  Home,
  Lock,
  Bell,
  X,
  AlertCircle,
  Wallet,
  PlusCircle,
  Banknote,
  Loader2,
  BeakerIcon as Beaver,
  Camera,
  Edit3,
  Copy,
  Check,
  Crown,
  Target,
  Shield,
  Gift,
  Scan,
  RefreshCw,
  Receipt,
  Share,
  Heart,
  Smartphone,
  CreditCardIcon as Card,
  GraduationCap,
  Car,
  HomeIcon as House,
  ShoppingBag,
  Gamepad2,
  Plane,
  Utensils,
  PawPrintIcon as Paw,
  BirdIcon as Chicken,
  FlagIcon as Turkey,
  SnailIcon as Crab,
  OctagonIcon as Octopus,
  CodeIcon as Cod,
  FishIcon as Shark,
  PenIcon as Permit,
  FishOffIcon as Flounder,
  WheatIcon as Sheep,
  MilkIcon as Cow,
  FlowerIcon as Butterfly,
  BirdIcon as Parrot,
  GroupIcon as Grouper,
  FishIcon as Mackerel,
  WavesIcon as Wahoo,
  FishIcon as Mahi,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function EagerBeaverFinance() {
  // App state
  const [currentScreen, setCurrentScreen] = useState("welcome")
  const [previousScreen, setPreviousScreen] = useState("")
  const [darkMode, setDarkMode] = useState(false)
  const [fingerprintEnabled, setFingerprintEnabled] = useState(true)
  const [notificationsEnabled, setNotificationsEnabled] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [transactionFilter, setTransactionFilter] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [loading, setLoading] = useState(false)
  const [processingPayment, setProcessingPayment] = useState(false)
  const [paymentSuccess, setPaymentSuccess] = useState(false)
  const [selectedCurrency, setSelectedCurrency] = useState("SLL")
  const [amount, setAmount] = useState("")
  const [recipientName, setRecipientName] = useState("")
  const [recipientPhone, setRecipientPhone] = useState("")
  const [countryCode, setCountryCode] = useState("+232")
  const [currentLanguage, setCurrentLanguage] = useState("english")
  const [showNotification, setShowNotification] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isRegistering, setIsRegistering] = useState(false)
  const [showEditProfile, setShowEditProfile] = useState(false)
  const [showChangeAvatar, setShowChangeAvatar] = useState(false)
  const [showTransferSuccess, setShowTransferSuccess] = useState(false)
  const [lastTransactionId, setLastTransactionId] = useState(null)
  const [showQRCode, setShowQRCode] = useState(false)
  const [showQRScanner, setShowQRScanner] = useState(false)
  const [showBillPayment, setShowBillPayment] = useState(false)
  const [showTopUp, setShowTopUp] = useState(false)
  const [showInvestments, setShowInvestments] = useState(false)
  const [showLoans, setShowLoans] = useState(false)
  const [showInsurance, setShowInsurance] = useState(false)
  const [showSupport, setShowSupport] = useState(false)
  const [showReferral, setShowReferral] = useState(false)
  const [showAnalytics, setShowAnalytics] = useState(false)
  const [showCards, setShowCards] = useState(false)
  const [showAddCard, setShowAddCard] = useState(false)
  const [showTransactionDetails, setShowTransactionDetails] = useState(false)
  const [selectedTransaction, setSelectedTransaction] = useState(null)
  const [showBudgetPlanner, setShowBudgetPlanner] = useState(false)
  const [showSavingsGoals, setShowSavingsGoals] = useState(false)
  const [showAddSavingsGoal, setShowAddSavingsGoal] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)
  const [showSecurity, setShowSecurity] = useState(false)
  const [showPrivacy, setShowPrivacy] = useState(false)
  const [showAbout, setShowAbout] = useState(false)
  const [showTerms, setShowTerms] = useState(false)
  const [showHelp, setShowHelp] = useState(false)
  const [showFeedback, setShowFeedback] = useState(false)
  const [showContactUs, setShowContactUs] = useState(false)
  const [showRewards, setShowRewards] = useState(false)
  const [showPromotions, setShowPromotions] = useState(false)
  const [showStatements, setShowStatements] = useState(false)
  const [showTaxDocuments, setShowTaxDocuments] = useState(false)
  const [showExportData, setShowExportData] = useState(false)
  const [showBackup, setShowBackup] = useState(false)
  const [showRestore, setShowRestore] = useState(false)
  const [showTwoFactor, setShowTwoFactor] = useState(false)
  const [showDevices, setShowDevices] = useState(false)
  const [showSessions, setShowSessions] = useState(false)
  const [showPermissions, setShowPermissions] = useState(false)
  const [showDataUsage, setShowDataUsage] = useState(false)
  const [showLocationServices, setShowLocationServices] = useState(false)
  const [showBiometrics, setShowBiometrics] = useState(false)
  const [showPinSettings, setShowPinSettings] = useState(false)
  const [showPasswordSettings, setShowPasswordSettings] = useState(false)
  const [showEmailSettings, setShowEmailSettings] = useState(false)
  const [showPhoneSettings, setShowPhoneSettings] = useState(false)
  const [showAddressSettings, setShowAddressSettings] = useState(false)
  const [showEmergencyContacts, setShowEmergencyContacts] = useState(false)
  const [showBeneficiaries, setShowBeneficiaries] = useState(false)
  const [showWillSettings, setShowWillSettings] = useState(false)
  const [showTrustSettings, setShowTrustSettings] = useState(false)
  const [showEstateSettings, setShowEstateSettings] = useState(false)
  const [showLegalSettings, setShowLegalSettings] = useState(false)
  const [showComplianceSettings, setShowComplianceSettings] = useState(false)
  const [showAuditLog, setShowAuditLog] = useState(false)
  const [showActivityLog, setShowActivityLog] = useState(false)
  const [showLoginHistory, setShowLoginHistory] = useState(false)
  const [showTransactionHistory, setShowTransactionHistory] = useState(false)
  const [showPaymentHistory, setShowPaymentHistory] = useState(false)
  const [showTransferHistory, setShowTransferHistory] = useState(false)
  const [showDepositHistory, setShowDepositHistory] = useState(false)
  const [showWithdrawalHistory, setShowWithdrawalHistory] = useState(false)
  const [showInvestmentHistory, setShowInvestmentHistory] = useState(false)
  const [showLoanHistory, setShowLoanHistory] = useState(false)
  const [showInsuranceHistory, setShowInsuranceHistory] = useState(false)
  const [showBillHistory, setShowBillHistory] = useState(false)
  const [showTopUpHistory, setShowTopUpHistory] = useState(false)
  const [showRewardHistory, setShowRewardHistory] = useState(false)
  const [showPromotionHistory, setShowPromotionHistory] = useState(false)
  const [showReferralHistory, setShowReferralHistory] = useState(false)
  const [showCashbackHistory, setShowCashbackHistory] = useState(false)
  const [showDiscountHistory, setShowDiscountHistory] = useState(false)
  const [showCouponHistory, setShowCouponHistory] = useState(false)
  const [showVoucherHistory, setShowVoucherHistory] = useState(false)
  const [showGiftCardHistory, setShowGiftCardHistory] = useState(false)
  const [showLoyaltyHistory, setShowLoyaltyHistory] = useState(false)
  const [showPointsHistory, setShowPointsHistory] = useState(false)
  const [showMilesHistory, setShowMilesHistory] = useState(false)
  const [showCreditHistory, setShowCreditHistory] = useState(false)
  const [showDebitHistory, setShowDebitHistory] = useState(false)
  const [showBalanceHistory, setShowBalanceHistory] = useState(false)
  const [showLimitHistory, setShowLimitHistory] = useState(false)
  const [showFeeHistory, setShowFeeHistory] = useState(false)
  const [showChargeHistory, setShowChargeHistory] = useState(false)
  const [showTaxHistory, setShowTaxHistory] = useState(false)
  const [showInterestHistory, setShowInterestHistory] = useState(false)
  const [showDividendHistory, setShowDividendHistory] = useState(false)
  const [showBonusHistory, setShowBonusHistory] = useState(false)
  const [showPenaltyHistory, setShowPenaltyHistory] = useState(false)
  const [showRefundHistory, setShowRefundHistory] = useState(false)
  const [showChargebackHistory, setShowChargebackHistory] = useState(false)
  const [showDisputeHistory, setShowDisputeHistory] = useState(false)
  const [showClaimHistory, setShowClaimHistory] = useState(false)
  const [showSettlementHistory, setShowSettlementHistory] = useState(false)
  const [showAdjustmentHistory, setShowAdjustmentHistory] = useState(false)
  const [showCorrectionHistory, setShowCorrectionHistory] = useState(false)
  const [showReversalHistory, setShowReversalHistory] = useState(false)
  const [showCancellationHistory, setShowCancellationHistory] = useState(false)
  const [showVoidHistory, setShowVoidHistory] = useState(false)
  const [showHoldHistory, setShowHoldHistory] = useState(false)
  const [showFreezeHistory, setShowFreezeHistory] = useState(false)
  const [showUnfreezeHistory, setShowUnfreezeHistory] = useState(false)
  const [showSuspendHistory, setShowSuspendHistory] = useState(false)
  const [showReactivateHistory, setShowReactivateHistory] = useState(false)
  const [showCloseHistory, setShowCloseHistory] = useState(false)
  const [showReopenHistory, setShowReopenHistory] = useState(false)
  const [showUpgradeHistory, setShowUpgradeHistory] = useState(false)
  const [showDowngradeHistory, setShowDowngradeHistory] = useState(false)
  const [showMigrationHistory, setShowMigrationHistory] = useState(false)
  const [showConversionHistory, setShowConversionHistory] = useState(false)
  const [showExchangeHistory, setShowExchangeHistory] = useState(false)
  const [showSwapHistory, setShowSwapHistory] = useState(false)
  const [showTradeHistory, setShowTradeHistory] = useState(false)
  const [showOrderHistory, setShowOrderHistory] = useState(false)
  const [showExecutionHistory, setShowExecutionHistory] = useState(false)
  const [showSettlementHistory2, setShowSettlementHistory2] = useState(false)
  const [showClearingHistory, setShowClearingHistory] = useState(false)
  const [showReconciliationHistory, setShowReconciliationHistory] = useState(false)
  const [showValidationHistory, setShowValidationHistory] = useState(false)
  const [showVerificationHistory, setShowVerificationHistory] = useState(false)
  const [showAuthenticationHistory, setShowAuthenticationHistory] = useState(false)
  const [showAuthorizationHistory, setShowAuthorizationHistory] = useState(false)
  const [showApprovalHistory, setShowApprovalHistory] = useState(false)
  const [showRejectionHistory, setShowRejectionHistory] = useState(false)
  const [showDeclineHistory, setShowDeclineHistory] = useState(false)
  const [showFailureHistory, setShowFailureHistory] = useState(false)
  const [showErrorHistory, setShowErrorHistory] = useState(false)
  const [showExceptionHistory, setShowExceptionHistory] = useState(false)
  const [showWarningHistory, setShowWarningHistory] = useState(false)
  const [showAlertHistory, setShowAlertHistory] = useState(false)
  const [showNotificationHistory, setShowNotificationHistory] = useState(false)
  const [showMessageHistory, setShowMessageHistory] = useState(false)
  const [showEmailHistory, setShowEmailHistory] = useState(false)
  const [showSmsHistory, setShowSmsHistory] = useState(false)
  const [showPushHistory, setShowPushHistory] = useState(false)
  const [showInAppHistory, setShowInAppHistory] = useState(false)
  const [showWebHistory, setShowWebHistory] = useState(false)
  const [showMobileHistory, setShowMobileHistory] = useState(false)
  const [showDesktopHistory, setShowDesktopHistory] = useState(false)
  const [showTabletHistory, setShowTabletHistory] = useState(false)
  const [showWatchHistory, setShowWatchHistory] = useState(false)
  const [showTvHistory, setShowTvHistory] = useState(false)
  const [showCarHistory, setShowCarHistory] = useState(false)
  const [showIotHistory, setShowIotHistory] = useState(false)
  const [showApiHistory, setShowApiHistory] = useState(false)
  const [showWebhookHistory, setShowWebhookHistory] = useState(false)
  const [showCallbackHistory, setShowCallbackHistory] = useState(false)
  const [showEventHistory, setShowEventHistory] = useState(false)
  const [showTriggerHistory, setShowTriggerHistory] = useState(false)
  const [showActionHistory, setShowActionHistory] = useState(false)
  const [showWorkflowHistory, setShowWorkflowHistory] = useState(false)
  const [showProcessHistory, setShowProcessHistory] = useState(false)
  const [showJobHistory, setShowJobHistory] = useState(false)
  const [showTaskHistory, setShowTaskHistory] = useState(false)
  const [showScheduleHistory, setShowScheduleHistory] = useState(false)
  const [showCronHistory, setShowCronHistory] = useState(false)
  const [showBatchHistory, setShowBatchHistory] = useState(false)
  const [showQueueHistory, setShowQueueHistory] = useState(false)
  const [showStreamHistory, setShowStreamHistory] = useState(false)
  const [showPipelineHistory, setShowPipelineHistory] = useState(false)
  const [showChannelHistory, setShowChannelHistory] = useState(false)
  const [showTopicHistory, setShowTopicHistory] = useState(false)
  const [showSubscriptionHistory, setShowSubscriptionHistory] = useState(false)
  const [showPublicationHistory, setShowPublicationHistory] = useState(false)
  const [showBroadcastHistory, setShowBroadcastHistory] = useState(false)
  const [showMulticastHistory, setShowMulticastHistory] = useState(false)
  const [showUnicastHistory, setShowUnicastHistory] = useState(false)
  const [showAnycastHistory, setShowAnycastHistory] = useState(false)
  const [showGeocastHistory, setShowGeocastHistory] = useState(false)
  const [showProximityHistory, setShowProximityHistory] = useState(false)
  const [showLocationHistory, setShowLocationHistory] = useState(false)
  const [showGeofenceHistory, setShowGeofenceHistory] = useState(false)
  const [showBeaconHistory, setShowBeaconHistory] = useState(false)
  const [showNfcHistory, setShowNfcHistory] = useState(false)
  const [showBluetoothHistory, setShowBluetoothHistory] = useState(false)
  const [showWifiHistory, setShowWifiHistory] = useState(false)
  const [showCellularHistory, setShowCellularHistory] = useState(false)
  const [showSatelliteHistory, setShowSatelliteHistory] = useState(false)
  const [showGpsHistory, setShowGpsHistory] = useState(false)
  const [showGlonassHistory, setShowGlonassHistory] = useState(false)
  const [showGalileoHistory, setShowGalileoHistory] = useState(false)
  const [showBeidouHistory, setShowBeidouHistory] = useState(false)
  const [showQzssHistory, setShowQzssHistory] = useState(false)
  const [showIrnssHistory, setShowIrnssHistory] = useState(false)
  const [showSbasHistory, setShowSbasHistory] = useState(false)
  const [showWaasHistory, setShowWaasHistory] = useState(false)
  const [showEgnossHistory, setShowEgnossHistory] = useState(false)
  const [showMsasHistory, setShowMsasHistory] = useState(false)
  const [showGaganHistory, setShowGaganHistory] = useState(false)
  const [showSdcmHistory, setShowSdcmHistory] = useState(false)
  const [showA1History, setShowA1History] = useState(false)
  const [showA2History, setShowA2History] = useState(false)
  const [showA3History, setShowA3History] = useState(false)
  const [showA4History, setShowA4History] = useState(false)
  const [showA5History, setShowA5History] = useState(false)
  const [showA6History, setShowA6History] = useState(false)
  const [showA7History, setShowA7History] = useState(false)
  const [showA8History, setShowA8History] = useState(false)
  const [showA9History, setShowA9History] = useState(false)
  const [showA10History, setShowA10History] = useState(false)

  // Login/Register state
  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")
  const [loginError, setLoginError] = useState("")
  const [registerFirstName, setRegisterFirstName] = useState("")
  const [registerLastName, setRegisterLastName] = useState("")
  const [registerEmail, setRegisterEmail] = useState("")
  const [registerPhone, setRegisterPhone] = useState("")
  const [registerPassword, setRegisterPassword] = useState("")
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState("")
  const [registerError, setRegisterError] = useState("")
  const [registerSuccess, setRegisterSuccess] = useState(false)
  const [acceptTerms, setAcceptTerms] = useState(false)
  const [acceptPrivacy, setAcceptPrivacy] = useState(false)
  const [acceptMarketing, setAcceptMarketing] = useState(false)

  // Biometric/PIN state
  const [showBiometricPrompt, setShowBiometricPrompt] = useState(false)
  const [showPinPrompt, setShowPinPrompt] = useState(false)
  const [pin, setPin] = useState(["", "", "", ""])
  const [pinError, setPinError] = useState("")

  // Profile editing state
  const [editFirstName, setEditFirstName] = useState("")
  const [editLastName, setEditLastName] = useState("")
  const [editEmail, setEditEmail] = useState("")
  const [editPhone, setEditPhone] = useState("")
  const [editAddress, setEditAddress] = useState("")
  const [editCity, setEditCity] = useState("")
  const [editCountry, setEditCountry] = useState("")
  const [editDateOfBirth, setEditDateOfBirth] = useState("")
  const [editOccupation, setEditOccupation] = useState("")
  const [editBio, setEditBio] = useState("")

  // Wallet balance
  const [walletBalance, setWalletBalance] = useState({
    SLL: 2500000,
    USD: 250,
  })

  // User data
  const [userData, setUserData] = useState({
    firstName: "Samuel",
    lastName: "Johnson",
    fullName: "Samuel Johnson",
    email: "samuel@example.com",
    phone: "+232 76 123 456",
    address: "15 Siaka Stevens Street, Freetown",
    city: "Freetown",
    country: "Sierra Leone",
    dateOfBirth: "1990-05-15",
    occupation: "Software Engineer",
    bio: "Passionate about technology and financial innovation.",
    avatar: "/placeholder.svg?height=80&width=80",
    memberSince: "January 2024",
    walletId: "EB-2024-8752",
    verificationStatus: "verified",
    membershipTier: "premium",
    notifications: 3,
    pinEnabled: true,
    biometricEnabled: true,
    twoFactorEnabled: false,
    recentContacts: [
      { id: 1, name: "Aminata Kamara", phone: "+232 76 234 567", avatar: "" },
      { id: 2, name: "Ibrahim Sesay", phone: "+232 77 345 678", avatar: "" },
      { id: 3, name: "Fatima Conteh", phone: "+232 78 456 789", avatar: "" },
      { id: 4, name: "Mohamed Koroma", phone: "+232 79 123 456", avatar: "" },
      { id: 5, name: "Isatu Bangura", phone: "+232 76 987 654", avatar: "" },
    ],
    cards: [
      {
        id: 1,
        type: "debit",
        name: "Eager Beaver Debit",
        number: "**** **** **** 1234",
        expiry: "12/26",
        balance: 2500000,
        currency: "SLL",
        status: "active",
        color: "gradient-to-r from-amber-500 to-orange-600"
      },
      {
        id: 2,
        type: "credit",
        name: "Eager Beaver Credit",
        number: "**** **** **** 5678",
        expiry: "08/27",
        balance: 500000,
        currency: "SLL",
        status: "active",
        color: "gradient-to-r from-purple-500 to-blue-600"
      }
    ],
    rewards: {
      points: 15420,
      level: "Gold",
      nextLevel: "Platinum",
      pointsToNext: 4580,
      cashback: 125000,
      referrals: 8
    }
  })

  // Transaction data
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      type: "sent",
      recipient: "Aminata Kamara",
      amount: 50000,
      currency: "SLL",
      date: "2024-06-03",
      time: "14:30",
      status: "completed",
      category: "friends",
      description: "Lunch money",
      fee: 500,
      reference: "TXN-001-2024",
      location: "Freetown, SL"
    },
    {
      id: 2,
      type: "received",
      sender: "Ibrahim Sesay",
      amount: 25000,
      currency: "SLL",
      date: "2024-06-02",
      time: "09:15",
      status: "completed",
      category: "business",
      description: "Payment for services",
      fee: 0,
      reference: "TXN-002-2024",
      location: "Bo, SL"
    },
    {
      id: 3,
      type: "sent",
      recipient: "Fatima Conteh",
      amount: 100,
      currency: "USD",
      date: "2024-06-01",
      time: "16:45",
      status: "pending",
      category: "shopping",
      description: "Online purchase",
      fee: 2,
      reference: "TXN-003-2024",
      location: "Online"
    },
    {
      id: 4,
      type: "received",
      sender: "Mohamed Koroma",
      amount: 75000,
      currency: "SLL",
      date: "2024-05-30",
      time: "11:20",
      status: "completed",
      category: "salary",
      description: "Monthly salary",
      fee: 0,
      reference: "TXN-004-2024",
      location: "Freetown, SL"
    },
    {
      id: 5,
      type: "sent",
      recipient: "Isatu Bangura",
      amount: 200,
      currency: "USD",
      date: "2024-05-29",
      time: "08:30",
      status: "completed",
      category: "bills",
      description: "Utility payment",
      fee: 5,
      reference: "TXN-005-2024",
      location: "Freetown, SL"
    },
  ])

  // Budget data
  const [budgetCategories, setBudgetCategories] = useState([
    { id: 1, name: "Food", allocated: 800000, spent: 450000, color: "bg-orange-500", icon: Utensils },
    { id: 2, name: "Transport", allocated: 300000, spent: 280000, color: "bg-blue-500", icon: Car },
    { id: 3, name: "Bills", allocated: 500000, spent: 350000, color: "bg-red-500", icon: Receipt },
    { id: 4, name: "Entertainment", allocated: 250000, spent: 120000, color: "bg-purple-500", icon: Gamepad2 },
    { id: 5, name: "Savings", allocated: 400000, spent: 400000, color: "bg-green-500", icon: Target },
    { id: 6, name: "Shopping", allocated: 300000, spent: 180000, color: "bg-pink-500", icon: ShoppingBag },
    { id: 7, name: "Health", allocated: 200000, spent: 95000, color: "bg-teal-500", icon: Heart },
    { id: 8, name: "Education", allocated: 150000, spent: 75000, color: "bg-indigo-500", icon: GraduationCap },
  ])

  // Savings goals
  const [savingsGoals, setSavingsGoals] = useState([
    { 
      id: 1, 
      name: "New Car", 
      target: 50000000, 
      current: 15000000, 
      currency: "SLL", 
      deadline: "2024-12-31",
      icon: Car,
      color: "bg-blue-500"
    },
    { 
      id: 2, 
      name: "Vacation", 
      target: 2000, 
      current: 750, 
      currency: "USD", 
      deadline: "2024-08-15",
      icon: Plane,
      color: "bg-green-500"
    },
    { 
      id: 3, 
      name: "Emergency Fund", 
      target: 10000000, 
      current: 3500000, 
      currency: "SLL", 
      deadline: "2025-06-30",
      icon: Shield,
      color: "bg-red-500"
    },
    { 
      id: 4, 
      name: "House Down Payment", 
      target: 100000000, 
      current: 25000000, 
      currency: "SLL", 
      deadline: "2026-12-31",
      icon: House,
      color: "bg-purple-500"
    },
  ])

  // Notifications
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "transaction",
      title: "Payment Received",
      message: "You received Le 25,000 from Ibrahim Sesay",
      time: "2 hours ago",
      read: false,
      icon: TrendingUp,
      color: "bg-green-500"
    },
    {
      id: 2,
      type: "security",
      title: "Login Alert",
      message: "New login from iPhone 14 Pro",
      time: "1 day ago",
      read: false,
      icon: Shield,
      color: "bg-blue-500"
    },
    {
      id: 3,
      type: "promotion",
      title: "Special Offer",
      message: "Get 5% cashback on all transfers this week!",
      time: "2 days ago",
      read: true,
      icon: Gift,
      color: "bg-purple-500"
    },
    {
      id: 4,
      type: "reminder",
      title: "Bill Reminder",
      message: "Your electricity bill is due tomorrow",
      time: "3 days ago",
      read: true,
      icon: Bell,
      color: "bg-orange-500"
    },
  ])

  // File input ref for avatar upload
  const fileInputRef = useRef(null)

  // Navigation history management
  const navigateTo = (screen) => {
    setPreviousScreen(currentScreen)
    setCurrentScreen(screen)
  }

  const goBack = () => {
    if (previousScreen) {
      setCurrentScreen(previousScreen)
      setPreviousScreen("")
    } else {
      setCurrentScreen("dashboard")
    }
  }

  // Handle registration
  const handleRegister = () => {
    setRegisterError("")
    setLoading(true)

    // Validation
    if (!registerFirstName || !registerLastName || !registerEmail || !registerPhone || !registerPassword) {
      setRegisterError("Please fill in all required fields")
      setLoading(false)
      return
    }

    if (registerPassword !== registerConfirmPassword) {
      setRegisterError("Passwords do not match")
      setLoading(false)
      return
    }

    if (registerPassword.length < 8) {
      setRegisterError("Password must be at least 8 characters long")
      setLoading(false)
      return
    }

    if (!acceptTerms || !acceptPrivacy) {
      setRegisterError("Please accept the terms and privacy policy")
      setLoading(false)
      return
    }

    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      setRegisterSuccess(true)
      
      // Update user data
      setUserData(prev => ({
        ...prev,
        firstName: registerFirstName,
        lastName: registerLastName,
        fullName: `${registerFirstName} ${registerLastName}`,
        email: registerEmail,
        phone: registerPhone,
      }))

      // Show success message and redirect to login
      setTimeout(() => {
        setRegisterSuccess(false)
        setIsRegistering(false)
        setCurrentScreen("login")
        
        // Show toast notification
        showToast("Account created successfully! Please log in.", "success")
      }, 2000)
    }, 2000)
  }

  // Handle login
  const handleLogin = () => {
    setLoginError("")
    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      if (loginEmail && loginPassword) {
        if (fingerprintEnabled) {
          setShowBiometricPrompt(true)
        } else {
          setShowPinPrompt(true)
        }
      } else {
        setLoginError("Please enter both email and password")
      }
    }, 1500)
  }

  // Handle biometric authentication
  const handleBiometricAuth = () => {
    setLoading(true)
    // Simulate biometric authentication
    setTimeout(() => {
      setLoading(false)
      setShowBiometricPrompt(false)
      setIsAuthenticated(true)
      setCurrentScreen("dashboard")
      
      // Show welcome notification
      showToast(`Welcome back, ${userData.firstName}!`, "success")
    }, 2000)
  }

  // Handle PIN authentication
  const handlePinAuth = () => {
    setPinError("")
    const enteredPin = pin.join("")
    
    if (enteredPin.length < 4) {
      setPinError("Please enter all 4 digits")
      return
    }
    
    setLoading(true)
    // Simulate PIN verification
    setTimeout(() => {
      setLoading(false)
      
      // For demo purposes, any 4-digit PIN works
      if (enteredPin === "1234" || enteredPin.length === 4) {
        setShowPinPrompt(false)
        setIsAuthenticated(true)
        setCurrentScreen("dashboard")
        
        // Show welcome notification
        showToast(`Welcome back, ${userData.firstName}!`, "success")
      } else {
        setPinError("Incorrect PIN. Please try again.")
        setPin(["", "", "", ""])
      }
    }, 1500)
  }

  // Handle PIN input
  const handlePinChange = (index, value) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newPin = [...pin]
      newPin[index] = value
      setPin(newPin)
      
      // Auto-focus next input
      if (value && index < 3) {
        const nextInput = document.getElementById(`pin-${index + 1}`)
        if (nextInput) nextInput.focus()
      }
    }
  }

  // Handle logout
  const handleLogout = () => {
    setIsAuthenticated(false)
    setCurrentScreen("welcome")
    setLoginEmail("")
    setLoginPassword("")
    
    showToast("Logged out successfully", "success")
  }

  // Handle send money
  const handleSendMoney = () => {
    if (!recipientName || !recipientPhone || !amount || Number.parseFloat(amount) <= 0) {
      showToast("Please fill in all fields correctly", "error")
      return
    }

    const amountValue = Number.parseFloat(amount)
    const fee = selectedCurrency === "SLL" ? 500 : 2
    const totalAmount = amountValue + fee

    if (totalAmount > walletBalance[selectedCurrency]) {
      showToast("Insufficient balance", "error")
      return
    }

    setProcessingPayment(true)

    // Simulate payment processing
    setTimeout(() => {
      setProcessingPayment(false)
      setPaymentSuccess(true)

      // Update wallet balance
      setWalletBalance(prev => ({
        ...prev,
        [selectedCurrency]: prev[selectedCurrency] - totalAmount
      }))

      // Add transaction to history
      const newTransaction = {
        id: transactions.length + 1,
        type: "sent",
        recipient: recipientName,
        amount: amountValue,
        currency: selectedCurrency,
        date: new Date().toISOString().split('T')[0],
        time: new Date().toTimeString().slice(0, 5),
        status: "completed",
        category: "friends",
        description: "Money transfer",
        fee: fee,
        reference: `TXN-${String(transactions.length + 1).padStart(3, '0')}-2024`,
        location: "Freetown, SL"
      }
      
      setTransactions([newTransaction, ...transactions])
      setLastTransactionId(newTransaction.id)

      // Reset form and show success screen
      setTimeout(() => {
        setPaymentSuccess(false)
        setShowTransferSuccess(true)
        
        // Reset form after showing success
        setTimeout(() => {
          setRecipientName("")
          setRecipientPhone("")
          setAmount("")
          setShowTransferSuccess(false)
          navigateTo("dashboard")
        }, 3000)
      }, 2000)
    }, 3000)
  }

  // Handle profile update
  const handleUpdateProfile = () => {
    setLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      
      // Update user data
      setUserData(prev => ({
        ...prev,
        firstName: editFirstName || prev.firstName,
        lastName: editLastName || prev.lastName,
        fullName: `${editFirstName || prev.firstName} ${editLastName || prev.lastName}`,
        email: editEmail || prev.email,
        phone: editPhone || prev.phone,
        address: editAddress || prev.address,
        city: editCity || prev.city,
        country: editCountry || prev.country,
        dateOfBirth: editDateOfBirth || prev.dateOfBirth,
        occupation: editOccupation || prev.occupation,
        bio: editBio || prev.bio,
      }))
      
      setShowEditProfile(false)
      showToast("Profile updated successfully!", "success")
    }, 1500)
  }

  // Handle avatar upload
  const handleAvatarUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setUserData(prev => ({
          ...prev,
          avatar: e.target.result
        }))
        setShowChangeAvatar(false)
        showToast("Profile picture updated!", "success")
      }
      reader.readAsDataURL(file)
    }
  }

  // Show toast notification
  const showToast = (message, type = "info") => {
    // This would typically integrate with a toast library
    console.log(`${type.toUpperCase()}: ${message}`)
  }

  // Handle copy to clipboard
  const handleCopyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    showToast("Copied to clipboard", "success")
  }

  // Filter transactions based on search and filter
  const filteredTransactions = transactions.filter((transaction) => {
    const matchesFilter = transactionFilter === "all" || transaction.type === transactionFilter
    const matchesSearch =
      searchQuery === "" ||
      (transaction.recipient && transaction.recipient.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (transaction.sender && transaction.sender.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (transaction.description && transaction.description.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesFilter && matchesSearch
  })

  // Apply dark mode to body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.remove('dark-mode')
    }
  }, [darkMode])

  // Initialize edit profile fields
  useEffect(() => {
    if (showEditProfile) {
      setEditFirstName(userData.firstName)
      setEditLastName(userData.lastName)
      setEditEmail(userData.email)
      setEditPhone(userData.phone)
      setEditAddress(userData.address)
      setEditCity(userData.city)
      setEditCountry(userData.country)
      setEditDateOfBirth(userData.dateOfBirth)
      setEditOccupation(userData.occupation)
      setEditBio(userData.bio)
    }
  }, [showEditProfile, userData])

  // Welcome Screen
  const WelcomeScreen = () => (
    <div className={`h-full ${darkMode ? "bg-gray-900 text-white" : "bg-gradient-to-br from-amber-50 via-orange-50 to-red-50"} flex flex-col justify-center px-8 relative overflow-hidden`}>
      {/* Abstract background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-amber-400 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-40 right-10 w-24 h-24 bg-orange-400 rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-red-400 rounded-full blur-md animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 text-center">
        {/* Logo */}
        <div className="mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-24 h-24 bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl flex items-center justify-center shadow-2xl animate-bounce">
              <Beaver className="text-white" size={48} />
            </div>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent mb-4 animate-fade-in">
            Eager Beaver
          </h1>
          <p className={`${darkMode ? "text-gray-300" : "text-gray-600"} text-xl mb-2`}>Financial Freedom</p>
          <p className={`${darkMode ? "text-gray-400" : "text-gray-500"} text-sm`}>Your trusted digital wallet for Sierra Leone</p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 gap-4 mb-12">
          <div className={`${darkMode ? "bg-gray-800" : "bg-white/80"} backdrop-blur-sm rounded-2xl p-4 shadow-lg`}>
            <Send className={`${darkMode ? "text-amber-400" : "text-amber-600"} mx-auto mb-2`} size={32} />
            <p className={`font-semibold ${darkMode ? "text-white" : "text-gray-800"}`}>Send Money</p>
            <p className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Instant transfers</p>
          </div>
          <div className={`${darkMode ? "bg-gray-800" : "bg-white/80"} backdrop-blur-sm rounded-2xl p-4 shadow-lg`}>
            <Shield className={`${darkMode ? "text-amber-400" : "text-amber-600"} mx-auto mb-2`} size={32} />
            <p className={`font-semibold ${darkMode ? "text-white" : "text-gray-800"}`}>Secure</p>
            <p className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Bank-level security</p>
          </div>
          <div className={`${darkMode ? "bg-gray-800" : "bg-white/80"} backdrop-blur-sm rounded-2xl p-4 shadow-lg`}>
            <Target className={`${darkMode ? "text-amber-400" : "text-amber-600"} mx-auto mb-2`} size={32} />
            <p className={`font-semibold ${darkMode ? "text-white" : "text-gray-800"}`}>Save Goals</p>
            <p className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Reach your dreams</p>
          </div>
          <div className={`${darkMode ? "bg-gray-800" : "bg-white/80"} backdrop-blur-sm rounded-2xl p-4 shadow-lg`}>
            <Gift className={`${darkMode ? "text-amber-400" : "text-amber-600"} mx-auto mb-2`} size={32} />
            <p className={`font-semibold ${darkMode ? "text-white" : "text-gray-800"}`}>Rewards</p>
            <p className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Earn cashback</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <Button
            onClick={() => setCurrentScreen("login")}
            className={`w-full h-14 text-lg font-semibold rounded-2xl ${
              darkMode 
                ? "bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700" 
                : "bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700"
            } shadow-lg shadow-orange-500/30 transform transition-transform hover:scale-105`}
          >
            Login to Your Account
          </Button>
          
          <Button
            onClick={() => {
              setIsRegistering(true)
              setCurrentScreen("register")
            }}
            variant="outline"
            className={`w-full h-14 text-lg font-semibold rounded-2xl border-2 ${
              darkMode 
                ? "border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-gray-900" 
                : "border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white"
            } transform transition-transform hover:scale-105`}
          >
            Create New Account
          </Button>
        </div>

        {/* Footer */}
        <div className="mt-12">
          <p className={`text-xs ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
            By continuing, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>

        {/* Dark mode toggle */}
        <div className="absolute top-6 right-6">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setDarkMode(!darkMode)}
            className={`rounded-full ${darkMode ? "text-amber-400 hover:text-amber-300 hover:bg-gray-800" : "text-gray-600 hover:text-amber-600"}`}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </Button>
        </div>
      </div>
    </div>
  )

  // Register Screen
  const RegisterScreen = () => (
    <div className={`h-full ${darkMode ? "bg-gray-900 text-white" : "bg-gradient-to-br from-white via-amber-50 to-orange-100"} p-6 overflow-y-auto`}>
      <div className="flex items-center mb-6">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setCurrentScreen("welcome")} 
          className={`mr-4 rounded-full ${darkMode ? "hover:bg-gray-800" : ""}`}
        >
          <ArrowLeft size={24} className={darkMode ? "text-white" : ""} />
        </Button>
        <h2 className={`text-2xl font-bold ${darkMode ? "text-white" : "text-gray-800"}`}>Create Account</h2>
      </div>

      {registerSuccess ? (
        <div className="flex flex-col items-center justify-center h-full">
          <div className={`w-24 h-24 rounded-full flex items-center justify-center mb-6 ${
            darkMode ? "bg-green-900/30" : "bg-green-100"
          }`}>
            <Check size={48} className="text-green-600" />
          </div>
          <h3 className={`text-2xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-800"}`}>
            Account Created!
          </h3>
          <p className={`text-center ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
            Welcome to Eager Beaver! Your account has been created successfully.
          </p>
          <div className="mt-6">
            <Loader2 className="h-8 w-8 animate-spin text-amber-500" />
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Personal Information */}
          <Card className={`rounded-2xl shadow-sm border-0 ${
            darkMode ? "bg-gray-800 border-gray-700" : "bg-white/80 backdrop-blur-sm"
          }`}>
            <CardHeader className="pb-3">
              <CardTitle className={`text-lg flex items-center ${darkMode ? "text-white" : "text-gray-800"}`}>
                <User className={`mr-2 ${darkMode ? "text-amber-400" : "text-amber-600"}`} size={20} />
                Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className={`block text-sm font-medium mb-1 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                    First Name *
                  </label>
                  <Input
                    placeholder="Samuel"
                    value={registerFirstName}
                    onChange={(e) => setRegisterFirstName(e.target.value)}
                    className={`h-12 rounded-xl ${darkMode ? "bg-gray-700 border-gray-600 text-white" : ""}`}
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-1 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                    Last Name *
                  </label>
                  <Input
                    placeholder="Johnson"
                    value={registerLastName}
                    onChange={(e) => setRegisterLastName(e.target.value)}
                    className={`h-12 rounded-xl ${darkMode ? "bg-gray-700 border-gray-600 text-white" : ""}`}
                  />
                </div>
              </div>
              
              <div>
                <label className={`block text-sm font-medium mb-1 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                  Email Address *
                </label>
                <Input
                  type="email"
                  placeholder="samuel@example.com"
                  value={registerEmail}
                  onChange={(e) => setRegisterEmail(e.target.value)}
                  className={`h-12 rounded-xl ${darkMode ? "bg-gray-700 border-gray-600 text-white" : ""}`}
                />
              </div>
              
              <div>
                <label className={`block text-sm font-medium mb-1 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                  Phone Number *
                </label>
                <div className="flex space-x-2">
                  <select 
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className={`w-20 h-12 rounded-xl border ${
                      darkMode 
                        ? "bg-gray-700 border-gray-600 text-white" 
                        : "border-gray-300"
                    }`}
                  >
                    <option value="+232">+232</option>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                  </select>
                  <Input
                    placeholder="76 123 456"
                    value={registerPhone}
                    onChange={(e) => setRegisterPhone(e.target.value)}
                    className={`flex-1 h-12 rounded-xl ${darkMode ? "bg-gray-700 border-gray-600 text-white" : ""}`}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Security */}
          <Card className={`rounded-2xl shadow-sm border-0 ${
            darkMode ? "bg-gray-800 border-gray-700" : "bg-white/80 backdrop-blur-sm"
          }`}>
            <CardHeader className="pb-3">
              <CardTitle className={`text-lg flex items-center ${darkMode ? "text-white" : "text-gray-800"}`}>
                <Lock className={`mr-2 ${darkMode ? "text-amber-400" : "text-amber-600"}`} size={20} />
                Security
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className={`block text-sm font-medium mb-1 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                  Password *
                </label>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a strong password"
                    value={registerPassword}
                    onChange={(e) => setRegisterPassword(e.target.value)}
                    className={`h-12 rounded-xl pr-12 ${darkMode ? "bg-gray-700 border-gray-600 text-white" : ""}`}
                  />
                  <button
                    onClick={() => setShowPassword(!showPassword)}
                    className={`absolute right-4 top-1/2 transform -translate-y-1/2 ${darkMode ? "text-gray-400" : "text-gray-500"}`}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
              
              <div>
                <label className={`block text-sm font-medium mb-1 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                  Confirm Password *
                </label>
                <div className="relative">
                  <Input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    value={registerConfirmPassword}
                    onChange={(e) => setRegisterConfirmPassword(e.target.value)}
                    className={`h-12 rounded-xl pr-12 ${darkMode ? "bg-gray-700 border-gray-600 text-white" : ""}`}
                  />
                  <button
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className={`absolute right-4 top-1/2 transform -translate-y-1/2 ${darkMode ? "text-gray-400" : "text-gray-500"}`}
                  >
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Terms and Conditions */}
          <Card className={`rounded-2xl shadow-sm border-0 ${
            darkMode ? "bg-gray-800 border-gray-700" : "bg-white/80 backdrop-blur-sm"
          }`}>
            <CardContent className="p-4 space-y-3">
              <div className="flex items-start space-x-3">
                <Switch 
                  checked={acceptTerms} 
                  onCheckedChange={setAcceptTerms}
                  className={darkMode ? "data-[state=checked]:bg-amber-500" : ""}
                />
                <div className="flex-1">
                  <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                    I agree to the <span className={darkMode ? "text-amber-400" : "text-amber-600"}>Terms of Service</span> and <span className={darkMode ? "text-amber-400" : "text-amber-600"}>Privacy Policy</span> *
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Switch 
                  checked={acceptPrivacy} 
                  onCheckedChange={setAcceptPrivacy}
                  className={darkMode ? "data-[state=checked]:bg-amber-500" : ""}
                />
                <div className="flex-1">
                  <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                    I consent to data processing for account management *
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Switch 
                  checked={acceptMarketing} 
                  onCheckedChange={setAcceptMarketing}
                  className={darkMode ? "data-[state=checked]:bg-amber-500" : ""}
                />
                <div className="flex-1">
                  <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                    I want to receive promotional offers and updates (optional)
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {registerError && (
            <div className="bg-red-100 text-red-700 p-3 rounded-lg flex items-center">
              <AlertCircle size={18} className="mr-2" />
              {registerError}
            </div>
          )}

          <Button
            onClick={handleRegister}
            disabled={loading || !acceptTerms || !acceptPrivacy}
            className={`w-full h-14 text-lg font-semibold rounded-2xl ${
              darkMode 
                ? "bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700" 
                : "bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700"
            } shadow-lg shadow-orange-500/30 disabled:opacity-50`}
          >
            {loading ? (
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            ) : (
              "Create Account"
            )}
          </Button>

          <div className="text-center">
            <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
              Already have an account?{" "}
              <button 
                onClick={() => {
                  setIsRegistering(false)
                  setCurrentScreen("login")
                }}
                className={`${darkMode ? "text-amber-400" : "text-amber-600"} font-semibold`}
              >
                Sign in
              </button>
            </p>
          </div>
        </div>
      )}
    </div>
  )

  // Login Screen
  const LoginScreen = () => (
    <div className={`h-full ${darkMode ? "bg-gray-900 text-white" : "bg-gradient-to-br from-white via-purple-50 to-purple-100"} flex flex-col justify-center px-8 relative overflow-hidden`}>
      {/* Abstract background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-400 rounded-full blur-xl"></div>
        <div className="absolute bottom-40 right-10 w-24 h-24 bg-green-400 rounded-full blur-lg"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-400 rounded-full blur-md"></div>
      </div>

      <div className="relative z-10">
        {/* Back button */}
        <div className="absolute top-6 left-6">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setCurrentScreen("welcome")}
            className={`rounded-full ${darkMode ? "text-amber-400 hover:text-amber-300 hover:bg-gray-800" : "text-gray-600 hover:text-amber-600"}`}
          >
            <ArrowLeft size={20} />
          </Button>
        </div>

        {/* Logo */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-3">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Beaver className="text-white" size={36} />
            </div>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent mb-2">
            Eager Beaver
          </h1>
          <p className={`${darkMode ? "text-gray-300" : "text-gray-600"} text-lg`}>Welcome back!</p>
        </div>

        {/* Login Form */}
        <div className="space-y-6">
          <div>
            <Input
              type="email"
              placeholder="Email address"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              className={`h-14 text-lg rounded-2xl border-2 ${darkMode ? "bg-gray-800 border-gray-700 text-white" : "border-purple-200 focus:border-purple-400 bg-white/80 backdrop-blur-sm"}`}
            />
          </div>

          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              className={`h-14 text-lg rounded-2xl border-2 pr-12 ${darkMode ? "bg-gray-800 border-gray-700 text-white" : "border-purple-200 focus:border-purple-400 bg-white/80 backdrop-blur-sm"}`}
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className={`absolute right-4 top-1/2 transform -translate-y-1/2 ${darkMode ? "text-gray-400" : "text-gray-500"}`}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {loginError && (
            <div className="bg-red-100 text-red-700 p-3 rounded-lg flex items-center">
              <AlertCircle size={18} className="mr-2" />
              {loginError}
            </div>
          )}

          <Button
            onClick={handleLogin}
            disabled={loading}
            className={`w-full h-14 text-lg font-semibold rounded-2xl ${
              darkMode 
                ? "bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700" 
                : "bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700"
            } shadow-lg shadow-orange-500/30`}
          >
            {loading ? (
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            ) : (
              "Login"
            )}
          </Button>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Switch 
                checked={fingerprintEnabled} 
                onCheckedChange={setFingerprintEnabled} 
                className={darkMode ? "data-[state=checked]:bg-amber-500" : ""}
              />
              <span className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>Use biometrics</span>
            </div>
            <span className={`text-sm ${darkMode ? "text-amber-400" : "text-amber-600"} font-semibold`}>Forgot Password?</span>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
            Don't have an account?{" "}
            <button 
              onClick={() => {
                setIsRegistering(true)
                setCurrentScreen("register")
              }}
              className={`${darkMode ? "text-amber-400 font-semibold" : "text-amber-600 font-semibold"}`}
            >
              Sign up
            </button>
          </p>
        </div>

        {/* Dark mode toggle */}
        <div className="absolute top-6 right-6">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setDarkMode(!darkMode)}
            className={`rounded-full ${darkMode ? "text-amber-400 hover:text-amber-300 hover:bg-gray-800" : "text-gray-600 hover:text-amber-600"}`}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </Button>
        </div>
      </div>

      {/* Biometric Authentication Modal */}
      {showBiometricPrompt && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className={`${darkMode ? "bg-gray-800" : "bg-white"} rounded-3xl p-6 w-5/6 max-w-md shadow-2xl`}>
            <div className="text-center space-y-4">
              <h3 className={`text-xl font-bold ${darkMode ? "text-white" : "text-gray-800"}`}>Biometric Authentication</h3>
              <p className={darkMode ? "text-gray-300" : "text-gray-600"}>Please verify your identity</p>
              
              <div className="py-6">
                <div className={`w-24 h-24 mx-auto rounded-full ${loading ? "animate-pulse" : ""} ${darkMode ? "bg-gray-700" : "bg-amber-100"} flex items-center justify-center`}>
                  <Fingerprint size={48} className={darkMode ? "text-amber-400" : "text-amber-600"} />
                </div>
              </div>
              
              <div className="flex space-x-3">
                <Button 
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800"
                  onClick={() => setShowBiometricPrompt(false)}
                >
                  Cancel
                </Button>
                <Button 
                  className={`flex-1 ${darkMode ? "bg-amber-500 hover:bg-amber-600" : "bg-amber-500 hover:bg-amber-600"}`}
                  onClick={handleBiometricAuth}
                  disabled={loading}
                >
                  {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Fingerprint className="mr-2" size={16} />}
                  Verify
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* PIN Authentication Modal */}
      {showPinPrompt && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className={`${darkMode ? "bg-gray-800" : "bg-white"} rounded-3xl p-6 w-5/6 max-w-md shadow-2xl`}>
            <div className="text-center space-y-4">
              <h3 className={`text-xl font-bold ${darkMode ? "text-white" : "text-gray-800"}`}>Enter PIN</h3>
              <p className={darkMode ? "text-gray-300" : "text-gray-600"}>Please enter your 4-digit PIN</p>
              
              <div className="flex justify-center space-x-3 py-6">
                {pin.map((digit, index) => (
                  <Input
                    key={index}
                    id={`pin-${index}`}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handlePinChange(index, e.target.value)}
                    className={`w-12 h-12 text-center text-xl font-bold ${
                      darkMode 
                        ? "bg-gray-700 border-gray-600 text-white" 
                        : "bg-gray-100 border-gray-200"
                    }`}
                  />
                ))}
              </div>
              
              {pinError && (
                <div className="bg-red-100 text-red-700 p-2 rounded-lg text-sm flex items-center justify-center">
                  <AlertCircle size={16} className="mr-1" />
                  {pinError}
                </div>
              )}
              
              <div className="flex space-x-3">
                <Button 
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800"
                  onClick={() => setShowPinPrompt(false)}
                >
                  Cancel
                </Button>
                <Button 
                  className={`flex-1 ${darkMode ? "bg-amber-500 hover:bg-amber-600" : "bg-amber-500 hover:bg-amber-600"}`}
                  onClick={handlePinAuth}
                  disabled={loading}
                >
                  {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Verify"}
                </Button>
              </div>
              
              <p className={`text-sm ${darkMode ? "text-amber-400" : "text-amber-600"}`}>Forgot PIN?</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )

  // Dashboard Screen
  const DashboardScreen = () => (
    <div className={`h-full ${darkMode ? "bg-gray-900 text-white" : "bg-gradient-to-br from-slate-50 to-amber-50"} relative overflow-hidden pb-20`}>
      {/* Abstract background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-40 h-40 bg-amber-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-orange-400 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-red-400 rounded-full blur-xl"></div>
        </div>
      </div>

      <div className="relative z-10 p-6 h-full flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-3">
            <Avatar className="h-12 w-12 border-2 border-amber-200">
              <AvatarImage src={userData.avatar || "/placeholder.svg"} />
              <AvatarFallback className="bg-amber-500 text-white">
                {userData.firstName.charAt(0)}{userData.lastName.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div>
              <h2 className={`text-xl font-bold ${darkMode ? "text-white" : "text-gray-800"}`}>
                Hi, {userData.firstName}!
              </h2>
              <p className={darkMode ? "text-gray-400" : "text-gray-600"}>Welcome back</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => navigateTo("notifications")}
              className={`relative rounded-full ${darkMode ? "hover:bg-gray-800" : "hover:bg-amber-100"}`}
            >
              <Bell size={22} className={darkMode ? "text-amber-400" : "text-amber-600"} />
              {userData.notifications > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center">
                  {userData.notifications}
                </span>
              )}
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => navigateTo("settings")}
              className={`rounded-full ${darkMode ? "hover:bg-gray-800" : "hover:bg-amber-100"}`}
            >
              <Settings size={22} className={darkMode ? "text-amber-400" : "text-amber-600"} />
            </Button>
          </div>
        </div>

        {/* Wallet Balance Card */}
        <Card className={`mb-6 ${
          darkMode 
            ? "bg-gradient-to-r from-amber-600 to-orange-700 text-white" 
            : "bg-gradient-to-r from-amber-500 to-orange-600 text-white"
        } shadow-xl shadow-amber-500/20 rounded-3xl border-0`}>
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-2">
              <p className="text-amber-100">Wallet Balance</p>
              <Badge className="bg-white/20 text-white border-0">
                <Wallet size={12} className="mr-1" />
                Main Wallet
              </Badge>
            </div>
            <Tabs defaultValue="SLL" className="w-full">
              <TabsList className="bg-white/10 mb-4">
                <TabsTrigger value="SLL" className="text-white data-[state=active]:bg-white/20">SLL</TabsTrigger>
                <TabsTrigger value="USD" className="text-white data-[state=active]:bg-white/20">USD</TabsTrigger>
              </TabsList>
              <TabsContent value="SLL" className="mt-0">
                <h3 className="text-3xl font-bold mb-4">Le {walletBalance.SLL.toLocaleString()}</h3>
              </TabsContent>
              <TabsContent value="USD" className="mt-0">
                <h3 className="text-3xl font-bold mb-4">${walletBalance.USD.toLocaleString()}</h3>
              </TabsContent>
            </Tabs>
            <div className="flex justify-between items-center">
              <span className="text-amber-100">Available</span>
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                <div className="w-2 h-2 bg-white/30 rounded-full"></div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-4 gap-3 mb-6">
          <Button
            onClick={() => navigateTo("send")}
            variant="outline"
            className={`flex flex-col items-center justify-center h-20 rounded-2xl border-2 ${
              darkMode 
                ? "bg-gray-800 border-gray-700 hover:bg-gray-700" 
                : "bg-white border-amber-100 hover:border-amber-300"
            }`}
          >
            <Send size={22} className={darkMode ? "text-amber-400 mb-1" : "text-amber-600 mb-1"} />
            <span className="text-xs">Send</span>
          </Button>
          <Button
            onClick={() => navigateTo("request")}
            variant="outline"
            className={`flex flex-col items-center justify-center h-20 rounded-2xl border-2 ${
              darkMode 
                ? "bg-gray-800 border-gray-700 hover:bg-gray-700" 
                : "bg-white border-amber-100 hover:border-amber-300"
            }`}
          >
            <Banknote size={22} className={darkMode ? "text-amber-400 mb-1" : "text-amber-600 mb-1"} />
            <span className="text-xs">Request</span>
          </Button>
          <Button
            onClick={() => setShowQRCode(true)}
            variant="outline"
            className={`flex flex-col items-center justify-center h-20 rounded-2xl border-2 ${
              darkMode 
                ? "bg-gray-800 border-gray-700 hover:bg-gray-700" 
                : "bg-white border-amber-100 hover:border-amber-300"
            }`}
          >
            <QrCode size={22} className={darkMode ? "text-amber-400 mb-1" : "text-amber-600 mb-1"} />
            <span className="text-xs">QR Code</span>
          </Button>
          <Button
            onClick={() => setShowQRScanner(true)}
            variant="outline"
            className={`flex flex-col items-center justify-center h-20 rounded-2xl border-2 ${
              darkMode 
                ? "bg-gray-800 border-gray-700 hover:bg-gray-700" 
                : "bg-white border-amber-100 hover:border-amber-300"
            }`}
          >
            <Scan size={22} className={darkMode ? "text-amber-400 mb-1" : "text-amber-600 mb-1"} />
            <span className="text-xs">Scan</span>
          </Button>
        </div>

        {/* Recent Transactions */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className={`font-semibold ${darkMode ? "text-white" : "text-gray-800"}`}>Recent Transactions</h3>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigateTo("history")}
              className={darkMode ? "text-amber-400 hover:text-amber-300" : "text-amber-600"}
            >
              See All
            </Button>
          </div>
          <div className="space-y-3">
            {transactions.slice(0, 3).map((transaction) => (
              <Card 
                key={transaction.id} 
                className={`rounded-2xl shadow-sm border-0 cursor-pointer transition-transform hover:scale-[1.02] ${
                  darkMode ? "bg-gray-800 border-gray-700" : "bg-white/80 backdrop-blur-sm"
                }`}
                onClick={() => {
                  setSelectedTransaction(transaction)
                  setShowTransactionDetails(true)
                }}
              >
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          transaction.type === "received" 
                            ? (darkMode ? "bg-green-900/50 text-green-400" : "bg-green-100 text-green-600") 
                            : (darkMode ? "bg-blue-900/50 text-blue-400" : "bg-blue-100 text-blue-600")
                        }`}
                      >
                        {transaction.type === "received" ? (
                          <TrendingUp size={18} />
                        ) : (
                          <TrendingDown size={18} />
                        )}
                      </div>
                      <div>
                        <p className={`font-semibold ${darkMode ? "text-white" : "text-gray-800"}`}>
                          {transaction.recipient || transaction.sender}
                        </p>
                        <p className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                          {transaction.date} • {transaction.time}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p
                        className={`font-bold ${
                          transaction.type === "received" 
                            ? "text-green-600" 
                            : "text-blue-600"
                        }`}
                      >
                        {transaction.type === "received" ? "+" : "-"}
                        {transaction.currency === "SLL" ? "Le " : "$"}
                        {transaction.amount.toLocaleString()}
                      </p>
                      <Badge 
                        variant={transaction.status === "completed" ? "default" : "secondary"} 
                        className="text-xs"
                      >
                        {transaction.status}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="mb-6">
          <h3 className={`font-semibold mb-4 ${darkMode ? "text-white" : "text-gray-800"}`}>Services</h3>
          <div className="grid grid-cols-3 gap-3">
            <Button
              onClick={() => setShowBillPayment(true)}
              variant="outline"
              className={`flex flex-col items-center justify-center h-20 rounded-2xl border-2 ${
                darkMode 
                  ? "bg-gray-800 border-gray-700 hover:bg-gray-700" 
                  : "bg-white border-amber-100 hover:border-amber-300"
              }`}
            >
              <Receipt size={20} className={darkMode ? "text-amber-400 mb-1" : "text-amber-600 mb-1"} />
              <span className="text-xs">Bills</span>
            </Button>
            <Button
              onClick={() => setShowTopUp(true)}
              variant="outline"
              className={`flex flex-col items-center justify-center h-20 rounded-2xl border-2 ${
                darkMode 
                  ? "bg-gray-800 border-gray-700 hover:bg-gray-700" 
                  : "bg-white border-amber-100 hover:border-amber-300"
              }`}
            >
              <Smartphone size={20} className={darkMode ? "text-amber-400 mb-1" : "text-amber-600 mb-1"} />
              <span className="text-xs">Top Up</span>
            </Button>
            <Button
              onClick={() => navigateTo("cards")}
              variant="outline"
              className={`flex flex-col items-center justify-center h-20 rounded-2xl border-2 ${
                darkMode 
                  ? "bg-gray-800 border-gray-700 hover:bg-gray-700" 
                  : "bg-white border-amber-100 hover:border-amber-300"
              }`}
            >
              <CreditCard size={20} className={darkMode ? "text-amber-400 mb-1" : "text-amber-600 mb-1"} />
              <span className="text-xs">Cards</span>
            </Button>
            <Button
              onClick={() => setShowInvestments(true)}
              variant="outline"
              className={`flex flex-col items-center justify-center h-20 rounded-2xl border-2 ${
                darkMode 
                  ? "bg-gray-800 border-gray-700 hover:bg-gray-700" 
                  : "bg-white border-amber-100 hover:border-amber-300"
              }`}
            >
              <TrendingUp size={20} className={darkMode ? "text-amber-400 mb-1" : "text-amber-600 mb-1"} />
              <span className="text-xs">Invest</span>
            </Button>
            <Button
              onClick={() => setShowLoans(true)}
              variant="outline"
              className={`flex flex-col items-center justify-center h-20 rounded-2xl border-2 ${
                darkMode 
                  ? "bg-gray-800 border-gray-700 hover:bg-gray-700" 
                  : "bg-white border-amber-100 hover:border-amber-300"
              }`}
            >
              <Banknote size={20} className={darkMode ? "text-amber-400 mb-1" : "text-amber-600 mb-1"} />
              <span className="text-xs">Loans</span>
            </Button>
            <Button
              onClick={() => setShowInsurance(true)}
              variant="outline"
              className={`flex flex-col items-center justify-center h-20 rounded-2xl border-2 ${
                darkMode 
                  ? "bg-gray-800 border-gray-700 hover:bg-gray-700" 
                  : "bg-white border-amber-100 hover:border-amber-300"
              }`}
            >
              <Shield size={20} className={darkMode ? "text-amber-400 mb-1" : "text-amber-600 mb-1"} />
              <span className="text-xs">Insurance</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className={`fixed bottom-0 left-0 right-0 h-16 ${
        darkMode ? "bg-gray-800 border-t border-gray-700" : "bg-white border-t border-gray-200"
      } flex justify-around items-center px-6 z-20`}>
        <Button
          variant="ghost"
          className={`flex flex-col items-center justify-center h-full ${
            currentScreen === "dashboard" 
              ? (darkMode ? "text-amber-400" : "text-amber-600") 
              : (darkMode ? "text-gray-400" : "text-gray-500")
          }`}
          onClick={() => navigateTo("dashboard")}
        >
          <Home size={20} />
          <span className="text-[10px] mt-1">Home</span>
        </Button>
        <Button
          variant="ghost"
          className={`flex flex-col items-center justify-center h-full ${
            currentScreen === "history" 
              ? (darkMode ? "text-amber-400" : "text-amber-600") 
              : (darkMode ? "text-gray-400" : "text-gray-500")
          }`}
          onClick={() => navigateTo("history")}
        >
          <History size={20} />
          <span className="text-[10px] mt-1">History</span>
        </Button>
        <div className="relative -top-5">
          <Button
            className={`h-14 w-14 rounded-full ${
              darkMode 
                ? "bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700" 
                : "bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700"
            } shadow-lg shadow-amber-500/30 flex items-center justify-center`}
            onClick={() => navigateTo("send")}
          >
            <Send size={20} />
          </Button>
        </div>
        <Button
          variant="ghost"
          className={`flex flex-col items-center justify-center h-full ${
            currentScreen === "cards" 
              ? (darkMode ? "text-amber-400" : "text-amber-600") 
              : (darkMode ? "text-gray-400" : "text-gray-500")
          }`}
          onClick={() => navigateTo("cards")}
        >
          <CreditCard size={20} />
          <span className="text-[10px] mt-1">Cards</span>
        </Button>
        <Button
          variant="ghost"
          className={`flex flex-col items-center justify-center h-full ${
            currentScreen === "profile" 
              ? (darkMode ? "text-amber-400" : "text-amber-600") 
              : (darkMode ? "text-gray-400" : "text-gray-500")
          }`}
          onClick={() => navigateTo("profile")}
        >
          <User size={20} />
          <span className="text-[10px] mt-1">Profile</span>
        </Button>
      </div>

      {/* QR Code Modal */}
      {showQRCode && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className={`${darkMode ? "bg-gray-800" : "bg-white"} rounded-3xl p-6 w-5/6 max-w-md shadow-2xl`}>
            <div className="text-center space-y-4">
              <div className="flex justify-between items-center">
                <h3 className={`text-xl font-bold ${darkMode ? "text-white" : "text-gray-800"}`}>My QR Code</h3>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setShowQRCode(false)}
                  className="rounded-full"
                >
                  <X size={20} />
                </Button>
              </div>
              
              <div className={`w-48 h-48 mx-auto rounded-2xl ${darkMode ? "bg-gray-700" : "bg-gray-100"} flex items-center justify-center`}>
                <QrCode size={120} className={darkMode ? "text-amber-400" : "text-amber-600"} />
              </div>
              
              <div className="space-y-2">
                <p className={`font-semibold ${darkMode ? "text-white" : "text-gray-800"}`}>{userData.fullName}</p>
                <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>Wallet ID: {userData.walletId}</p>
              </div>
              
              <div className="flex space-x-3">
                <Button 
                  variant="outline"
                  className="flex-1"
                  onClick={() => handleCopyToClipboard(userData.walletId)}
                >
                  <Copy size={16} className="mr-2" />
                  Copy ID
                </Button>
                <Button 
                  className={`flex-1 ${darkMode ? "bg-amber-500 hover:bg-amber-600" : "bg-amber-500 hover:bg-amber-600"}`}
                >
                  <Share size={16} className="mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* QR Scanner Modal */}
      {showQRScanner && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className={`${darkMode ? "bg-gray-800" : "bg-white"} rounded-3xl p-6 w-5/6 max-w-md shadow-2xl`}>
            <div className="text-center space-y-4">
              <div className="flex justify-between items-center">
                <h3 className={`text-xl font-bold ${darkMode ? "text-white" : "text-gray-800"}`}>Scan QR Code</h3>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setShowQRScanner(false)}
                  className="rounded-full"
                >
                  <X size={20} />
                </Button>
              </div>
              
              <div className={`w-48 h-48 mx-auto rounded-2xl ${darkMode ? "bg-gray-700" : "bg-gray-100"} flex items-center justify-center relative overflow-hidden`}>
                <Scan size={120} className={darkMode ? "text-amber-400" : "text-amber-600"} />
                <div className="absolute inset-4 border-2 border-amber-500 rounded-xl"></div>
                <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-amber-500 animate-pulse"></div>
              </div>
              
              <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                Position the QR code within the frame to scan
              </p>
              
              <Button 
                className={`w-full ${darkMode ? "bg-amber-500 hover:bg-amber-600" : "bg-amber-500 hover:bg-amber-600"}`}
                onClick={() => {
                  setShowQRScanner(false)
                  showToast("QR code scanned successfully!", "success")
                }}
              >
                <Camera size={16} className="mr-2" />
                Use Camera
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )

  // Send Money Screen
  const SendMoneyScreen = () => (
    <div className={`h-full ${darkMode ? "bg-gray-900 text-white" : "bg-gradient-to-br from-slate-50 to-green-50"} p-6 relative overflow-hidden pb-20`}>
      {/* Abstract background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-32 h-32 bg-green-400 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-blue-400 rounded-full blur-xl"></div>
      </div>

      <div className="relative z-10 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Button
            variant="ghost"
            size="icon"
            onClick={goBack}
            className={`mr-4 rounded-full ${darkMode ? "hover:bg-gray-800" : ""}`}
          >
            <ArrowLeft size={24} className={darkMode ? "text-white" : ""} />
          </Button>
          <h2 className={`text-2xl font-bold ${darkMode ? "text-white" : "text-gray-800"}`}>Send Money</h2>
        </div>

        {processingPayment ? (
          <div className="flex flex-col items-center justify-center flex-1">
            <div className={`w-24 h-24 rounded-full flex items-center justify-center mb-6 ${
              darkMode ? "bg-green-900/30" : "bg-green-100"
            }`}>
              <Loader2 size={48} className="text-green-600 animate-spin" />
            </div>
            <h3 className={`text-2xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-800"}`}>
              Processing Payment
            </h3>
            <p className={`text-center ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
              Please wait while we process your transfer...
            </p>
          </div>
        ) : paymentSuccess ? (
          <div className="flex flex-col items-center justify-center flex-1">
            <div className={`w-24 h-24 rounded-full flex items-center justify-center mb-6 ${
              darkMode ? "bg-green-900/30" : "bg-green-100"
            }`}>
              <Check size={48} className="text-green-600" />
            </div>
            <h3 className={`text-2xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-800"}`}>
              Payment Successful!
            </h3>
            <p className={`text-center ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
              Your money has been sent successfully.
            </p>
          </div>
        ) : (
          <>
            {/* Recent Contacts */}
            <div className="mb-6">
              <h3 className={`font-medium mb-3 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>Recent Contacts</h3>
              <div className="flex space-x-4 overflow-x-auto pb-2">
                {userData.recentContacts.map((contact) => (
                  <div 
                    key={contact.id} 
                    className="flex flex-col items-center space-y-2 min-w-[60px] cursor-pointer"
                    onClick={() => {
                      setRecipientName(contact.name)
                      setRecipientPhone(contact.phone.replace("+232 ", ""))
                      setCountryCode("+232")
                    }}
                  >
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className={`${
                        darkMode ? "bg-amber-700" : "bg-amber-100"
                      } ${darkMode ? "text-white" : "text-amber-800"}`}>
                        {contact.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <span className={`text-xs text-center ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                      {contact.name.split(" ")[0]}
                    </span>
                  </div>
                ))}
                <div className="flex flex-col items-center space-y-2 min-w-[60px]">
                  <div className={`h-12 w-12 rounded-full flex items-center justify-center ${
                    darkMode ? "bg-gray-800" : "bg-gray-100"
                  }`}>
                    <PlusCircle size={20} className={darkMode ? "text-amber-400" : "text-amber-600"} />
                  </div>
                  <span className={`text-xs ${darkMode ? "text-gray-300" : "text-gray-700"}`}>New</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="space-y-6 flex-1">
              {/* Recipient Info */}
              <Card className={`rounded-2xl shadow-sm border-0 ${
                darkMode ? "bg-gray-800 border-gray-700" : "bg-white/80 backdrop-blur-sm"
              }`}>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <label className={`block text-sm font-semibold mb-2 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                      Recipient Name
                    </label>
                    <Input
                      placeholder="Enter full name"
                      value={recipientName}
                      onChange={(e) => setRecipientName(e.target.value)}
                      className={`h-12 rounded-xl border-2 ${
                        darkMode 
                          ? "bg-gray-700 border-gray-600 text-white focus:border-green-400" 
                          : "border-gray-200 focus:border-green-400"
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`block text-sm font-semibold mb-2 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                      Phone Number
                    </label>
                    <div className="flex space-x-2">
                      <select 
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                        className={`w-20 h-12 rounded-xl border-2 ${
                          darkMode 
                            ? "bg-gray-700 border-gray-600 text-white" 
                            : "border-gray-200"
                        }`}
                      >
                        <option value="+232">+232</option>
                        <option value="+1">+1</option>
                        <option value="+44">+44</option>
                      </select>
                      <Input
                        placeholder="76 123 456"
                        value={recipientPhone}
                        onChange={(e) => setRecipientPhone(e.target.value)}
                        className={`flex-1 h-12 rounded-xl border-2 ${
                          darkMode 
                            ? "bg-gray-700 border-gray-600 text-white focus:border-green-400" 
                            : "border-gray-200 focus:border-green-400"
                        }`}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Amount */}
              <Card className={`rounded-2xl shadow-sm border-0 ${
                darkMode ? "bg-gray-800 border-gray-700" : "bg-white/80 backdrop-blur-sm"
              }`}>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <label className={`block text-sm font-semibold mb-2 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                      Amount
                    </label>
                    <div className="flex space-x-2">
                      <Input
                        type="number"
                        placeholder="0.00"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className={`flex-1 h-14 text-2xl font-bold rounded-xl border-2 text-center ${
                          darkMode 
                            ? "bg-gray-700 border-gray-600 text-white focus:border-green-400" 
                            : "border-gray-200 focus:border-green-400"
                        }`}
                      />
                      <select 
                        value={selectedCurrency}
                        onChange={(e) => setSelectedCurrency(e.target.value)}
                        className={`w-24 h-14 rounded-xl border-2 ${
                          darkMode 
                            ? "bg-gray-700 border-gray-600 text-white" 
                            : "border-gray-200"
                        }`}
                      >
                        <option value="SLL">SLL</option>
                        <option value="USD">USD</option>
                      </select>
                    </div>
                  </div>

                  {/* Quick Amounts */}
                  <div>
                    <label className={`block text-sm font-semibold mb-2 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                      Quick Amounts
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {selectedCurrency === "SLL" 
                        ? [10000, 25000, 50000].map((quickAmount) => (
                            <Button
                              key={quickAmount}
                              variant="outline"
                              onClick={() => setAmount(quickAmount.toString())}
                              className={`h-10 rounded-xl border-2 text-sm ${
                                darkMode 
                                  ? "border-gray-600 hover:border-green-400 hover:bg-green-900/20" 
                                  : "border-green-200 hover:border-green-400 hover:bg-green-50"
                              }`}
                            >
                              Le {quickAmount.toLocaleString()}
                            </Button>
                          ))
                        : [10, 25, 50].map((quickAmount) => (
                            <Button
                              key={quickAmount}
                              variant="outline"
                              onClick={() => setAmount(quickAmount.toString())}
                              className={`h-10 rounded-xl border-2 text-sm ${
                                darkMode 
                                  ? "border-gray-600 hover:border-green-400 hover:bg-green-900/20" 
                                  : "border-green-200 hover:border-green-400 hover:bg-green-50"
                              }`}
                            >
                              ${quickAmount}
                            </Button>
                          ))
                      }
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Transaction Fee */}
              {amount && (
                <Card className={`rounded-2xl shadow-sm border-0 ${
                  darkMode ? "bg-blue-900/20" : "bg-blue-50/50"
                }`}>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center text-sm">
                      <span className={darkMode ? "text-gray-300" : "text-gray-600"}>Transaction Fee</span>
                      <span className={`font-semibold ${darkMode ? "text-blue-400" : "text-blue-600"}`}>
                        {selectedCurrency === "SLL" ? "Le 500" : "$2"}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm mt-2">
                      <span className={`font-semibold ${darkMode ? "text-white" : "text-gray-800"}`}>Total Amount</span>
                      <span className={`font-bold text-lg ${darkMode ? "text-white" : "text-gray-800"}`}>
                        {selectedCurrency === "SLL" 
                          ? `Le ${(Number.parseFloat(amount || "0") + 500).toLocaleString()}`
                          : `$${(Number.parseFloat(amount || "0") + 2).toLocaleString()}`
                        }
                      </span>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Send Button */}
            <Button 
              onClick={handleSendMoney}
              disabled={!recipientName || !recipientPhone || !amount || Number.parseFloat(amount) <= 0}
              className={`w-full h-16 text-xl font-bold rounded-2xl mt-6 ${
                darkMode 
                  ? "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700" 
                  : "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
              } shadow-lg shadow-green-500/30 disabled:opacity-50`}
            >
              <Send className="mr-3" size={24} />
              Send Money
            </Button>
          </>
        )}
      </div>
    </div>
  )

  // Transfer Success Screen
  const TransferSuccessScreen = () => (
    <div className={`h-full ${darkMode ? "bg-gray-900 text-white" : "bg-gradient-to-br from-green-50 to-blue-50"} flex flex-col items-center justify-center p-6`}>
      <div className="text-center space-y-6">
        {/* Success Animation */}
        <div className={`w-32 h-32 rounded-full flex items-center justify-center mb-8 ${
          darkMode ? "bg-green-900/30" : "bg-green-100"
        } animate-bounce`}>
          <Check size={64} className="text-green-600" />
        </div>

        <div className="space-y-4">
          <h2 className={`text-3xl font-bold ${darkMode ? "text-white" : "text-gray-800"}`}>
            Transfer Successful!
          </h2>
          <p className={`text-lg ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
            Your money has been sent successfully
          </p>
        </div>

        {/* Transaction Details */}
        {lastTransactionId && (
          <Card className={`rounded-2xl shadow-lg border-0 ${
            darkMode ? "bg-gray-800 border-gray-700" : "bg-white/80 backdrop-blur-sm"
          }`}>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className={darkMode ? "text-gray-400" : "text-gray-600"}>To</span>
                  <span className={`font-semibold ${darkMode ? "text-white" : "text-gray-800"}`}>
                    {recipientName}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={darkMode ? "text-gray-400" : "text-gray-600"}>Amount</span>
                  <span className={`font-bold text-lg ${darkMode ? "text-green-400" : "text-green-600"}`}>
                    {selectedCurrency === "SLL" ? "Le " : "$"}
                    {Number.parseFloat(amount).toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={darkMode ? "text-gray-400" : "text-gray-600"}>Reference</span>
                  <span className={`font-mono text-sm ${darkMode ? "text-amber-400" : "text-amber-600"}`}>
                    TXN-{String(lastTransactionId).padStart(3, '0')}-2024
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={darkMode ? "text-gray-400" : "text-gray-600"}>Date & Time</span>
                  <span className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                    {new Date().toLocaleDateString()} • {new Date().toTimeString().slice(0, 5)}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Action Buttons */}
        <div className="space-y-3 w-full">
          <Button
            onClick={() => {
              if (lastTransactionId) {
                const transaction = transactions.find(t => t.id === lastTransactionId)
                if (transaction) {
                  setSelectedTransaction(transaction)
                  setShowTransactionDetails(true)
                }
              }
            }}
            variant="outline"
            className={`w-full h-12 rounded-xl ${
              darkMode 
                ? "border-gray-600 hover:bg-gray-800" 
                : "border-gray-300 hover:bg-gray-50"
            }`}
          >
            <Receipt className="mr-2" size={18} />
            View Receipt
          </Button>
          
          <Button
            onClick={() => {
              setRecipientName("")
              setRecipientPhone("")
              setAmount("")
              navigateTo("send")
            }}
            variant="outline"
            className={`w-full h-12 rounded-xl ${
              darkMode 
                ? "border-gray-600 hover:bg-gray-800" 
                : "border-gray-300 hover:bg-gray-50"
            }`}
          >
            <RefreshCw className="mr-2" size={18} />
            Send Again
          </Button>
          
          <Button
            onClick={() => navigateTo("dashboard")}
            className={`w-full h-12 rounded-xl ${
              darkMode 
                ? "bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700" 
                : "bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700"
            }`}
          >
            <Home className="mr-2" size={18} />
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  )

  // Profile Screen
  const ProfileScreen = () => (
    <div className={`h-full ${darkMode ? "bg-gray-900 text-white" : "bg-gradient-to-br from-slate-50 to-purple-50"} p-6 pb-20`}>
      <div className="flex items-center justify-between mb-8">
        <h2 className={`text-2xl font-bold ${darkMode ? "text-white" : "text-gray-800"}`}>Profile</h2>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => navigateTo("settings")} 
          className={`rounded-full ${darkMode ? "hover:bg-gray-800" : ""}`}
        >
          <Settings size={24} className={darkMode ? "text-amber-400" : "text-amber-600"} />
        </Button>
      </div>

      <div className="space-y-6">
        {/* Profile Card */}
        <Card className={`rounded-3xl shadow-lg border-0 ${
          darkMode 
            ? "bg-gradient-to-r from-amber-600 to-orange-700 text-white" 
            : "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
        }`}>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4 mb-6">
              <div className="relative">
                <Avatar className="w-20 h-20 border-4 border-white/20">
                  <AvatarImage src={userData.avatar || "/placeholder.svg"} />
                  <AvatarFallback className="bg-white/20 text-white text-2xl font-bold">
                    {userData.firstName.charAt(0)}{userData.lastName.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <Button
                  size="icon"
                  onClick={() => setShowChangeAvatar(true)}
                  className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-white text-purple-600 hover:bg-gray-100"
                >
                  <Camera size={16} />
                </Button>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold">{userData.fullName}</h3>
                <p className="text-purple-100">{userData.phone}</p>
                <p className="text-purple-100">{userData.email}</p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <Badge className="bg-white/20 text-white border-white/30 px-3 py-1 flex items-center">
                <Crown className="mr-1" size={14} />
                {userData.membershipTier === "premium" ? "Premium Member" : "Basic Member"}
              </Badge>
              <Button 
                variant="outline" 
                onClick={() => setShowEditProfile(true)}
                className="border-white/30 text-white hover:bg-white/10"
              >
                <Edit3 className="mr-2" size={16} />
                Edit Profile
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Account Info */}
        <Card className={`rounded-2xl shadow-sm border-0 ${
          darkMode ? "bg-gray-800 border-gray-700" : "bg-white/80 backdrop-blur-sm"
        }`}>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className={darkMode ? "text-gray-400" : "text-gray-600"}>Wallet ID</span>
                <div className="flex items-center space-x-2">
                  <span className={`font-mono text-sm px-3 py-1 rounded-lg ${
                    darkMode ? "bg-gray-700 text-white" : "bg-gray-100"
                  }`}>
                    {userData.walletId}
                  </span>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => handleCopyToClipboard(userData.walletId)}
                    className="h-8 w-8"
                  >
                    <Copy size={16} />
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className={darkMode ? "text-gray-400" : "text-gray-600"}>Member Since</span>
                <span className={`font-semibold ${darkMode ? "text-white" : "text-gray-800"}`}>
                  {userData.memberSince}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className={darkMode ? "text-gray-400" : "text-gray-600"}>Verification Status</span>
                <Badge className={`${
                  userData.verificationStatus === "verified" 
                    ? "bg-green-100 text-green-700" 
                    : "bg-yellow-100 text-yellow-700"
                }`}>
                  {userData.verificationStatus === "verified" ? "Verified" : "Pending"}
                </Badge>
              </div>

              <div className="flex items-center justify-between">
                <span className={darkMode ? "text-gray-400" : "text-gray-600"}>Location</span>
                <span className={`font-semibold ${darkMode ? "text-white" : "text-gray-800"}`}>
                  {userData.city}, {userData.country}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Rewards Card */}
        <Card className={`rounded-2xl shadow-sm border-0 ${
          darkMode ? "bg-gray-800 border-gray-700" : "bg-white/80 backdrop-blur-sm"
        }`}>
          <CardHeader>
            <CardTitle className={`flex items-center ${darkMode ? "text-white" : "text-gray-800"}`}>
              <Gift className={`mr-2 ${darkMode ? "text-amber-400" : "text-amber-600"}`} size={20} />
              Rewards & Benefits
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <p className={`text-2xl font-bold ${darkMode ? "text-amber-400" : "text-amber-600"}`}>
                  {userData.rewards.points.toLocaleString()}
                </p>
                <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Reward Points</p>
              </div>
              <div className="text-center">
                <p className={`text-2xl font-bold ${darkMode ? "text-green-400" : "text-green-600"}`}>
                  Le {userData.rewards.cashback.toLocaleString()}
                </p>
                <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Cashback Earned</p>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className={darkMode ? "text-gray-400" : "text-gray-600"}>
                  Current Level: {userData.rewards.level}
