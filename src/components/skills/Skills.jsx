import { motion } from 'framer-motion'
import './skills.scss'

const Skills = () => {
  const skills = [
    ['Python', '90%', 'python'],
    ['React Js', '85%', 'react'],
    ['Node Js', '80%', 'nodejs'],
    ['JavaScript', '80%', 'javascript'],
    ['C++', '85%', 'cplusplus'],
    ['C Language', '85%', 'c'],
    ['Java', '70%', 'java'],
    ['SQL/My SQL', '85%', 'mysql'],
    ['HTML5', '80%', 'html5'],
    ['CSS3  ', '80%', 'css3'],
  ]

  const defaultTransitions = {
    ease: [0.43, 0.13, 0.23, 0.96],
  }

  const spanVar = {
    visible: { opacity: 1 },
    hover: {
      fontSize: '36px',
      color: '#042242',
    },
  }

  const t1 = 'Skills'
  return (
    <motion.div className='skills'>
      <motion.div className='bg'></motion.div>
      <motion.div className='header'>
        <h1 className='h_title'>
          {t1.split('').map((letter, id) => (
            <motion.span
              key={id}
              variants={spanVar}
              initial='visible'
              whileHover='hover'
              animate='animate'
            >
              {letter}
            </motion.span>
          ))}
        </h1>
      </motion.div>

      <motion.div className='content'>
        {skills.map((s) => (
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
                duration: 2,
              },
            }}
            className='skills_data'
          >
            <div className='title'>
              <h5>{s[0]}</h5>
              <img
                className='icon'
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${s[2]}/${s[2]}-original.svg`}
                alt='icon'
              />
              <span>{s[1]}</span>
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
                  duration: 1.2,
                  delay: 0.5,
                },
              }}
              className='bar'
            >
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
                    delay: 0.9,
                  },
                }}
                className={s[2]}
              ></motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Skills
