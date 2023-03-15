import { useState } from "react";
import "./portfolio.scss";
import { All } from "../../data";
import { motion } from "framer-motion";
import ProjectPage from "../projectPage/ProjectPage";

const Portfolio = () => {
  const [projData, setProjData] = useState([]);
  const spanVar = {
    visible: { opacity: 1 },
    hover: {
      fontSize: "32px",
      color: "#bdc9d3",
    },
  };
  const defaultTransitions = {
    ease: [0.43, 0.13, 0.23, 0.96],
  };
 

  const t1 = "Projects";

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="portfolio_bg"></div>
      <div>
        <div className={`portfolio ${open ? "active" : ""}`} id="portfolio">
          <h1>
            {t1.split("").map((letter, id) => (
              <motion.span
                key={id}
                variants={spanVar}
                initial="visible"
                whileHover="hover"
                animate="animate"
              >
                {letter}
              </motion.span>
            ))}
          </h1>
          <div className="container">
            {All.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.1,
                  opacity: 0.6,
                  duration: 0,
                }}
                className={`grid_item_${index}`}
                onClick={() => {
                  setOpen(!open);
                  setProjData(item);
                }}
              >
                <motion.img
                  initial={{
                    scale: 1,
                    zIndex: 1,
                  }}
                  whileHover={{
                    scale: 1.2,
                    opacity: 0.4,
                    zIndex: 0,
                    transition: {
                      ...defaultTransitions,
                      ease: "easeInOut",
                      duration: 0.5,
                    },
                  }}
                  src={item.img}
                  alt=""
                />
                <motion.span
                  initial={{
                    scale: 1,
                    zIndex: 0,
                  }}
                  whileHover={{
                    zIndex: 1,
                    opacity: 1,
                    transition: {
                      ...defaultTransitions,
                      ease: "easeInOut",
                      duration: 0.5,
                    },
                  }}
                >
                  {item.title}
                </motion.span>
              </motion.div>
            ))}
          </div>
        </div>
        {open && <ProjectPage open={open} setOpen={setOpen} data={projData} />}
      </div>
    </>
  );
};

export default Portfolio;
