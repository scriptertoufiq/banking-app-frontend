import { useState } from 'react'

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
      <path d="M12 2a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5Zm-3 8V7a3 3 0 1 1 6 0v3H9Z" />
    </svg>
  )
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
      <path d="M12 12a4.5 4.5 0 1 0-4.5-4.5A4.5 4.5 0 0 0 12 12Zm0 2c-4.2 0-7.5 2.3-7.5 5.2V22h15v-2.8c0-2.9-3.3-5.2-7.5-5.2Z" />
    </svg>
  )
}

function KeyIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
      <path d="M8 10a4 4 0 1 0 3.9 5h2.6l1.5-1.5H18l1.5-1.5H22V9h-3.7l-1.5 1.5h-2.9A4 4 0 0 0 8 10Zm0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z" />
    </svg>
  )
}

function EyeIcon({ visible }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon icon--eye">
      {visible ? (
        <path d="M12 5c4.9 0 8.7 3.1 10 7-1.3 3.9-5.1 7-10 7S3.3 15.9 2 12C3.3 8.1 7.1 5 12 5Zm0 2.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z" />
      ) : (
        <path d="m4 4 16 16-1.4 1.4-3.1-3.1A12 12 0 0 1 12 19c-4.9 0-8.7-3.1-10-7a11.8 11.8 0 0 1 4.2-5.4L2.6 5.4 4 4Zm8 3.5a4.5 4.5 0 0 1 4.5 4.5c0 .7-.2 1.4-.5 2l-6-6c.6-.3 1.3-.5 2-.5Zm8.1 4.5a11.8 11.8 0 0 1-2.8 4.2l-1.4-1.4a9.3 9.3 0 0 0 2.2-2.8c-1.3-3.9-5.1-7-10-7-.8 0-1.6.1-2.4.3L4 3.8A12.7 12.7 0 0 1 12 3c4.9 0 8.7 3.1 10 7Z" />
      )}
    </svg>
  )
}

function LoginCard() {
  const [isBiometricOn, setIsBiometricOn] = useState(true)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  return (
    <section className="auth-card" aria-label="Secure login">
      <div className="auth-card__secure-tag">
        <LockIcon />
        <span>END-TO-END ENCRYPTED SESSION</span>
      </div>

      <div className="auth-card__panel">
        <h1>Welcome Back</h1>
        <p>Access your global wealth portfolio</p>

        <form className="auth-form" onSubmit={(event) => event.preventDefault()}>
          <label htmlFor="account">ACCOUNT IDENTIFIER</label>
          <div className="field">
            <UserIcon />
            <input
              id="account"
              name="account"
              type="text"
              placeholder="Enter account number"
              autoComplete="username"
            />
          </div>

          <div className="field-head">
            <label htmlFor="password">SECURITY CREDENTIALS</label>
            <button type="button" className="field-link">
              Forgot Key?
            </button>
          </div>
          <div className="field">
            <KeyIcon />
            <input
              id="password"
              name="password"
              type={isPasswordVisible ? 'text' : 'password'}
              placeholder="••••••••••••"
              autoComplete="current-password"
            />
            <button
              type="button"
              className="eye-button"
              onClick={() => setIsPasswordVisible((value) => !value)}
              aria-label={isPasswordVisible ? 'Hide password' : 'Show password'}
            >
              <EyeIcon visible={isPasswordVisible} />
            </button>
          </div>

          <button
            type="button"
            className="biometric"
            onClick={() => setIsBiometricOn((value) => !value)}
          >
            <span
              className={`biometric__toggle ${
                isBiometricOn ? 'biometric__toggle--on' : ''
              }`}
              aria-hidden="true"
            />
            <span className="biometric__text-wrap">
              <span className="biometric__title">Biometric Multi-Factor</span>
              <span className="biometric__text">
                Request fingerprint/face ID on primary device
              </span>
            </span>
          </button>

          <button type="submit" className="submit-button">
            Secure Sign In
            <span aria-hidden="true">→</span>
          </button>
        </form>

        <div className="auth-card__divider" />

        <p className="auth-card__signup">
          New to Private Banking? <a href="#">Create Account</a>
        </p>
      </div>
    </section>
  )
}

export default LoginCard
