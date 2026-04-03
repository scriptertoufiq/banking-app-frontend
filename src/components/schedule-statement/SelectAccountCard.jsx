const accounts = [
  { name: 'Checking', account: 'Account ... 8920', amount: '$242,500.00', active: true },
  { name: 'Savings', account: 'Account ... 4412', amount: '$1,204,000.00' },
  { name: 'Investments', account: 'Portfolio ... 0091', amount: '$4,850,210.00' },
]

function SelectAccountCard() {
  return (
    <section className="schedule-card" aria-label="Select account">
      <header className="schedule-card__header">
        <span className="schedule-card__step">01</span>
        <h2>Select Account</h2>
      </header>

      <div className="schedule-account-grid">
        {accounts.map((account) => (
          <button
            key={account.name}
            type="button"
            className={
              account.active ? 'schedule-account schedule-account--active' : 'schedule-account'
            }
          >
            <span className="schedule-account__icon" aria-hidden="true">◧</span>
            <span className="schedule-account__body">
              <strong>{account.name}</strong>
              <span>{account.account}</span>
              <em>{account.amount}</em>
            </span>
            {account.active ? <span className="schedule-account__check">✓</span> : null}
          </button>
        ))}
      </div>
    </section>
  )
}

export default SelectAccountCard
