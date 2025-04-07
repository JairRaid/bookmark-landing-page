import { useRef, useState } from "react";

function Footer() {
  const [emailError, setEmailError] = useState(false);
  const emailRef = useRef();
  function handleChange(email) {
    if (emailError) {
      setEmailError(false);
    }
    console.log(email);
    emailRef.current.value = email;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRef.current.value) {
      setEmailError(true);
      return;
    }

    const email = emailRef.current.value.trim();

    if (!emailRegex.test(email)) {
      setEmailError(true);
      return;
    }

    setEmailError(false);
    emailRef.current.value = "";
  }
  return (
    <>
      <footer>
        <section id="newsletter">
          <span className="joiner">35,000+ ALREADY JOINED</span>
          <h2>Stay up-to-date with what we're doing</h2>
          <form onSubmit={handleSubmit}>
            <div
              className={
                emailError ? "email-container error" : "email-container"
              }
            >
              <input
                ref={emailRef}
                type="email"
                autoComplete="email"
                placeholder="Enter your email"
                onChange={(event) => handleChange(event.target.value)}
              />
              <span
                className="email-error"
                style={{ display: emailError ? "inline" : "none" }}
              >
                Whoops, make sure it's an email
              </span>
            </div>
            <button type="submit" className="btn-red">
              Contact Us
            </button>
          </form>
        </section>
        <div className="footer-nav">
          <nav>
            <div className="logo">
              <img src="images/logo-bookmark-white.svg" alt="" />
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
          </nav>
          <div className="social">
            <a href="#facebook">
              <img src="images/icon-facebook.svg" alt="Facebook" />
            </a>
            <a href="#twitter">
              <img src="images/icon-twitter.svg" alt="Twitter" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
