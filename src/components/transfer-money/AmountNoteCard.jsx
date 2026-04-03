function AmountNoteCard() {
  return (
    <section className="transfer-card transfer-card--amount" aria-label="Amount and note">
      <h2>AMOUNT &amp; NOTE</h2>

      <div className="transfer-amount-field">
        <span>$</span>
        <input type="text" inputMode="decimal" placeholder="0.00" aria-label="Transfer amount" />
      </div>

      <input
        className="transfer-note-field"
        type="text"
        placeholder="Note (Optional)"
        aria-label="Transfer note"
      />
    </section>
  )
}

export default AmountNoteCard
