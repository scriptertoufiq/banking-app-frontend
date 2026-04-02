function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2 4 5v6c0 5.2 3.5 9.9 8 11 4.5-1.1 8-5.8 8-11V5l-8-3Z" />
    </svg>
  )
}

function RegisterHeader() {
  return (
    <header className="register-header">
      <span className="register-header__brand">ThePrivateBank</span>
      <span className="register-header__meta">
        SECURE ENROLLMENT
        <ShieldIcon />
      </span>
    </header>
  )
}

export default RegisterHeader
