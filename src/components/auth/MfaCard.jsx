import MfaOtpInput from './MfaOtpInput'

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5Zm-3 8V7a3 3 0 1 1 6 0v3H9Z" />
    </svg>
  )
}

function MfaCard() {
  return (
    <section className="mfa-card" aria-label="Verification required">
      <h2>Verification Required</h2>
      <p>
        We&apos;ve sent a 6-digit secure code to your registered authenticator app.
      </p>

      <MfaOtpInput />

      <button type="button" className="mfa-card__submit">
        Verify &amp; Access Vault <span aria-hidden="true">→</span>
      </button>

      <button type="button" className="mfa-card__resend">
        Resend code via SMS
      </button>

      <div className="mfa-card__divider" />

      <div className="mfa-card__session">
        <span className="mfa-card__session-logo" aria-hidden="true">
          RSA
        </span>
        <span className="mfa-card__session-text">
          <LockIcon />
          <span>256-BIT ENCRYPTED SESSION</span>
        </span>
      </div>
    </section>
  )
}

export default MfaCard
