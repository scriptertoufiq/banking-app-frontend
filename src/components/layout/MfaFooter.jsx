const legalLinks = ['SECURITY POLICY', 'TERMS OF SERVICE', 'CONTACT SUPPORT']

function MfaFooter() {
  return (
    <footer className="mfa-footer">
      <small>© 2024 DIGITAL PRIVATE BANK. ENCRYPTED SESSION.</small>
      <nav aria-label="Security links" className="mfa-footer__links">
        {legalLinks.map((item) => (
          <a key={item} href="#">
            {item}
          </a>
        ))}
      </nav>
    </footer>
  )
}

export default MfaFooter
