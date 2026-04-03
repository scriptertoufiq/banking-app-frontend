import { NavLink } from 'react-router-dom'
import { primaryTabs } from '../../navigation'

function DashboardTopbar() {
  return (
    <header className="dashboard-topbar">
      <div className="dashboard-topbar__left">
        <span className="dashboard-topbar__brand">ThePrivateBank</span>
        <nav aria-label="Dashboard tabs" className="dashboard-topbar__tabs">
          {primaryTabs.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                isActive
                  ? 'dashboard-topbar__tab dashboard-topbar__tab--active'
                  : 'dashboard-topbar__tab'
              }
            >
              {item.label}
            </NavLink>
          ))}
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
