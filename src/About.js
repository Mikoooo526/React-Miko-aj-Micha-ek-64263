import TextSizer from "./components/TextSizer";
import TextSizeContext from "./components/TextSizeContext";
import FeaturedPost from "./components/FeaturedPost";
import Card from "./components/Card/Card";
import Form from "./components/Form";
import './App.css';
import { useState } from 'react';
import { BrowserRouter, Link, Route, Router } from "react-router-dom";





function About() {
  const [isDark, setIsDark] = useState(false);
  const [backgroundText, setBackgroundText] = useState("Dark");

  const handleBackgroundChange = () => {
    setIsDark(!isDark);
    setBackgroundText(isDark ? "Dark" : "Light");
  }

  const [textSize, setTextSize] = useState("medium");

  const textSizeContextValue = {
    size: textSize,
    setSize: setTextSize,
  };

  return (
    <div className="App">
      <body className={isDark ? "bg-light" : "bg-dark"}>
        <button onClick={handleBackgroundChange}>
          {isDark ? "Light mode" : "Dark mode"}
        </button>
        <div className="main-container">
          <TextSizeContext.Provider value={textSizeContextValue}>
            <div style={{ fontSize: textSizeContextValue.size }}>
              <div className="navbar block">
                <Router>
                  <ul className="menu horizontal-list">
                    <li>
                      <a className="menu-tab" >
                        Home
                        <Link to="/">Home</Link>
                      </a>
                    </li>
                    <li>
                      <a className="menu-tab">
                        About
                        <Link to="/about">About</Link>
                      </a>
                    </li>
                    <li>
                      <a className="menu-tab">
                        Contact
                        <Link to="/contact">About</Link>
                      </a>
                    </li>
                    <li>
                      <a className="menu-tab" href="#5">
                        Favorites
                      </a>
                    </li>
                  </ul>
                </Router>
              </div>

              <div className="left-container container">
                <div className="left1 block">
                  <TextSizer />
                </div>
                <div className="left2 block"><Form /></div>
                <div className="left3 block"></div>
              </div>

              <div className="middle-container container">
                <div className="centre1 block">
                  <div>
                    <Card title="Najnowsze wiadomości" content="Sprawdź najnowsze informacje ze świata i kraju." />
                    <Card title="Nowości w sklepie" content="Odkryj nowe produkty w naszym sklepie internetowym." />
                    <Card title="Zaproszenie na konferencję" content="Serdecznie zapraszamy na naszą coroczną konferencję dla specjalistów IT." />
                  </div>
                </div>
                <div className="centre2 block"><p>
                  To jest strona About.
                </p>
                </div>
                <div className="centre3 block"></div>
              </div>

              <div className="right-container container">
                <div className="right1 block"> <FeaturedPost /> </div>
                <div className="right2 block"></div>
              </div>
            </div>
          </TextSizeContext.Provider>
        </div>
      </body>
    </div>
  );
}

export default About;
