function HelpIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm.2 15.5h-1.5V16h1.5Zm1.8-6.3-.7.7a2.2 2.2 0 0 0-.8 1.8h-1.5v-.4a2.9 2.9 0 0 1 .9-2.2l1-1a1.6 1.6 0 0 0 .5-1.2 1.7 1.7 0 0 0-3.4.1H8.5a3.2 3.2 0 0 1 6.4-.1 2.8 2.8 0 0 1-1 2.4Z" />
    </svg>
  )
}

function ForgotPasswordHeader() {
  return (
    <header className="forgot-password-header">
      <span className="forgot-password-header__brand">The Private Bank</span>
      <button type="button" className="forgot-password-header__help" aria-label="Help center">
        <HelpIcon />
      </button>
    </header>
  )
}

export default ForgotPasswordHeader
