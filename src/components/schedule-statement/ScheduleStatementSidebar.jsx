import { NavLink } from 'react-router-dom'
import { globalWealthSidebarItems } from '../../navigation'

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
          {globalWealthSidebarItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                isActive
                  ? 'schedule-sidebar__nav-item schedule-sidebar__nav-item--active'
                  : 'schedule-sidebar__nav-item'
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="schedule-sidebar__bottom">
        <NavLink to="/dashboard" className="schedule-sidebar__link">
          Settings
        </NavLink>
        <NavLink to="/schedule-statement" className="schedule-sidebar__link">
          Support
        </NavLink>
        <NavLink to="/transfer-money" className="schedule-sidebar__advisor">
          Contact Advisor
        </NavLink>
      </div>
    </aside>
  )
}

export default ScheduleStatementSidebar
