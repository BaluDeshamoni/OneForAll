import "./about.scss";
import { Work, WorkOutline, School, CalendarToday } from "@material-ui/icons";
import { motion } from "framer-motion";

const About = () => {
  const spanVar = {
    visible: { opacity: 1 },
    hover: {
      fontSize: "25px",
    },
  };

  const t1 = "About Me";
  const t2 = "Qualifications";
  const t3 = "Experience";

  return (
    <>
      <div className="about_bg"></div>
      <div className="about">
        <div className="play">
          <span>Drag</span>
          <span>Play</span>
        </div>
        <div className="left">
          <div className="wrapper">
            <div className="header">
              <h1 className="title">
                {t1.split("").map((letter, id) => (
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
            </div>

            <div className="about_me">
              <span className="description">
                I am a passionate coder , Full stack and React developer , an
                avid learner with great passion for technology and love to
                explore new domains and build innovative solutions.
              </span>
            </div>
            <div className="exp">
              <h1 className="title">
                {t3.split("").map((letter, id) => (
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
              <div className="exp1">
                <div className="exp_title">
                  <span>Awiskar Tech</span>
                  <span className="time">Aug 2022</span>
                </div>
                <div className="exp_desc">
                  <span className="description">
                    Developing an ecommerce application for clients to connect
                    people with the services provided by their diagnostics.
                  </span>
                </div>
              </div>
              <div className="exp2">
                <div className="exp_title">
                  <span>Shape AI</span>
                  <span className="time">Jul 2021</span>{" "}
                </div>
                <div className="exp_desc">
                  <span className="description">
                    Developed an application using react js from scratch which
                    is similar to a dashboard where day to day tasks are
                    monitored
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="wrapper">
            <div className="data">
              <div className="dat">
                <div className="qua_data">
                  <div className="cover">
                    <h3 className="title">BE-Information Technology</h3>
                    <span>Chaitanya Bharathi Institue Of Technology</span>
                    <div className="calendar">
                      <CalendarToday fontSize="small" />
                      <div>2019- 2023</div>
                      <div style={{ color: "rgb(176, 196, 222)" }}>GPA:8.7</div>
                    </div>
                  </div>
                </div>
                <div className="qua_data">
                  <div className="cover">
                    <h3 className="title">Intermediate</h3>
                    <span>Narayana Junior college</span>
                    <div className="calendar">
                      <CalendarToday fontSize="small" />
                      <div>2017- 2019</div>
                      <div style={{ color: "rgb(176, 196, 222)" }}>
                        GPA:9.65
                      </div>
                    </div>
                  </div>
                </div>
                <div className="qua_data">
                  <div className="cover">
                    <h3 className="title">Schooling</h3>
                    <span>Narayana Concept School</span>
                    <div className="calendar">
                      <CalendarToday fontSize="small" />
                      <div>2011- 2017</div>
                      <div style={{ color: "rgb(176, 196, 222)" }}>GPA:9.8</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="liner">
                <div className="round"></div>
                <div className="line"></div>
                <div className="round"></div>
                <div className="line"></div>
                <div className="round"></div>
              </div>
            </div>
            <div className="main">
              <School
                fontSize="large"
                style={{ color: "rgb(245, 255, 250)", paddingRight: "12px" }}
              />
              <h1 className="title">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
