import Contact from "./components/contact/Contact";
import Intro from "./components/intro/intro";
import Works from "./components/works/works";
import Portfolio from "./components/portfolio/portfolio";
import Skills from "./components/skills/Skills";
import LiquidSwipe from "react-liquidswipe";
import About from "./components/about/About";
import { useEffect, useState } from "react";
import Loader from "./components/loader/Loader";
import "./app.scss";
// import WorkProjectPage from "./components/WorkProjects/WorkPortfolio";
import WorkPortfolio from "./components/WorkProjects/WorkPortfolio";
function App() {
  const [loading, isLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      isLoading(false);
    }, 1500);
  }, []);
  return (
    <>
      {loading === true ? (
        <Loader />
      ) : (
        <div className="app">
          <LiquidSwipe
            className="swipe"
            components={[
              <Intro />,
              <About />,
              <Skills />,
              <Portfolio />,
              // <WorkPortfolio />,
              <Works />,
              <Contact />,
            ]}
          />
        </div>
      )}
    </>
  );
}

export default App;
