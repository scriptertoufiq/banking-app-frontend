import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import LoginMfaPage from '../pages/LoginMfaPage'

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Navigate to="/login/mfa" replace />} />
        <Route path="/login/mfa" element={<LoginMfaPage />} />
        <Route path="*" element={<Navigate to="/login/mfa" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
