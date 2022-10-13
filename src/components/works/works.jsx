import { motion } from "framer-motion";
import { useState } from "react";
import "./works.scss";

const Works = () => {
  const spanVar = {
    visible: { opacity: 1 },
    hover: {
      fontSize: "25px",
    },
  };
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      title: "Rise Of Devs",
      icon: "./assets/globe.png",
      img: "./assets/dev.png",
      desc: "  A MERN-stack web application which is a platform for the developers all around the world.Users can post their idea , can also view and comment on other developers ideas.",
      tec: ["Node js ", " MongoDB ", " React", " Redux", " Express "],
      category: "Full Stack",
      demo: "http://riseofdevs.herokuapp.com/post",
    },
    {
      id: "2",
      title: "Give Away",
      icon: "./assets/globe.png",
      img: "assets/eco.jpeg",
      desc: " It is a full-stack shopping web application where all variety of products are available.Here we have an admin page for organizing orders and adding products.",
      tec: ["Node js ", " MongoDB ", " React", " Redux", " Express "],
      category: "Full Stack",
      demo: "https://giveawayapp153.herokuapp.com/",
    },
    {
      id: "3",
      title: "Student Recommendation",
      icon: "./assets/globe.png",
      img: "assets/recommendation.png",
      desc: "An application which recommends courses,books and internships for students.Recommendations are given based on the user priorities",
      tec: ["Python ", " Machine Learning", " React", " Redux", " Firebase "],
      category: "Others",
      demo: "https://share.streamlit.io/baludeshamoni/student_recommendations/main/student_Recommendations.py",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < 2 ? currentSlide + 1 : 0);
  };
  const defaultTransitions = {
    ease: [0.43, 0.13, 0.23, 0.96],
  };

  const t1 = "Recent Works";

  return (
    <>
      <div className="works_bg"></div>
      <div className="works" id="works">
        <div className="title">
          <h1>
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
        <div
          className="slider"
          style={{
            transform: `translateX(-${currentSlide * 100}vw)`,
            transition: "all 1s ease",
          }}
        >
          {data.map((d) => (
            <div className="container">
              <div className="item">
                <div className="left">
                  <div className="leftcontainer">
                    <div className="imgcontainer">
                      <img src={d.icon} alt="" />
                      <h2>{d.title}</h2>
                    </div>
                    <p>{d.desc}</p>
                    <a href={d.demo} target="_blank" rel="noreferrer">
                      Demo
                    </a>
                  </div>
                </div>
                <div className="right">
                  <img src={d.img} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <motion.img
            initial={{
              opacity: 0,
              rotate: 180,
              scale: 0,
              x: -400,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
              transition: {
                ...defaultTransitions,
                duration: 1,
              },
            }}
            src="assets/arrow.png"
            className="arrow left"
            alt=""
            onClick={() => handleClick("left")}
          />
        </div>
        <div>
          <motion.img
            initial={{
              opacity: 0,
              scale: 0,
              x: 400,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
              transition: {
                ...defaultTransitions,
                duration: 1,
              },
            }}
            src="assets/arrow.png"
            className="arrow right"
            alt=""
            onClick={() => handleClick("right")}
          />
        </div>
      </div>
    </>
  );
};

export default Works;
