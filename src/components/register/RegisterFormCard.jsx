function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 12a4.5 4.5 0 1 0-4.5-4.5A4.5 4.5 0 0 0 12 12Zm0 2c-4.2 0-7.5 2.3-7.5 5.2V22h15v-2.8c0-2.9-3.3-5.2-7.5-5.2Z" />
    </svg>
  )
}

function RegisterFormCard() {
  return (
    <section className="register-form-card" aria-label="Personal details form">
      <h2>
        <span className="register-form-card__icon">
          <UserIcon />
        </span>
        Personal Details
      </h2>

      <form className="register-form" onSubmit={(event) => event.preventDefault()}>
        <div className="register-form__grid register-form__grid--two">
          <label>
            <span>LEGAL FIRST NAME</span>
            <input type="text" placeholder="John" autoComplete="given-name" />
          </label>
          <label>
            <span>LEGAL LAST NAME</span>
            <input type="text" placeholder="Doe" autoComplete="family-name" />
          </label>
        </div>

        <label>
          <span>EMAIL ADDRESS</span>
          <input type="email" placeholder="john.doe@privatewealth.com" autoComplete="email" />
        </label>

        <label>
          <span>PHONE NUMBER</span>
          <div className="register-form__phone-field">
            <span className="register-form__country">+1</span>
            <input type="tel" placeholder="(555) 000-0000" autoComplete="tel" />
          </div>
        </label>

        <label className="register-form__consent">
          <input type="checkbox" />
          <span>
            I acknowledge that I have read the <a href="#">Terms of Service</a> and
            <a href="#"> Privacy Policy</a> regarding my personal data processing.
          </span>
        </label>

        <div className="register-form__actions">
          <button type="button" className="register-form__cancel">
            ← Cancel
          </button>
          <button type="submit" className="register-form__submit">
            Continue to Identity <span aria-hidden="true">→</span>
          </button>
        </div>
      </form>
    </section>
  )
}

export default RegisterFormCard
