import { useState } from "react";
import Logo from "../assets/marci-logo.webp";

const MenuIcon = ({ open }) => (
  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
    {open ? (
      <path
        d="m5 5 14 14M19 5 5 19"
        stroke="currentColor"
        strokeLinecap="round"
      />
    ) : (
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeLinecap="round"
      />
    )}
  </svg>
);

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="nav-wrap">
      <a className="brand" href="#home" aria-label="Marci Metzger Homes">
        <img src={Logo} alt="Marci Metzger Homes" />
      </a>

      <nav
        className={menuOpen ? "nav-links nav-links--open" : "nav-links"}
        aria-label="Main navigation"
      >
        {[
          ["Home", "#home"],
          ["Listing", "#listing"],
          ["Let's Move", "#contact"],
          ["About Us", "#about"],
        ].map(([label, href]) => (
          <a key={label} href={href} onClick={() => setMenuOpen(false)}>
            {label}
          </a>
        ))}
      </nav>

      <a className="nav-call" href="tel:2069196886">
        <span>Call Marci</span>
        <strong>206-919-6886</strong>
      </a>

      <button
        className="menu-button"
        type="button"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((value) => !value)}
      >
        <MenuIcon open={menuOpen} />
      </button>
    </header>
  );
};

export default Header;
