import { motion } from "framer-motion";
import { useRef } from "react";
import { Home, Mail, GitHub, LinkedIn } from "@material-ui/icons";
import "./contact.scss";
import emailjs from "@emailjs/browser";
import { SiLeetcode, SiGeeksforgeeks, SiHackerrank } from "react-icons/si";

const Contact = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jk7bwes",
        "template_sgwu3qv",
        formRef.current,
        "user_QoSY3l6lbcbJY7Zn9h7yk"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const spanVar = {
    visible: { opacity: 1 },
    hover: {
      fontSize: "25px",
    },
  };
  const t1 = "Contact Me";
  return (
    <>
      <div className="contact_bg"></div>
      <div className="c1" id="contact">
        <h1 className="c-title">
          {t1.split("").map((letter, id) => (
            <motion.span
              className="spans"
              key={id}
              variants={spanVar}
              initial="visible"
              whileHover="hover"
            >
              {letter}
            </motion.span>
          ))}
        </h1>
        <div className="c-wrapper">
          <div className="c-left">
            <div className="c-info">
              <div className="c-info-item">
                <Mail
                  fontSize="large"
                  style={{
                    color: "rgba(255, 255, 255, 0.7)",
                  }}
                />
                baludeshamoni@gmail.com
              </div>
              <div className="c-info-item">
                <Home
                  fontSize="large"
                  style={{
                    color: "rgba(255, 255, 255, 0.7)",
                  }}
                />
                Hyderabad , Telangana
              </div>

              <div className="c-info-item">
                <a
                  href="https://github.com/BaluDeshamoni"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHub
                    fontSize="large"
                    style={{
                      color: "rgba(255, 255, 255, 0.7)",
                    }}
                  />
                </a>
                <a
                  href="https://github.com/BaluDeshamoni"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
              <div className="c-info-item">
                <a
                  href="https://www.linkedin.com/in/balu-deshamoni-a4439322a/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedIn
                    fontSize="large"
                    style={{
                      color: "rgba(255, 255, 255, 0.7)",
                    }}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/balu-deshamoni-a4439322a/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>
              <div className="c-info-item">
                <a
                  href="https://auth.geeksforgeeks.org/user/baludeshamoni/practice"
                  target="_blank"
                  rel="noreferrer"
                >
                  <SiGeeksforgeeks
                    className="si_icons"
                    style={{
                      color: "rgba(255, 255, 255, 0.7)",
                    }}
                  />
                </a>
                <a
                  href="https://auth.geeksforgeeks.org/user/baludeshamoni/practice"
                  target="_blank"
                  rel="noreferrer"
                >
                  GeeksForGeeks
                </a>
              </div>
              <div className="c-info-item">
                <a
                  href="https://leetcode.com/BaluDeshamoni/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <SiLeetcode
                    className="si_icons"
                    style={{
                      color: "rgba(255, 255, 255, 0.7)",
                    }}
                  />
                </a>
                <a
                  href="https://leetcode.com/BaluDeshamoni/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Leetcode
                </a>
              </div>
              <div className="c-info-item">
                <a
                  href="https://www.hackerrank.com/baludeshamoni"
                  target="_blank"
                  rel="noreferrer"
                >
                  <SiHackerrank
                    className="si_icons"
                    style={{
                      color: "rgba(255, 255, 255, 0.7)",
                    }}
                  />
                </a>
                <a
                  href="https://www.hackerrank.com/baludeshamoni"
                  target="_blank"
                  rel="noreferrer"
                >
                  Hacker rank
                </a>
              </div>
            </div>
          </div>
          <div className="c-right">
            <p className="c-desc">
              <b className="get">Get in touch .</b> Always available for an
              interview.
            </p>
            <form ref={formRef} onSubmit={handleSubmit} autoComplete="off">
              <input type="text" placeholder="Name" name="user_name" />
              <input type="text" placeholder="Subject" name="user_subject" />
              <input type="text" placeholder="Email" name="user_email" />
              <textarea
                name="message"
                placeholder="Message"
                rows="7"
              ></textarea>
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
