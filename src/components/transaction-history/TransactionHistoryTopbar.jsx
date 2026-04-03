function BellIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2a5 5 0 0 0-5 5v2.2c0 .9-.3 1.7-.8 2.4L4.4 13.3A2 2 0 0 0 6.1 16h11.8a2 2 0 0 0 1.7-2.7l-1.8-1.7c-.5-.7-.8-1.5-.8-2.4V7a5 5 0 0 0-5-5Zm0 20a2.5 2.5 0 0 0 2.4-2H9.6A2.5 2.5 0 0 0 12 22Z" />
    </svg>
  )
}

function SettingsIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19.4 13a7.8 7.8 0 0 0 0-2l2-1.5-1.9-3.3-2.4.8a7.6 7.6 0 0 0-1.7-1L15 3h-4l-.4 2.1c-.6.2-1.1.5-1.7 1l-2.4-.8-1.9 3.3 2 1.5a7.8 7.8 0 0 0 0 2l-2 1.5 1.9 3.3 2.4-.8c.5.4 1.1.7 1.7 1L11 21h4l.4-2.1c.6-.2 1.1-.5 1.7-1l2.4.8 1.9-3.3-2-1.5ZM13 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
    </svg>
  )
}

function AvatarIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 12a4.5 4.5 0 1 0-4.5-4.5A4.5 4.5 0 0 0 12 12Zm0 2c-4.2 0-7.5 2.3-7.5 5.2V22h15v-2.8c0-2.9-3.3-5.2-7.5-5.2Z" />
    </svg>
  )
}

function TransactionHistoryTopbar() {
  return (
    <header className="th-topbar">
      <div className="th-topbar__left">
        <span className="th-topbar__brand">Private Vault</span>
        <nav className="th-topbar__tabs" aria-label="Primary navigation">
          <button type="button" className="th-topbar__tab">Portfolio</button>
          <button type="button" className="th-topbar__tab">Payments</button>
          <button type="button" className="th-topbar__tab th-topbar__tab--active">History</button>
          <button type="button" className="th-topbar__tab">Support</button>
        </nav>
      </div>

      <div className="th-topbar__right">
        <div className="th-topbar__search">Search merchant or reference</div>
        <button type="button" className="th-topbar__icon" aria-label="Notifications">
          <BellIcon />
        </button>
        <button type="button" className="th-topbar__icon" aria-label="Settings">
          <SettingsIcon />
        </button>
        <button type="button" className="th-topbar__avatar" aria-label="Profile">
          <AvatarIcon />
        </button>
      </div>
    </header>
  )
}

export default TransactionHistoryTopbar
