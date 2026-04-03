import TransactionHistoryTopbar from '../components/transaction-history/TransactionHistoryTopbar'
import TransactionHistoryFilters from '../components/transaction-history/TransactionHistoryFilters'
import TransactionHistoryTable from '../components/transaction-history/TransactionHistoryTable'

function TransactionHistoryPage() {
  return (
    <div className="transaction-history-page">
      <TransactionHistoryTopbar />

      <main className="transaction-history-main">
        <header className="transaction-history-hero">
          <div>
            <h1>Transaction History</h1>
            <p>Review and manage your private vault activities.</p>
          </div>

          <button type="button" className="transaction-history-download">
            ⭳ Download Statement
          </button>
        </header>

        <TransactionHistoryFilters />
        <TransactionHistoryTable />
      </main>
    </div>
  )
}

export default TransactionHistoryPage
