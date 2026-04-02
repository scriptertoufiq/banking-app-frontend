import { Link } from 'react-router-dom'

function ForgotPasswordCard() {
  return (
    <section className="forgot-password-card" aria-label="Identify your account">
      <div className="forgot-password-card__steps" aria-hidden="true">
        <span className="forgot-password-card__step forgot-password-card__step--active" />
        <span className="forgot-password-card__step" />
        <span className="forgot-password-card__step" />
      </div>

      <h1>Identify Your Account</h1>
      <p>Step 1 of 3: Enter your details to begin the secure verification process.</p>

      <form
        className="forgot-password-form"
        onSubmit={(event) => {
          event.preventDefault()
        }}
      >
        <label htmlFor="forgot-email">EMAIL OR USERNAME</label>
        <input
          id="forgot-email"
          type="text"
          placeholder="e.g. james.wilson@private.bank"
          autoComplete="username"
        />

        <button type="submit" className="forgot-password-form__submit">
          Continue <span aria-hidden="true">→</span>
        </button>
      </form>

      <Link to="/login/mfa" className="forgot-password-card__back">
        ← Back to login
      </Link>
    </section>
  )
}

export default ForgotPasswordCard
