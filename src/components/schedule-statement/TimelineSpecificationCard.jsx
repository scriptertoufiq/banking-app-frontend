function TimelineSpecificationCard() {
  return (
    <section className="schedule-card" aria-label="Timeline and specification">
      <header className="schedule-card__header">
        <span className="schedule-card__step">02</span>
        <h2>Timeline &amp; Specification</h2>
      </header>

      <div className="schedule-group">
        <h3>Statement Period</h3>
        <div className="schedule-pill-group">
          <button type="button" className="schedule-pill schedule-pill--active">Last 30 Days</button>
          <button type="button" className="schedule-pill">Last 3 Months</button>
          <button type="button" className="schedule-pill">Last Year</button>
          <button type="button" className="schedule-pill">Custom Range</button>
        </div>
        <div className="schedule-date-row">
          <input type="text" value="Oct 12, 2023" readOnly aria-label="Start date" />
          <input type="text" value="Nov 12, 2023" readOnly aria-label="End date" />
        </div>
      </div>

      <div className="schedule-group">
        <h3>Export Format</h3>
        <div className="schedule-format-grid">
          <button type="button" className="schedule-format">PDF</button>
          <button type="button" className="schedule-format schedule-format--active">CSV</button>
          <button type="button" className="schedule-format">EXCEL</button>
        </div>
      </div>
    </section>
  )
}

export default TimelineSpecificationCard
