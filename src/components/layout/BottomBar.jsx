const links = ['PRIVACY POLICY', 'TERMS OF SERVICE', 'GLOBAL SUPPORT']

function BottomBar() {
  return (
    <footer className="bottom-bar">
      <nav className="bottom-bar__links" aria-label="Legal links">
        {links.map((link) => (
          <a key={link} href="#" className="bottom-bar__link">
            {link}
          </a>
        ))}
      </nav>
      <small className="bottom-bar__copyright">
        © 2024 THE PRIVATE BANKING GROUP. ALL RIGHTS RESERVED.
      </small>
    </footer>
  )
}

export default BottomBar
