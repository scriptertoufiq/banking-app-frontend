function RequestSummaryCard() {
  return (
    <aside className="schedule-summary" aria-label="Request summary">
      <h2>Request Summary</h2>

      <dl className="schedule-summary__list">
        <div>
          <dt>Account</dt>
          <dd>
            <strong>Checking (...8920)</strong>
          </dd>
        </div>
        <div className="schedule-summary__divider" />
        <div className="schedule-summary__two-col">
          <div>
            <dt>Period</dt>
            <dd>
              <strong>Oct 12 - Nov 12</strong>
            </dd>
          </div>
          <div>
            <dt>Format</dt>
            <dd>
              <strong>CSV Data</strong>
            </dd>
          </div>
        </div>
        <div className="schedule-summary__divider" />
        <div>
          <dt>Recurring Schedule</dt>
          <dd>
            <strong className="schedule-summary__active">Monthly (Day 12)</strong>
            <span className="schedule-summary__badge">ACTIVE</span>
          </dd>
        </div>
        <div className="schedule-summary__divider" />
        <div>
          <dt>Destination</dt>
          <dd>
            <strong>Instant Download &amp; Email</strong>
          </dd>
        </div>
      </dl>

      <button type="button" className="schedule-summary__button">
        Generate &amp; Schedule
      </button>

      <p className="schedule-summary__note">
        By clicking “Generate &amp; Schedule”, you authorize the creation of a secure data packet
        and future automated reports.
      </p>
    </aside>
  )
}

export default RequestSummaryCard
