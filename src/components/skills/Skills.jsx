import { motion } from "framer-motion";
import "./skills.scss";

const Skills = () => {
  const skills = [
    ["React Js", "85%", "react"],
    ["Spring", "85%", "spring", "spring-original-wordmark"],
    ["AWS", "85%", "amazonwebservices", "amazonwebservices-plain-wordmark"],
    ["Java", "70%", "java"],
    ["SQL / MongoDB ", "85%", "mysql"],
    ["JavaScript", "80%", "javascript"],
    ["Node Js", "80%", "nodejs"],
    ["Python", "90%", "python"],
    ["HTML5", "80%", "html5"],
    ["CSS3  ", "80%", "css3"],
  ];

  const defaultTransitions = {
    ease: [0.43, 0.13, 0.23, 0.96],
  };

  const spanVar = {
    visible: { opacity: 1 },
    hover: {
      fontSize: "36px",
      color: "#042242",
    },
  };

  const t1 = "Skills";
  return (
    <>
      <div className="skills_bg"></div>
      <div className="skills">
        <div className="header">
          <h1 className="h_title">
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
        </div>

        <div className="content">
          {skills.map((s, i) => (
            <div className="skills_data">
              <div className="title">
                <h2>{s[0]}</h2>
                <img
                  className="icon"
                  src={
                    s.length > 3
                      ? `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${s[2]}/${s[3]}.svg`
                      : `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${s[2]}/${s[2]}-original.svg`
                  }
                  alt="icon"
                />
              </div>
              <div className="bar">
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    transition: {
                      ...defaultTransitions,
                      duration: 1,
                    },
                  }}
                  className={s[2]}
                ></motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
