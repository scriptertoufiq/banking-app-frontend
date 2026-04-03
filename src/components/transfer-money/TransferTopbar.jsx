import { NavLink } from 'react-router-dom'
import { primaryTabs } from '../../navigation'

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

function TransferTopbar() {
  return (
    <header className="transfer-topbar">
      <div className="transfer-topbar__nav">
        <span className="transfer-topbar__brand">The Private Bank</span>
        <nav className="transfer-topbar__tabs" aria-label="Primary sections">
          {primaryTabs.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                isActive
                  ? 'transfer-topbar__tab transfer-topbar__tab--active'
                  : 'transfer-topbar__tab'
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="transfer-topbar__actions">
        <div className="transfer-topbar__search">Search accounts...</div>
        <button type="button" className="transfer-topbar__icon" aria-label="Notifications">
          <BellIcon />
        </button>
        <button type="button" className="transfer-topbar__icon" aria-label="Settings">
          <SettingsIcon />
        </button>
        <button type="button" className="transfer-topbar__avatar" aria-label="Profile">
          <AvatarIcon />
        </button>
      </div>
    </header>
  )
}

export default TransferTopbar
