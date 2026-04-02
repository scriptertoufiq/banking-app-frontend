function DashboardTopbar() {
  return (
    <header className="dashboard-topbar">
      <div className="dashboard-topbar__left">
        <span className="dashboard-topbar__brand">ThePrivateBank</span>
        <nav aria-label="Dashboard tabs" className="dashboard-topbar__tabs">
          <button type="button" className="dashboard-topbar__tab dashboard-topbar__tab--active">
            Portfolio
          </button>
          <button type="button" className="dashboard-topbar__tab">Insights</button>
          <button type="button" className="dashboard-topbar__tab">Concierge</button>
        </nav>
      </div>

      <div className="dashboard-topbar__right">
        <div className="dashboard-topbar__search">Search accounts...</div>
        <button type="button" aria-label="Notifications" className="dashboard-topbar__icon">🔔</button>
        <button type="button" aria-label="Settings" className="dashboard-topbar__icon">⚙️</button>
        <button type="button" aria-label="Profile" className="dashboard-topbar__avatar">🧑🏽</button>
      </div>
    </header>
  )
}

export default DashboardTopbar
