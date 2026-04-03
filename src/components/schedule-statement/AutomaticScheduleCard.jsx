function AutomaticScheduleCard() {
  return (
    <section className="schedule-card" aria-label="Automatic schedule">
      <header className="schedule-card__header schedule-card__header--split">
        <div className="schedule-card__header-left">
          <span className="schedule-card__step">04</span>
          <h2>Automatic Schedule</h2>
        </div>
        <button type="button" className="schedule-recurrence-toggle">
          Enable Recurring <span aria-hidden="true" className="schedule-recurrence-toggle__switch">✓</span>
        </button>
      </header>

      <div className="schedule-grid-two">
        <label className="schedule-field">
          <span>Frequency</span>
          <select defaultValue="Monthly" aria-label="Frequency">
            <option>Monthly</option>
            <option>Quarterly</option>
            <option>Yearly</option>
          </select>
        </label>

        <div className="schedule-field">
          <span>Day of the Month</span>
          <div className="schedule-days">
            {['1', '5', '12', '15', '20', '25', 'End'].map((day) => (
              <button key={day} type="button" className={day === '12' ? 'schedule-day schedule-day--active' : 'schedule-day'}>
                {day}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="schedule-notice">
        <span className="schedule-notice__icon" aria-hidden="true">i</span>
        <p>
          Scheduled statements will be sent to your registered email address on the selected day
          of each period. You can manage or cancel this schedule at any time in Account Settings.
        </p>
      </div>
    </section>
  )
}

export default AutomaticScheduleCard
