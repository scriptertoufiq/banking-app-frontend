function BankIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 10h18v2H3zm2-2h14L12 2zm0 6h14v4H5zM4 20h16v2H4z" />
    </svg>
  )
}

function SourceAccountCard() {
  return (
    <section className="transfer-card transfer-card--source" aria-label="Select source account">
      <h2>SELECT SOURCE ACCOUNT</h2>

      <button type="button" className="source-account">
        <span className="source-account__icon">
          <BankIcon />
        </span>
        <span className="source-account__details">
          <strong>Private Wealth Advantage</strong>
          <span>Acc: •••• 8829</span>
        </span>
        <span className="source-account__balance">
          <strong>$4,290,450.00</strong>
          <span>AVAILABLE BALANCE</span>
        </span>
      </button>
    </section>
  )
}

export default SourceAccountCard
