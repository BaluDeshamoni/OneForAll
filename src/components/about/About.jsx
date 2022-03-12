import './about.scss'
import { Work, WorkOutline, School, CalendarToday } from '@material-ui/icons'
import { motion } from 'framer-motion'

const About = () => {
  const defaultTransitions = {
    ease: [0.43, 0.13, 0.23, 0.96],
  }
  const d1 = 2
  const d2 = 0

  const spanVar = {
    visible: { opacity: 1 },
    hover: {
      fontSize: '25px',
      color: '#bdc9d3',
    },
  }

  const t1 = 'My Intro'
  const t2 = 'Qualifications'

  return (
    <motion.div className='about'>
      <div className='play'>
        <span>Drag</span>
        <span>Play</span>
      </div>
      <motion.div className='bg'></motion.div>
      <motion.div className='left'>
        <motion.div className='wrapper'>
          <motion.div className='header'>
            <motion.h1 className='title'>
              {t1.split('').map((letter, id) => (
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
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              scale: 0,
              x: -500,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
              transition: {
                ...defaultTransitions,
                duration: d1,
                delay: d2,
              },
            }}
            className='image'
          >
            <img src='assets/balu1.jpg' alt='' />
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              scale: 0,
              y: 500,
            }}
            animate={{
              y: 0,
              opacity: 1,
              scale: 1,
              transition: {
                ...defaultTransitions,
                duration: d1,
                delay: d2,
              },
            }}
            className='info'
          >
            <div className='boxes'>
              <div className='box'>
                <div className='items'>
                  <Work fontSize='small' style={{ paddingRight: '6px' }} />
                  <h4>Completed</h4>
                </div>
                <span>5 projects</span>
              </div>
              <div className='box'>
                <div className='items'>
                  <WorkOutline
                    fontSize='small'
                    style={{ paddingRight: '6px' }}
                  />
                  <h4>Working</h4>
                </div>

                <span>5 projects</span>
              </div>
            </div>
            <span className='description'>
              Full stack developer, I create user friendly web sites.
              Enthusiastic Programmer , Developer , Codaholic.
            </span>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div className='right'>
        <div className='wrapper'>
          <motion.div
            initial={{
              opacity: 0,
              scale: 0,
              y: -500,
            }}
            animate={{
              y: 0,
              opacity: 1,
              scale: 1,
              transition: {
                ...defaultTransitions,
                duration: d1,
                delay: d2,
              },
            }}
            className='qualifications'
          >
            <School
              fontSize='large'
              style={{ color: 'black', paddingRight: '12px' }}
            />
            Education
          </motion.div>
          <div className='data'>
            <div className='dat'>
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0,
                  x: -500,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                  scale: 1,
                  transition: {
                    ...defaultTransitions,
                    duration: d1,
                    delay: d2,
                  },
                }}
                className='qua_data'
              >
                <div className='cover'>
                  <h3 className='title'>BE-Information Technology</h3>
                  <span>Chaitanya Bharathi Institue Of Technology</span>
                  <div className='calendar'>
                    <CalendarToday fontSize='small' />
                    2019- 2023
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0,
                  x: 500,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                  scale: 1,
                  transition: {
                    ...defaultTransitions,
                    duration: d1,
                    delay: d2,
                  },
                }}
                className='qua_data'
              >
                <div className='cover'>
                  <h3 className='title'>Intermediate</h3>
                  <span>Narayana Junior college</span>
                  <div className='calendar'>
                    <CalendarToday fontSize='small' />
                    2017- 2019
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0,
                  x: -500,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                  scale: 1,
                  transition: {
                    ...defaultTransitions,
                    duration: d1,
                    delay: d2,
                  },
                }}
                className='qua_data'
              >
                <div className='cover'>
                  <h3 className='title'>Schooling</h3>
                  <span>Narayana Concept School</span>
                  <div className='calendar'>
                    <CalendarToday fontSize='small' />
                    2011- 2017
                  </div>
                </div>
              </motion.div>
            </div>
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
                  duration: 2.5,
                },
              }}
              className='liner'
            >
              <div className='round'></div>
              <div className='line'></div>
              <div className='round'></div>
              <div className='line'></div>
              <div className='round'></div>
            </motion.div>
          </div>
          <div className='main'>
            <motion.h1 className='title'>
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
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default About
