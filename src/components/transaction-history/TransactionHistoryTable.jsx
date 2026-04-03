const rows = [
  {
    date: 'Oct 24, 2023',
    time: '14:20 PM',
    merchant: 'Le Bernardin New York',
    reference: 'Ref: #PV-882910',
    category: 'DINING',
    status: 'Completed',
    amount: '-$1,240.50',
    tone: 'neutral',
  },
  {
    date: 'Oct 22, 2023',
    time: '09:15 AM',
    merchant: 'Global Equity Fund',
    reference: 'Dividend Payout',
    category: 'WEALTH',
    status: 'Completed',
    amount: '+$14,500.00',
    tone: 'positive',
  },
  {
    date: 'Oct 21, 2023',
    time: '18:45 PM',
    merchant: 'Hermes Paris',
    reference: 'Ref: #PV-110293',
    category: 'RETAIL',
    status: 'Pending',
    amount: '-$8,420.00',
    tone: 'neutral',
  },
  {
    date: 'Oct 20, 2023',
    time: '11:00 AM',
    merchant: 'Internal Transfer',
    reference: 'To: Savings •••• 9921',
    category: 'TRANSFER',
    status: 'Completed',
    amount: '-$25,000.00',
    tone: 'neutral',
  },
  {
    date: 'Oct 19, 2023',
    time: '15:30 PM',
    merchant: 'Amazon Web Services',
    reference: 'Card verification failed',
    category: 'SERVICES',
    status: 'Failed',
    amount: '-$45.00',
    tone: 'negative',
  },
]

function TransactionHistoryTable() {
  return (
    <section className="th-table-wrap" aria-label="Transaction list">
      <div className="th-table-head">
        <span>DATE</span>
        <span>MERCHANT / RECIPIENT</span>
        <span>CATEGORY</span>
        <span>STATUS</span>
        <span>AMOUNT</span>
      </div>

      <div className="th-table-body">
        {rows.map((row) => (
          <article key={`${row.date}-${row.merchant}`} className="th-row">
            <div className="th-row__date">
              <strong>{row.date}</strong>
              <span>{row.time}</span>
            </div>

            <div className="th-row__merchant">
              <span className="th-row__icon" aria-hidden="true">●</span>
              <div>
                <strong>{row.merchant}</strong>
                <span>{row.reference}</span>
              </div>
            </div>

            <span className="th-row__tag">{row.category}</span>

            <span
              className={
                row.status === 'Failed'
                  ? 'th-row__status th-row__status--failed'
                  : row.status === 'Pending'
                    ? 'th-row__status th-row__status--pending'
                    : 'th-row__status'
              }
            >
              • {row.status}
            </span>

            <strong
              className={
                row.tone === 'positive'
                  ? 'th-row__amount th-row__amount--positive'
                  : row.tone === 'negative'
                    ? 'th-row__amount th-row__amount--negative'
                    : 'th-row__amount'
              }
            >
              {row.amount}
            </strong>
          </article>
        ))}
      </div>

      <footer className="th-table-footer">
        <span>Showing 5 of 124 transactions</span>
        <div>
          <button type="button" className="th-pagination th-pagination--ghost">Previous</button>
          <button type="button" className="th-pagination">Next Page</button>
        </div>
      </footer>
    </section>
  )
}

export default TransactionHistoryTable
