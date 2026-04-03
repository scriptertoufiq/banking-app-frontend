import { NavLink } from 'react-router-dom'
import { wealthSidebarItems } from '../../navigation'

function TransferSidebar() {
  return (
    <aside className="transfer-sidebar">
      <div>
        <div className="transfer-sidebar__brand">
          <span className="transfer-sidebar__logo">🏦</span>
          <div>
            <strong>Private Wealth</strong>
            <p>Elite Tier</p>
          </div>
        </div>

        <nav className="transfer-sidebar__nav" aria-label="Primary navigation">
          {wealthSidebarItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                isActive
                  ? 'transfer-sidebar__nav-item transfer-sidebar__nav-item--active'
                  : 'transfer-sidebar__nav-item'
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="transfer-sidebar__bottom">
        <NavLink to="/transfer-money" className="transfer-sidebar__quick-transfer">
          + Quick Transfer
        </NavLink>

        <NavLink to="/schedule-statement" className="transfer-sidebar__link">
          Support
        </NavLink>
        <NavLink to="/login/mfa" className="transfer-sidebar__link transfer-sidebar__link--danger">
          Sign Out
        </NavLink>
      </div>
    </aside>
  )
}

export default TransferSidebar
