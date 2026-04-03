import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import DashboardPage from '../pages/DashboardPage'
import ForgotPasswordPage from '../pages/ForgotPasswordPage'
import LoginMfaPage from '../pages/LoginMfaPage'
import RegisterPage from '../pages/RegisterPage'
import TransactionHistoryPage from '../pages/TransactionHistoryPage'
import TransferMoneyPage from '../pages/TransferMoneyPage'

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Navigate to="/login/mfa" replace />} />
        <Route path="/login/mfa" element={<LoginMfaPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/transfer-money" element={<TransferMoneyPage />} />
        <Route path="/transfers" element={<TransferMoneyPage />} />
        <Route path="/transaction-history" element={<TransactionHistoryPage />} />
        <Route path="/transection-history" element={<TransactionHistoryPage />} />
        <Route path="*" element={<Navigate to="/login/mfa" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
