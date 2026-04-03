const navItems = [
  { label: 'Wealth Overview' },
  { label: 'Checking Account' },
  { label: 'Savings & Deposits' },
  { label: 'Investment Portfolio' },
  { label: 'Credit Lines' },
]

function ScheduleStatementSidebar() {
  return (
    <aside className="schedule-sidebar">
      <div>
        <div className="schedule-sidebar__brand">
          <span className="schedule-sidebar__logo">G</span>
          <div>
            <strong>Global Private Wealth</strong>
            <p>Premium Tier</p>
          </div>
        </div>

        <nav className="schedule-sidebar__nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <button key={item.label} type="button" className="schedule-sidebar__nav-item">
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="schedule-sidebar__bottom">
        <button type="button" className="schedule-sidebar__link">
          Settings
        </button>
        <button type="button" className="schedule-sidebar__link">
          Support
        </button>
        <button type="button" className="schedule-sidebar__advisor">
          Contact Advisor
        </button>
      </div>
    </aside>
  )
}

export default ScheduleStatementSidebar
