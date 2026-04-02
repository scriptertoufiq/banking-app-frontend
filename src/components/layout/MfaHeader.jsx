function HelpIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm.2 15.5h-1.5V16h1.5Zm1.8-6.3-.7.7a2.2 2.2 0 0 0-.8 1.8h-1.5v-.4a2.9 2.9 0 0 1 .9-2.2l1-1a1.6 1.6 0 0 0 .5-1.2 1.7 1.7 0 0 0-3.4.1H8.5a3.2 3.2 0 0 1 6.4-.1 2.8 2.8 0 0 1-1 2.4Z" />
    </svg>
  )
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm6.9 9h-3A16.4 16.4 0 0 0 14.7 5a8.1 8.1 0 0 1 4.2 6ZM12 4.1A14.4 14.4 0 0 1 14 11h-4a14.4 14.4 0 0 1 2-6.9ZM4.9 13h3A16.4 16.4 0 0 0 9.3 19a8.1 8.1 0 0 1-4.2-6Zm3-2h-3a8.1 8.1 0 0 1 4.2-6A16.4 16.4 0 0 0 7.9 11Zm4.1 8.9A14.4 14.4 0 0 1 10 13h4a14.4 14.4 0 0 1-2 6.9Zm2.7-.9A16.4 16.4 0 0 0 16.1 13h3a8.1 8.1 0 0 1-4.4 6Z" />
    </svg>
  )
}

function MfaHeader() {
  return (
    <header className="mfa-header">
      <span className="mfa-header__brand">EQUITAS MODERN FINANCE</span>

      <div className="mfa-header__actions">
        <a href="#" className="mfa-header__action">
          <HelpIcon />
          <span>Support</span>
        </a>
        <button type="button" className="mfa-header__action" aria-label="Change language">
          <GlobeIcon />
          <span>EN</span>
        </button>
      </div>
    </header>
  )
}

export default MfaHeader
