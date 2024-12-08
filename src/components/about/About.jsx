import "./about.scss";
import { School, CalendarToday } from "@material-ui/icons";
import { motion } from "framer-motion";

const About = () => {
  const spanVar = {
    visible: { opacity: 1 },
    hover: {
      fontSize: "25px",
    },
  };


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
                  <span>J P Morgan Chase & Co -- SDE I</span>
                  <span className="time">Feb'23 -- Present</span>{" "}
                </div>
                <div className="exp_desc">
                  <span className="description">
                    Implemented Spring Batch workflows, Spring Boot, and React
                    applications to optimize ETL pipelines and backend
                    efficiency, reducing response time by more than 25%.
                  </span>
                  <span className="description">
                    Took complete ownership of 3 end-to-end applications,
                    delivering them under critical deadlines, which resulted in
                    a 90% reduction in manual intervention.
                  </span>
                  <span className="description">
                    Worked on the automation and modernization of 13 projects,
                    streamlining 40% of Chase’s existing processes.
                  </span>
                  <span className="description">
                    Recognized by the MD for developing an application that
                    reduced manual intervention, saving 70+ hours of work
                    monthly.
                  </span>
                </div>
                <div className="exp2">
                  <div className="exp_title">
                    <span>Awiskar Tech -- Full Stack Developer</span>
                    <span className="time">Aug'22 -- Jan'23</span>
                  </div>
                  <div className="exp_desc">
                    <span className="description">
                      Developed a full‑stack e‑commerce platform for a
                      diagnostics, connecting users to their services, resulting
                      in a 30% increase in bookings.
                    </span>
                  </div>
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
