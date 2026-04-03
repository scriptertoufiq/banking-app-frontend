const filters = [
  { label: 'PERIOD', value: 'Last 30 days' },
  { label: 'TYPE', value: 'All Transactions' },
  { label: 'AMOUNT RANGE', value: 'Any Amount' },
  { label: 'STATUS', value: 'All Statuses' },
]

function TransactionHistoryFilters() {
  return (
    <section className="th-filters" aria-label="Transaction filters">
      {filters.map((filter) => (
        <label key={filter.label} className="th-filter">
          <span>{filter.label}</span>
          <button type="button" className="th-filter__value">
            {filter.value}
          </button>
        </label>
      ))}
    </section>
  )
}

export default TransactionHistoryFilters
