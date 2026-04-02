const benefits = [
  'Biometric verification setup',
  'Dedicated concierge assignment',
  'Zero-liability fraud protection',
]

function RegisterInfoPanel() {
  return (
    <aside className="register-info" aria-label="Enrollment benefits and support">
      <section className="register-info__promo-card">
        <div className="register-info__image" aria-hidden="true" />
        <h3>Why The Private Bank?</h3>
        <p>
          Your data is secured using military-grade encryption and audited by
          third-party security firms monthly.
        </p>
        <ul>
          {benefits.map((benefit) => (
            <li key={benefit}>{benefit}</li>
          ))}
        </ul>
      </section>

      <section className="register-info__small-card" aria-label="Insurance details">
        <span className="register-info__small-icon">◔</span>
        <div>
          <strong>FDIC INSURED</strong>
          <p>Coverage up to $250,000</p>
        </div>
      </section>

      <button type="button" className="register-info__help">
        <span className="register-info__small-icon">?</span>
        <span>Need assistance?</span>
        <span aria-hidden="true">›</span>
      </button>
    </aside>
  )
}

export default RegisterInfoPanel
