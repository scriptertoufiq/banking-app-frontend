import RegisterHeader from '../components/register/RegisterHeader'
import RegisterProgress from '../components/register/RegisterProgress'
import RegisterFormCard from '../components/register/RegisterFormCard'
import RegisterInfoPanel from '../components/register/RegisterInfoPanel'
import RegisterDisclaimer from '../components/register/RegisterDisclaimer'

function RegisterPage() {
  return (
    <div className="register-page">
      <RegisterHeader />

      <main className="register-main">
        <RegisterProgress />

        <section className="register-content" aria-label="Identity foundation registration form">
          <RegisterFormCard />
          <RegisterInfoPanel />
        </section>

        <RegisterDisclaimer />
      </main>
    </div>
  )
}

export default RegisterPage
