import "./projectpage.scss";
import { Close } from "@material-ui/icons";
import VideoPlayer from "react-video-js-player";
import { motion } from "framer-motion";
import { ArrowRight } from "@material-ui/icons";

const ProjectPage = ({ open, setOpen, data }) => {
  const defaultTransitions = {
    ease: [0.43, 0.13, 0.23, 0.96],
  };

  const transitionDelay = 0;
  const spanVar1 = {
    visible: { opacity: 1 },
    hover: {
      fontSize: "25px",
      color: "#bdc9d3",
    },
  };

  const t1 = data.title;
  return (
    <div className={"project_outer " + (open && "active")}>
      <motion.div
        className={"project"}
        initial={{
          y: -700,
          opacity: 0.7,
          scale: 1,
        }}
        animate={{
          y: 0,
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.5,
            delay: transitionDelay,
          },
        }}
      >
        <div className="main_top">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0,
              x: -1000,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
              transition: {
                ...defaultTransitions,
                duration: 1.8,
                delay: 0.5,
              },
            }}
            className="title"
          >
            <motion.h1>
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
            </motion.h1>
          </motion.div>
          <div className="back">
            <Close onClick={() => setOpen(!open)} />
          </div>
        </div>
        <div className="content">
          <div className="wrapper">
            <div className="top">
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
                    duration: 1.4,
                    delay: 0.8,
                  },
                }}
                className="video"
              >
                {data.video === "no" ? (
                  <div className="not">
                    <img src={data.img} alt="" />
                    <span>No Video For This Project</span>
                  </div>
                ) : data.video === "working" ? (
                  <div className="not">
                    <img src={data.img} alt="" />
                    <span>Project Is Under Development</span>
                  </div>
                ) : (
                  <VideoPlayer
                    className="vid"
                    src={data.video}
                    poster={data.img}
                    playbackRates={[0.5, 1, 1.5, 2]}
                  />
                )}
              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0,
                  x: 1000,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                  scale: 1,
                  transition: {
                    ...defaultTransitions,
                    duration: 2,
                    delay: 1,
                  },
                }}
                className="right"
              >
                <div className="demo">
                  {data.demo && (
                    <a href={data.demo} target="_blank" rel="noreferrer">
                      <span>View Online</span>
                    </a>
                  )}
                </div>
                <div className="tec">
                  <div className="title1">
                    <span>Technologies Used:</span>
                  </div>
                  <div className="data">
                    {data.tec.map((dat) => (
                      <div className="cont">
                        <ArrowRight fontSize="large" />
                        <span>{dat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: -1000,
              }}
              animate={{
                x: 0,
                opacity: 1,
                scale: 1,
                transition: {
                  ...defaultTransitions,
                  duration: 2,
                  delay: 1.5,
                },
              }}
              className="des"
            >
              {data.desc}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectPage;
