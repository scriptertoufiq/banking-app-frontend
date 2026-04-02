import MfaHeader from '../components/layout/MfaHeader'
import MfaFooter from '../components/layout/MfaFooter'
import MfaHero from '../components/auth/MfaHero'
import MfaCard from '../components/auth/MfaCard'

function LoginMfaPage() {
  return (
    <div className="mfa-page">
      <MfaHeader />

      <main className="mfa-main">
        <MfaHero />

        <section className="mfa-right-shell" aria-label="MFA verification panel">
          <MfaCard />
          <p className="mfa-switch-account">
            Not your account? <a href="#">Sign in as a different user</a>
          </p>
        </section>
      </main>

      <MfaFooter />
    </div>
  )
}

export default LoginMfaPage
