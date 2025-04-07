import { useState } from "react";

export default function Header() {
  const [isNavBar, setNavBar] = useState(false);

  function handleNavBar(isVisible) {
    setNavBar(isVisible);
  }
  return (
    <>
      <header>
        <div className="logo-heading">
          <img src="images/logo-bookmark.svg" alt="bookmark logo" />
        </div>
        <nav className={isNavBar ? "isActive" : ""}>
          <div className="nav-heading">
            <div className="logo">
              <img
                src="images/logo-bookmark-transparent.svg"
                alt="bookmark logo"
              />
            </div>
            <div className="close" onClick={() => handleNavBar(false)}>
              <img src="images/icon-close.svg" alt="close icon" />
            </div>
          </div>
          <ul>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <button>LOGIN</button>
          <div className="social">
            <a href="#facebook">
              <img src="images/icon-facebook.svg" alt="facebook icon" />
            </a>
            <a href="#twitter">
              <img src="images/icon-twitter.svg" alt="twitter icon" />
            </a>
          </div>
        </nav>
        <div className="menu" onClick={() => handleNavBar(true)}>
          <img src="images/icon-hamburger.svg" alt="menu icon" />
        </div>
      </header>
    </>
  );
}
