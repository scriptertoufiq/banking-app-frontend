const navItems = [
  { label: 'Accounts' },
  { label: 'Transfers', active: true },
  { label: 'Beneficiaries' },
  { label: 'Investments' },
  { label: 'Security' },
]

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
          {navItems.map((item) => (
            <button
              key={item.label}
              type="button"
              className={
                item.active
                  ? 'transfer-sidebar__nav-item transfer-sidebar__nav-item--active'
                  : 'transfer-sidebar__nav-item'
              }
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="transfer-sidebar__bottom">
        <button type="button" className="transfer-sidebar__quick-transfer">
          + Quick Transfer
        </button>

        <button type="button" className="transfer-sidebar__link">
          Support
        </button>
        <button type="button" className="transfer-sidebar__link transfer-sidebar__link--danger">
          Sign Out
        </button>
      </div>
    </aside>
  )
}

export default TransferSidebar
