const transactions = [
  {
    title: 'Saks Fifth Avenue',
    subtitle: 'May 12, 2023 · Retail',
    amount: '-$1,240.50',
    tone: 'debit',
  },
  {
    title: 'Vanguard Dividend ETF',
    subtitle: 'May 10, 2023 · Investment',
    amount: '+$4,210.00',
    tone: 'credit',
  },
  {
    title: 'Emirates Airlines',
    subtitle: 'May 08, 2023 · Travel',
    amount: '-$8,450.00',
    tone: 'debit',
  },
  {
    title: 'Eleven Madison Park',
    subtitle: 'May 05, 2023 · Dining',
    amount: '-$680.00',
    tone: 'debit',
  },
]

function RecentTransactionsCard() {
  return (
    <section className="transactions-card" aria-label="Recent transactions">
      <header className="transactions-card__head">
        <h3>Recent Transactions</h3>
        <button type="button">View All ↗</button>
      </header>

      <ul className="transactions-card__list">
        {transactions.map((item) => (
          <li key={item.title} className="transactions-card__item">
            <span className="transactions-card__badge" aria-hidden="true">●</span>
            <div className="transactions-card__copy">
              <strong>{item.title}</strong>
              <span>{item.subtitle}</span>
            </div>
            <span
              className={
                item.tone === 'credit'
                  ? 'transactions-card__amount transactions-card__amount--credit'
                  : 'transactions-card__amount'
              }
            >
              {item.amount}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default RecentTransactionsCard
