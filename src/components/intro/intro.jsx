import { useEffect } from "react";
import { useRef } from "react";
import { init } from "ityped";
import { GitHub, Code, LinkedIn } from "@material-ui/icons";
import "./intro.scss";
import { motion } from "framer-motion";

const Intro = () => {
  const textref = useRef();

  useEffect(() => {
    init(textref.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        "Full Stack Dev",
        "Codaholic",
        "React/React Native Dev",
        "Enthusiastic Programmer",
      ],
    });
  }, []);

  const t1 = "Hi there , I'm ";
  const t2 = "Balu Deshamoni";

  const spanVar1 = {
    visible: { opacity: 1 },
    hover: {
      fontSize: "25px",
      color: "#bdc9d3",
    },
  };
  const spanVar = {
    visible: { opacity: 1 },
    hover: {
      fontSize: "40px",
      color: "#bdc9d3",
    },
  };

  return (
    <>
      <div className="intro_bg"></div>
      <div className="intro" id="intro">
        <div className="left">
          <div className="imagecontainer">
            <img src="assets/balu9.jpg" alt="" />
          </div>
        </div>
        <div className="right">
          <div className="wrapper">
            <div className="icons">
              <motion.a
                whileHover={{
                  y: [0, 5, -5, 8, -8, 0],
                }}
                href="https://github.com/BaluDeshamoni"
                target="_blank"
                rel="noreferrer"
              >
                <GitHub />
              </motion.a>
              <motion.a
                whileHover={{
                  y: [0, 5, -5, 8, -8, 0],
                }}
                href="https://auth.geeksforgeeks.org/user/baludeshamoni/practice"
                target="_blank"
                rel="noreferrer"
              >
                <Code />
              </motion.a>
              <motion.a
                whileHover={{
                  y: [0, 5, -5, 8, -8, 0],
                }}
                href="https://www.linkedin.com/in/balu-deshamoni-a4439322a/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedIn />
              </motion.a>
            </div>
            <h2>
              {t1.split("").map((letter, id) => (
                <motion.span
                  key={id}
                  variants={spanVar1}
                  initial="visible"
                  whileHover="hover"
                >
                  {letter}
                </motion.span>
              ))}
            </h2>
            <h1>
              {t2.split("").map((letter, id) => (
                <motion.span
                  key={id}
                  variants={spanVar}
                  initial="visible"
                  whileHover="hover"
                >
                  {letter}
                </motion.span>
              ))}
            </h1>
            <h3>
              <span ref={textref}></span>
            </h3>

            <div className="buttons">
              <a href="assets/Balu_Resume.pdf" download="balu resume.pdf">
                <button className="but">Get Resume</button>
              </a>
            </div>
            <span className="swp">Swipe to see more</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
