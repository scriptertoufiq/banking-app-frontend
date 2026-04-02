import LoginCard from '../components/auth/LoginCard'
import ComplianceStrip from '../components/layout/ComplianceStrip'
import BottomBar from '../components/layout/BottomBar'
import TopBar from '../components/layout/TopBar'

function LoginPage() {
  return (
    <div className="login-page">
      <TopBar />
      <main className="login-main">
        <LoginCard />
        <ComplianceStrip />
      </main>
      <BottomBar />
    </div>
  )
}

export default LoginPage
