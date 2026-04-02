const metrics = [
  { value: '$12.4B', label: 'ASSETS MANAGED' },
  { value: '99.9%', label: 'UPTIME SLA' },
]

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2 4 5v6c0 5.2 3.5 9.9 8 11 4.5-1.1 8-5.8 8-11V5l-8-3Z" />
    </svg>
  )
}

function MfaHero() {
  return (
    <section className="mfa-hero" aria-label="Security and performance overview">
      <div className="mfa-hero__badge">
        <ShieldIcon />
        <span>TIER 1 BANKING SECURITY</span>
      </div>

      <h1>
        Securing your
        <br />
        <span>financial legacy.</span>
      </h1>

      <p>
        Access your private wealth dashboard with multi-factor biometric
        authentication and real-time encryption.
      </p>

      <div className="mfa-hero__metrics">
        {metrics.map((metric) => (
          <div key={metric.label} className="mfa-hero__metric">
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default MfaHero
