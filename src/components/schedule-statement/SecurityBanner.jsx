function SecurityBanner() {
  return (
    <section className="schedule-security" aria-label="Encryption notice">
      <div className="schedule-security__icon">🔒</div>
      <div>
        <strong>End-to-End Encrypted</strong>
        <p>
          Your data is secured using bank-grade AES-256 encryption during processing.
        </p>
      </div>
    </section>
  )
}

export default SecurityBanner
