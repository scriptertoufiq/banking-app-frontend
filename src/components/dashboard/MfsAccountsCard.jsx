const mfsAccounts = [
  { name: 'bKash Linked', number: '017 ••• 992', amount: '$1,200', tone: 'mint' },
  { name: 'Nagad Linked', number: '019 ••• 334', amount: '$450', tone: 'amber' },
]

function MfsAccountsCard() {
  return (
    <aside className="mfs-card" aria-label="MFS accounts">
      <h3>MFS Accounts</h3>

      <div className="mfs-card__list">
        {mfsAccounts.map((account) => (
          <article key={account.name} className="mfs-card__item">
            <span className={`mfs-card__dot mfs-card__dot--${account.tone}`} aria-hidden="true" />
            <div>
              <strong>{account.name}</strong>
              <p>{account.number}</p>
            </div>
            <span>{account.amount}</span>
          </article>
        ))}
      </div>

      <button type="button" className="mfs-card__button">
        Manage MFS Links
      </button>
    </aside>
  )
}

export default MfsAccountsCard
