import ForgotPasswordHeader from '../components/forgot-password/ForgotPasswordHeader'
import ForgotPasswordCard from '../components/forgot-password/ForgotPasswordCard'
import ForgotPasswordFooter from '../components/forgot-password/ForgotPasswordFooter'

function ForgotPasswordPage() {
  return (
    <div className="forgot-password-page">
      <ForgotPasswordHeader />

      <main className="forgot-password-main">
        <ForgotPasswordCard />
        <p className="forgot-password-encryption">
          <span aria-hidden="true">🔒</span>
          SECURE END-TO-END ENCRYPTION
        </p>
      </main>

      <ForgotPasswordFooter />
    </div>
  )
}

export default ForgotPasswordPage
