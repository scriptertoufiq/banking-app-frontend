function BellIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2a5 5 0 0 0-5 5v2.2c0 .9-.3 1.7-.8 2.4L4.4 13.3A2 2 0 0 0 6.1 16h11.8a2 2 0 0 0 1.7-2.7l-1.8-1.7c-.5-.7-.8-1.5-.8-2.4V7a5 5 0 0 0-5-5Zm0 20a2.5 2.5 0 0 0 2.4-2H9.6A2.5 2.5 0 0 0 12 22Z" />
    </svg>
  )
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 12a4.5 4.5 0 1 0-4.5-4.5A4.5 4.5 0 0 0 12 12Zm0 2c-4.2 0-7.5 2.3-7.5 5.2V22h15v-2.8c0-2.9-3.3-5.2-7.5-5.2Z" />
    </svg>
  )
}

function ScheduleStatementTopbar() {
  return (
    <header className="schedule-topbar">
      <div className="schedule-topbar__links">
        <span className="schedule-topbar__brand">The Private Bank</span>
        <nav aria-label="Primary tabs" className="schedule-topbar__tabs">
          <button type="button" className="schedule-topbar__tab">Portfolio</button>
          <button type="button" className="schedule-topbar__tab">Insights</button>
          <button type="button" className="schedule-topbar__tab">Concierge</button>
        </nav>
      </div>

      <div className="schedule-topbar__actions">
        <button type="button" className="schedule-topbar__icon" aria-label="Notifications">
          <BellIcon />
        </button>
        <button type="button" className="schedule-topbar__icon" aria-label="Profile">
          <UserIcon />
        </button>
      </div>
    </header>
  )
}

export default ScheduleStatementTopbar
