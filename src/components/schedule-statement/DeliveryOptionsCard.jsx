function DeliveryOptionsCard() {
  return (
    <section className="schedule-card" aria-label="Delivery options">
      <header className="schedule-card__header">
        <span className="schedule-card__step">03</span>
        <h2>Delivery Options</h2>
      </header>

      <div className="schedule-delivery-list">
        <button type="button" className="schedule-delivery schedule-delivery--active">
          <span className="schedule-delivery__radio" aria-hidden="true" />
          <span>
            <strong>Download Now</strong>
            <em>The file will be available for instant download in your browser.</em>
          </span>
          <span className="schedule-delivery__icon" aria-hidden="true">⭳</span>
        </button>

        <button type="button" className="schedule-delivery">
          <span className="schedule-delivery__radio" aria-hidden="true" />
          <span>
            <strong>Send to Registered Email</strong>
            <em>Sent to m******@privatebank.com</em>
          </span>
          <span className="schedule-delivery__icon" aria-hidden="true">✉</span>
        </button>
      </div>
    </section>
  )
}

export default DeliveryOptionsCard
