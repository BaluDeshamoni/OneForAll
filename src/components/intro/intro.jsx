import { useEffect } from 'react'
import { useRef } from 'react'
import { init } from 'ityped'
import { GitHub, Code, LinkedIn } from '@material-ui/icons'
import './intro.scss'
import { motion } from 'framer-motion'

const Intro = ({ setCurrentSlide }) => {
  const textref = useRef()

  const defaultTransitions = {
    ease: [0.43, 0.13, 0.23, 0.96],
  }
  const dur = [1.2, 1.2, 2.1, 2.4, 2.6, 2.9, 3.1, 3.3]

  const transitionDelay = 0.5

  useEffect(() => {
    init(textref.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        'Full Stack Dev',
        'Codaholic',
        'React/React Native Dev',
        'Enthusiastic Programmer',
      ],
    })
  }, [])

  const t1 = "Hi there , I'm "
  const t2 = 'Balu Deshamoni'
  const t3 = ' I design & build beautiful websites'

  const spanVar1 = {
    visible: { opacity: 1 },
    hover: {
      fontSize: '25px',
      color: '#2997d6',
    },
  }
  const spanVar = {
    visible: { opacity: 1 },
    hover: {
      fontSize: '40px',
      color: '#2997d6',
    },
  }

  return (
    <motion.div
      className='intro'
      id='intro'
      initial={{
        opacity: 0.6,
        scale: 0.4,
      }}
      animate={{
        opacity: 1,
        rotate: 360,
        duration: 2,
        scale: 1,
        transition: {
          ...defaultTransitions,
          duration: dur[0],
          delay: transitionDelay,
        },
      }}
    >
      <motion.div className='bg'></motion.div>
      <motion.div className='left'>
        <motion.div className='imagecontainer'>
          <motion.img
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                ...defaultTransitions,
                duration: dur[1],
                delay: transitionDelay,
              },
            }}
            src='assets/balu9.jpg'
            alt=''
          />
        </motion.div>
      </motion.div>
      <motion.div className='right'>
        <motion.div className='wrapper'>
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
                duration: dur[2],
                delay: transitionDelay,
              },
            }}
            className='icons'
          >
            <motion.a
              whileHover={{
                y: [0, 5, -5, 8, -8, 0],
              }}
              href='https://github.com/BaluDeshamoni'
              target='_blank'
              rel='noreferrer'
            >
              <GitHub />
            </motion.a>
            <motion.a
              whileHover={{
                y: [0, 5, -5, 8, -8, 0],
              }}
              href='https://auth.geeksforgeeks.org/user/baludeshamoni/practice'
              target='_blank'
              rel='noreferrer'
            >
              <Code />
            </motion.a>
            <motion.a
              whileHover={{
                y: [0, 5, -5, 8, -8, 0],
              }}
              href='https://www.linkedin.com/in/balu-deshamoni-a4439322a/'
              target='_blank'
              rel='noreferrer'
            >
              <LinkedIn />
            </motion.a>
          </motion.div>
          <motion.h2
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                ...defaultTransitions,
                duration: dur[3],
                delay: transitionDelay,
              },
            }}
          >
            {t1.split('').map((letter, id) => (
              <motion.span
                key={id}
                variants={spanVar1}
                initial='visible'
                whileHover='hover'
              >
                {letter}
              </motion.span>
            ))}
          </motion.h2>
          <motion.h1
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                ...defaultTransitions,
                duration: dur[4],
                delay: transitionDelay,
              },
            }}
          >
            {t2.split('').map((letter, id) => (
              <motion.span
                key={id}
                variants={spanVar}
                initial='visible'
                whileHover='hover'
              >
                {letter}
              </motion.span>
            ))}
          </motion.h1>
          <motion.h3
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                ...defaultTransitions,
                duration: dur[5],
                delay: transitionDelay,
              },
            }}
          >
            <span ref={textref}></span>
          </motion.h3>
          <motion.h2
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                ...defaultTransitions,
                duration: dur[3],
                delay: transitionDelay,
              },
            }}
          >
            {t3.split('').map((letter, id) => (
              <motion.span
                key={id}
                variants={spanVar1}
                initial='visible'
                whileHover='hover'
              >
                {letter}
              </motion.span>
            ))}
          </motion.h2>

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
                duration: dur[7],
                delay: transitionDelay,
              },
            }}
            className='buttons'
          >
            <a href='assets/Balu_Resume.pdf' download='balu resume.pdf'>
              <button className='but'>Get Resume</button>
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Intro
