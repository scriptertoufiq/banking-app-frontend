function TransferSummaryCard() {
  return (
    <aside className="transfer-summary" aria-label="Transfer summary">
      <h2>Transfer Summary</h2>

      <dl className="transfer-summary__list">
        <div>
          <dt>Recipient</dt>
          <dd>
            <strong>Julianne Deidre</strong>
            <span>Chase Manhattan</span>
          </dd>
        </div>
        <div>
          <dt>Transfer Method</dt>
          <dd>
            <strong>Priority</strong>
            <span>RTGS</span>
          </dd>
        </div>
        <div>
          <dt>Processing Fee</dt>
          <dd>
            <strong className="transfer-summary__waived">Waived (Elite)</strong>
          </dd>
        </div>
      </dl>

      <div className="transfer-summary__total">
        <span>Total Debit</span>
        <strong>$2,500.00</strong>
      </div>

      <button type="button" className="transfer-summary__confirm">
        Confirm Transfer <span aria-hidden="true">→</span>
      </button>

      <p className="transfer-summary__note">
        By clicking confirm, you authorize The Private Bank to initiate this transaction.
        Terms &amp; Conditions apply.
      </p>
    </aside>
  )
}

export default TransferSummaryCard
