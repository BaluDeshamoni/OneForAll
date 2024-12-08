// import { motion } from "framer-motion";
// import { useState } from "react";
// import "./works.scss";

// const Works = () => {
//   const spanVar = {
//     visible: { opacity: 1 },
//     hover: {
//       fontSize: "25px",
//     },
//   };
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const data = [
//     {
//       id: "1",
//       title: "Global Hackathon ‑ J.P.Morgan Chase & Co –",
//       icon: "./assets/globe.png",

//       desc: "Identify roles with Role Validation utility, a platform that helps users determine which roles, among 1,000+, a specific ID is assigned.Automate Agile process : Automate the Jira estimation which decreases planning processes by 45%",
//       tec: ["Node js ", " MongoDB ", " React", " Redux", " Express "],
//       category: "Full Stack",
//     },
//     {
//       id: "2",
//       title:
//         "Global Security Online Tracking system ( G‑SOTS ) ‑ Sepathon , J.P.Morgan Chase & Co ",
//       icon: "./assets/globe.png",

//       desc: " • Request, track, and manage services through an online system developed for JPMC’s Global Security, reducing efforts by over 65% compared to the previous mail‑based process",
//       tec: ["Node js ", " MongoDB ", " React", " Redux", " Express "],
//     },
//     {
//       id: "3",
//       title: "Rewards Application ‑ J.P.Morgan Chase & Co",
//       icon: "./assets/globe.png",
//       img: "assets/recommendation.png",
//       desc: "Monitored and managed earned points seamlessly,with reward points ranging from 100 to 30,000; streamlined user experience led to a significant increase in customer engagement within the platform.",
//       tec: ["Python ", " Machine Learning", " React", " Redux", " Firebase "],
//     },
//     {
//       id: "4",
//       title: "Food Bank ‑ Code For Good ‑ J.P.Morgan Chase & Co (Hackathon) ",
//       icon: "./assets/globe.png",
//       img: "assets/recommendation.png",
//       desc: "Raised awareness for 30 food donation programs by creating an informative application for NGOs.Designed a user‑friendly donation interface and campaign admin panel which increased user engagement .",
//       tec: ["Python ", " Machine Learning", " React", " Redux", " Firebase "],
//     },
//   ];

//   const handleClick = (way) => {
//     way === "left"
//       ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 3)
//       : setCurrentSlide(currentSlide < 3 ? currentSlide + 1 : 0);
//   };
//   const defaultTransitions = {
//     ease: [0.43, 0.13, 0.23, 0.96],
//   };

//   const t1 = "Recent Works";

//   return (
//     <>
//       <div className="works_bg"></div>
//       <div className="works" id="works">
//         <div className="title">
//           <h1>
//             {t1.split("").map((letter, id) => (
//               <motion.span
//                 key={id}
//                 variants={spanVar}
//                 initial="visible"
//                 whileHover="hover"
//               >
//                 {letter}
//               </motion.span>
//             ))}
//           </h1>
//         </div>
//         <div
//           className="slider"
//           style={{
//             transform: `translateX(-${currentSlide * 100}vw)`,
//             transition: "all 1s ease",
//           }}
//         >
//           {data.map((d) => (
//             <div className="container">
//               <div className="item">
//                 <div className="left">
//                   <div className="leftcontainer">
//                     <div className="imgcontainer">
//                       {/* <img src={d.icon} alt="" /> */}
//                       <h2>{d.title}</h2>
//                     </div>
//                     {/* <p>{d.desc}</p> */}

//                     <p> Tech stack : {d.tec}</p>
//                   </div>
//                 </div>
//                 <div className="right">
//                   {/* <img src={d.img} alt="" /> */}
//                   <p>{d.desc}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div>
//           <motion.img
//             initial={{
//               opacity: 0,
//               rotate: 180,
//               scale: 0,
//               x: -400,
//             }}
//             animate={{
//               opacity: 1,
//               x: 0,
//               scale: 1,
//               transition: {
//                 ...defaultTransitions,
//                 duration: 1,
//               },
//             }}
//             src="assets/arrow.png"
//             className="arrow left"
//             alt=""
//             onClick={() => handleClick("left")}
//           />
//         </div>
//         <div>
//           <motion.img
//             initial={{
//               opacity: 0,
//               scale: 0,
//               x: 400,
//             }}
//             animate={{
//               x: 0,
//               opacity: 1,
//               scale: 1,
//               transition: {
//                 ...defaultTransitions,
//                 duration: 1,
//               },
//             }}
//             src="assets/arrow.png"
//             className="arrow right"
//             alt=""
//             onClick={() => handleClick("right")}
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Works;

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
      title: "Global Hackathon",
      desc: " • Identify roles with Role Validation utility, a platform that helps users determine which roles, among 1,000+, a specific ID is assigned.",
      desc1:
        " • Automate Agile process : Automate the Jira estimation which decreases planning processes by 45%",
      tec: " Spring Boot , React , Python , Postgres ",
    },
    {
      id: "2",
      title: "Global Security Online Tracking system - GSOTS (Sepathon)",
      desc: " • Request, track, and manage services through an online system developed for JPMC’s Global Security, reducing efforts by over 65% compared to the previous mail‑based process",
      tec: " Spring Boot , React , Postgres ",
    },
    {
      id: "3",
      title: "Rewards Application ",
      desc: " • Monitored and managed earned points seamlessly,with reward points ranging from 100 to 30,000",
      desc1:
        " • streamlined user experience led to a significant increase in customer engagement within the platform.",
      tec: " Spring Boot , React ",
    },
    {
      id: "4",
      title: "Food Bank ‑ Code For Good (Hackathon) ",
      desc: " • Raised awareness for 30 food donation programs by creating an informative application for NGOs.",
      desc1:
        " • Designed a user‑friendly donation interface and campaign admin panel which increased user engagement .",
      tec: " React , Node Js , MongoDB ",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 3)
      : setCurrentSlide(currentSlide < 3 ? currentSlide + 1 : 0);
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
                      <img src="assets/jpmc.jpeg" alt="" />
                    </div>
                  </div>
                </div>
                <div className="right">
                  <h1>{d.title}</h1>
                  <p>{d.desc}</p>
                  {d.desc1 && <p>{d.desc1}</p>}
                  <h3>Tech stack :{d.tec}</h3>
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
