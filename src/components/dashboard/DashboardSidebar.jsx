import { NavLink } from 'react-router-dom'
import { wealthSidebarItems } from '../../navigation'

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
          {wealthSidebarItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                isActive
                  ? 'dashboard-sidebar__nav-item dashboard-sidebar__nav-item--active'
                  : 'dashboard-sidebar__nav-item'
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="dashboard-sidebar__bottom">
        <NavLink to="/transfer-money" className="dashboard-sidebar__quick-transfer">
          + Quick Transfer
        </NavLink>

        <NavLink to="/schedule-statement" className="dashboard-sidebar__link">
          Support
        </NavLink>
        <NavLink to="/login/mfa" className="dashboard-sidebar__link dashboard-sidebar__link--danger">
          Sign Out
        </NavLink>
      </div>
    </aside>
  )
}

export default DashboardSidebar
