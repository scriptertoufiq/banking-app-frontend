function EncryptionBanner() {
  return (
    <section className="transfer-encryption" aria-label="Encryption notice">
      <div className="transfer-encryption__icon">🛡️</div>
      <div>
        <strong>Encrypted Transmission</strong>
        <p>
          This transfer is protected by 256-bit encryption. High-value transfers may require
          secondary biometric verification on your mobile device.
        </p>
      </div>
    </section>
  )
}

export default EncryptionBanner
