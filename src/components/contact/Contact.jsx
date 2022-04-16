import { motion } from 'framer-motion'
import { useRef } from 'react'
import { Phone, Home, Mail, GitHub, Code, LinkedIn } from '@material-ui/icons'
import './contact.scss'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const formRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_jk7bwes',
        'template_sgwu3qv',
        formRef.current,
        'user_QoSY3l6lbcbJY7Zn9h7yk'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }
  const defaultTransitions = {
    ease: [0.43, 0.13, 0.23, 0.96],
  }
  const dur = [1.2, 2.4, 2.9, 3.1, 3.2]

  const spanVar = {
    visible: { opacity: 1 },
    hover: {
      fontSize: '33px',
      color: '#bdc9d3',
    },
  }
  const t1 = 'Contact Me'
  return (
    <motion.div className='c1' id='contact'>
      <motion.div className='c-bg'></motion.div>
      <motion.div className='c-wrapper'>
        <motion.div className='c-left'>
          <motion.h1 className='c-title'>
            {t1.split('').map((letter, id) => (
              <motion.span
                className='spans'
                key={id}
                variants={spanVar}
                initial='visible'
                whileHover='hover'
              >
                {letter}
              </motion.span>
            ))}
          </motion.h1>
          <motion.div className='c-info'>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: 200,
              }}
              animate={{
                x: 0,
                opacity: 1,
                scale: 1,
                transition: {
                  ...defaultTransitions,
                  duration: 2,
                },
              }}
              className='c-info-item'
            >
              <Phone
                fontSize='large'
                style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                }}
              />
              8801136794
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: -200,
              }}
              animate={{
                x: 0,
                opacity: 1,
                scale: 1,
                transition: {
                  ...defaultTransitions,
                  duration: 2.3,
                },
              }}
              className='c-info-item'
            >
              <Mail
                fontSize='large'
                style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                }}
              />
              baludeshamoni@gmail.com
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: 200,
              }}
              animate={{
                x: 0,
                opacity: 1,
                scale: 1,
                transition: {
                  ...defaultTransitions,
                  duration: 2.6,
                },
              }}
              className='c-info-item'
            >
              <Home
                fontSize='large'
                style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                }}
              />
              Hyderabad , Telangana
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: -200,
              }}
              animate={{
                x: 0,
                opacity: 1,
                scale: 1,
                transition: {
                  ...defaultTransitions,
                  duration: 3.1,
                },
              }}
              className='c-info-item'
            >
              <a
                href='https://github.com/BaluDeshamoni'
                target='_blank'
                rel='noreferrer'
              >
                <GitHub
                  fontSize='large'
                  style={{
                    color: 'rgba(255, 255, 255, 0.7)',
                  }}
                />
              </a>
              <a
                href='https://github.com/BaluDeshamoni'
                target='_blank'
                rel='noreferrer'
              >
                GitHub
              </a>
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: 200,
              }}
              animate={{
                x: 0,
                opacity: 1,
                scale: 1,
                transition: {
                  ...defaultTransitions,
                  duration: 3.5,
                },
              }}
              className='c-info-item'
            >
              <a
                href='https://www.linkedin.com/in/balu-deshamoni-a4439322a/'
                target='_blank'
                rel='noreferrer'
              >
                <LinkedIn
                  fontSize='large'
                  style={{
                    color: 'rgba(255, 255, 255, 0.7)',
                  }}
                />
              </a>
              <a
                href='https://www.linkedin.com/in/balu-deshamoni-a4439322a/'
                target='_blank'
                rel='noreferrer'
              >
                LinkedIn
              </a>
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: -200,
              }}
              animate={{
                x: 0,
                opacity: 1,
                scale: 1,
                transition: {
                  ...defaultTransitions,
                  duration: 3.9,
                },
              }}
              className='c-info-item'
            >
              <Code
                fontSize='large'
                style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                }}
              />
              <div className='items'>
                <a
                  href='https://auth.geeksforgeeks.org/user/baludeshamoni/practice'
                  target='_blank'
                  rel='noreferrer'
                >
                  GeeksForGeeks
                </a>
                <a
                  href='https://leetcode.com/BaluDeshamoni/'
                  target='_blank'
                  rel='noreferrer'
                >
                  Leetcode
                </a>
                <a
                  href='https://www.hackerrank.com/baludeshamoni'
                  target='_blank'
                  rel='noreferrer'
                >
                  Hacker rank
                </a>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div className='c-right'>
          <motion.p
            initial={{
              opacity: 0,
              scale: 0,
              x: 200,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
              transition: {
                ...defaultTransitions,
                duration: dur[2],
              },
            }}
            className='c-desc'
          >
            <b>Get in touch .</b> Always available for an interview.
          </motion.p>
          <motion.form
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
                duration: 2,
              },
            }}
            ref={formRef}
            onSubmit={handleSubmit}
            autoComplete='off'
          >
            <input type='text' placeholder='Name' name='user_name' />
            <input type='text' placeholder='Subject' name='user_subject' />
            <input type='text' placeholder='Email' name='user_email' />
            <textarea name='message' placeholder='Message' rows='7'></textarea>
            <button>Submit</button>
          </motion.form>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Contact
