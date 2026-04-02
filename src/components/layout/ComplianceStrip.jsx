const badges = ['FDIC INSURED', 'ISO 27001', 'SIPC MEMBER']

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" className="compliance__icon" aria-hidden="true">
      <path d="M12 2 4 5v6c0 5.2 3.5 9.9 8 11 4.5-1.1 8-5.8 8-11V5l-8-3Z" />
    </svg>
  )
}

function ComplianceStrip() {
  return (
    <section className="compliance" aria-label="Compliance and security badges">
      {badges.map((badge) => (
        <div key={badge} className="compliance__item">
          <ShieldIcon />
          <span>{badge}</span>
        </div>
      ))}
    </section>
  )
}

export default ComplianceStrip
