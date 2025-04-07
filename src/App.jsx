import Header from "./components/Header";
import Menu from "./components/Menu";
import Feature from "./components/Feature";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import { menuData, featuresData } from "./data";
import "./App.css";
import { useState } from "react";

function App() {
  const [selectedMenu, setSelectedMenu] = useState(0);

  function handleMenu(index) {
    setSelectedMenu(index);
  }

  return (
    <>
      <Header />
      <main>
        <section id="hero">
          <article>
            <h1>A Simple Bookmark Manager</h1>
            <p>
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </p>
            <div className="buttons">
              <button className="btn-purple">Get it on Chrome</button>
              <button className="btn-grey">Get it on Firefox</button>
            </div>
          </article>
          <figure>
            <img
              src="images/illustration-hero.svg"
              alt="Illustration of the Bookmark Manager"
            />
          </figure>
        </section>

        <section id="features">
          <article>
            <h2>Features</h2>
            <p>
              Our aim is to make it quick and easy for you to access your
              favourite websites. Your bookmarks sync between your devices so
              you can access them on the go.
            </p>
          </article>
          <menu>
            {menuData.map((title, index) => {
              return (
                <Menu
                  key={index}
                  title={title}
                  index={index}
                  btnClass={selectedMenu === index ? "isActive" : ""}
                  onHandleMenu={handleMenu}
                />
              );
            })}
          </menu>
          <Feature {...featuresData[selectedMenu]} />
        </section>

        <section id="download">
          <h2>Download the extension</h2>
          <p>
            We’ve got more browsers in the pipeline. Please do let us know if
            you’ve got a favourite you’d like us to prioritize.
          </p>
          <div className="download-container">
            <article className="download-item">
              <img
                src="images/logo-chrome.svg"
                alt="chrome icon"
                className="browser-logo"
              />
              <h3>Add to Chrome</h3>
              <p>Minimum version 62</p>
              <img
                src="images/bg-dots.svg"
                alt="bg-dots separator"
                className="separator"
              />
              <button className="btn-purple">Add & Install Extension</button>
            </article>
            <article className="download-item">
              <img
                src="images/logo-firefox.svg"
                alt="firefox icon"
                className="browser-logo"
              />
              <h3>Add to Firefox</h3>
              <p>Minimum version 55</p>
              <img
                src="images/bg-dots.svg"
                alt="bg-dots separator"
                className="separator"
              />
              <button className="btn-purple">Add & Install Extension</button>
            </article>
            <article className="download-item">
              <img
                src="images/logo-opera.svg"
                alt="opera icon"
                className="browser-logo"
              />
              <h3>Add to Opera</h3>
              <p>Minimum version 46</p>
              <img
                src="images/bg-dots.svg"
                alt="bg-dots separator"
                className="separator"
              />
              <button className="btn-purple">Add & Install Extension</button>
            </article>
          </div>
        </section>

        <section id="faq">
          <h2>Frequently Asked Questions</h2>
          <p>
            Here are some of our FAQs. If you have any other questions you’d
            like answered please feel free to email us.
          </p>
          <FAQ />
          <button className="btn-purple">More info</button>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
