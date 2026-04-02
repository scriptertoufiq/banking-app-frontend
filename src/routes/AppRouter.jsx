import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import LoginMfaPage from '../pages/LoginMfaPage'
import RegisterPage from '../pages/RegisterPage'

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Navigate to="/login/mfa" replace />} />
        <Route path="/login/mfa" element={<LoginMfaPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<Navigate to="/login/mfa" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
