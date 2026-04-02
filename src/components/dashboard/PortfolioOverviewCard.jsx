const accountCards = [
  { name: 'Private Checking', amount: '$142,300.50', account: 'Acc: •••• 9928' },
  { name: 'Elite Savings', amount: '$1,106,289.50', account: 'Acc: •••• 0054' },
]

function PortfolioOverviewCard() {
  return (
    <section className="portfolio-card" aria-label="Portfolio overview">
      <h1>Portfolio Overview</h1>
      <p>Welcome back, Mr. Sterling. Your assets have grown by 2.4% this quarter.</p>

      <article className="portfolio-card__balance">
        <header>
          <span>TOTAL COMBINED BALANCE</span>
          <strong>$1,248,590.00</strong>
        </header>
        <span className="portfolio-card__growth">↗ +$24,102.50</span>

        <div className="portfolio-card__accounts">
          {accountCards.map((item) => (
            <div key={item.name} className="portfolio-card__account">
              <h2>{item.name}</h2>
              <strong>{item.amount}</strong>
              <div>
                <span>{item.account}</span>
                <span aria-hidden="true">›</span>
              </div>
            </div>
          ))}
        </div>
      </article>
    </section>
  )
}

export default PortfolioOverviewCard
