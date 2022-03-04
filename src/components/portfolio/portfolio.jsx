import { useState } from 'react'
import './portfolio.scss'
import { All } from '../../data'
import { motion } from 'framer-motion'
import ProjectPage from '../projectPage/ProjectPage'

const Portfolio = () => {
  const [projData, setProjData] = useState([])
  const spanVar = {
    visible: { opacity: 1 },
    hover: {
      fontSize: '32px',
      color: 'rgb(243, 204, 204)',
    },
  }
  const defaultTransitions = {
    ease: [0.43, 0.13, 0.23, 0.96],
  }
  const dur = [1.2, 2, 2.4, 2.9, 2.9, 3.1]

  const t1 = 'Portfolio'

  const [open, setOpen] = useState(false)

  return (
    <div>
      <motion.div className='portfolio' id='portfolio'>
        <motion.div className='bg'></motion.div>
        <motion.h1>
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
        </motion.h1>
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
              duration: dur[4],
            },
          }}
          className='container'
        >
          {All.map((item, index) => (
            <motion.div
              key={index}
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
                },
              }}
              whileHover={{
                scale: 1.1,
                opacity: 0.6,
                duration: 0,
              }}
              className={`grid_item_${index}`}
              onClick={() => {
                setOpen(!open)
                setProjData(item)
              }}
            >
              <motion.img
                initial={{
                  scale: 1,
                  zIndex: 1,
                }}
                whileHover={{
                  scale: 1.2,
                  opacity: 0.4,
                  zIndex: 0,
                  transition: {
                    ...defaultTransitions,
                    ease: 'easeInOut',
                    duration: 0.5,
                  },
                }}
                src={item.img}
                alt=''
              />
              <motion.span
                initial={{
                  scale: 1,
                  zIndex: 0,
                }}
                whileHover={{
                  zIndex: 1,
                  opacity: 1,
                  transition: {
                    ...defaultTransitions,
                    ease: 'easeInOut',
                    duration: 0.5,
                  },
                }}
              >
                {item.title}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      {open && <ProjectPage open={open} setOpen={setOpen} data={projData} />}
    </div>
  )
}

export default Portfolio
