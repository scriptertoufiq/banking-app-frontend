const steps = [
  { key: 'personal', label: 'PERSONAL', active: true },
  { key: 'identification', label: 'IDENTIFICATION', active: false },
  { key: 'security', label: 'SECURITY', active: false },
]

function RegisterProgress() {
  return (
    <section className="register-progress" aria-label="Application progress">
      <div className="register-progress__head">
        <div>
          <h1>Application</h1>
          <p>Step 1 of 3: Identity Foundation</p>
        </div>

        <div className="register-progress__eta" aria-label="Estimated completion time">
          <span>ESTIMATED TIME</span>
          <strong>4 Minutes</strong>
        </div>
      </div>

      <ol className="register-progress__steps">
        {steps.map((step) => (
          <li
            key={step.key}
            className={step.active ? 'register-progress__step register-progress__step--active' : 'register-progress__step'}
          >
            <span>{step.label}</span>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default RegisterProgress
