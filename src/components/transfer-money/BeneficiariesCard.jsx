const beneficiaries = [
  { initials: 'JD', name: 'Julianne Deidre', bank: 'Standard Chartered • 0922' },
  { initials: 'SM', name: 'Stark Management', bank: 'The Private Bank • 4401' },
]

function BeneficiariesCard() {
  return (
    <section className="transfer-card transfer-card--beneficiaries" aria-label="Recent beneficiaries">
      <header className="transfer-card__head">
        <h2>RECENT BENEFICIARIES</h2>
        <button type="button">View All</button>
      </header>

      <div className="transfer-beneficiaries">
        {beneficiaries.map((beneficiary) => (
          <div key={beneficiary.name} className="transfer-beneficiaries__item">
            <span className="transfer-beneficiaries__avatar">{beneficiary.initials}</span>
            <div>
              <strong>{beneficiary.name}</strong>
              <span>{beneficiary.bank}</span>
            </div>
          </div>
        ))}

        <button type="button" className="transfer-beneficiaries__add">
          + Add New Account
        </button>
      </div>
    </section>
  )
}

export default BeneficiariesCard
