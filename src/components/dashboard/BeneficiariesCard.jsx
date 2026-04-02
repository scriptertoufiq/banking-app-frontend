const beneficiaries = [
  { name: 'Sarah Jenkins', relation: 'Family Account' },
  { name: 'Marcus J. Real Estate', relation: 'Corporate' },
  { name: 'David Wilson', relation: 'Individual' },
  { name: 'Aisha Holdings', relation: 'Business' },
]

function BeneficiariesCard() {
  return (
    <aside className="beneficiaries-card" aria-label="Beneficiaries">
      <header className="beneficiaries-card__head">
        <h3>Beneficiaries</h3>
        <button type="button" className="beneficiaries-card__add">
          + Add Beneficiary
        </button>
      </header>

      <p className="beneficiaries-card__label">QUICK SEND TO FREQUENT RECIPIENTS</p>

      <div className="beneficiaries-card__grid">
        {beneficiaries.map((item) => (
          <article key={item.name} className="beneficiaries-card__person">
            <span className="beneficiaries-card__avatar" aria-hidden="true">
              {item.name.slice(0, 1)}
            </span>
            <strong>{item.name}</strong>
            <p>{item.relation}</p>
            <button type="button">Send Transfer</button>
          </article>
        ))}
      </div>

      <div className="beneficiaries-card__health">
        <div>
          <span>PORTFOLIO HEALTH</span>
          <strong>Optimized</strong>
        </div>
        <span aria-hidden="true">📈</span>
      </div>
    </aside>
  )
}

export default BeneficiariesCard
