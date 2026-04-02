const navItems = [
  { label: 'Accounts', active: true },
  { label: 'Transfers' },
  { label: 'Beneficiaries' },
  { label: 'Investments' },
  { label: 'Security' },
]

function DashboardSidebar() {
  return (
    <aside className="dashboard-sidebar">
      <div>
        <div className="dashboard-sidebar__brand">
          <span className="dashboard-sidebar__logo">🏦</span>
          <div>
            <strong>Private Wealth</strong>
            <p>ELITE TIER</p>
          </div>
        </div>

        <nav className="dashboard-sidebar__nav" aria-label="Primary dashboard navigation">
          {navItems.map((item) => (
            <button
              key={item.label}
              type="button"
              className={
                item.active
                  ? 'dashboard-sidebar__nav-item dashboard-sidebar__nav-item--active'
                  : 'dashboard-sidebar__nav-item'
              }
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="dashboard-sidebar__bottom">
        <button type="button" className="dashboard-sidebar__quick-transfer">
          + Quick Transfer
        </button>

        <button type="button" className="dashboard-sidebar__link">
          Support
        </button>
        <button type="button" className="dashboard-sidebar__link dashboard-sidebar__link--danger">
          Sign Out
        </button>
      </div>
    </aside>
  )
}

export default DashboardSidebar
