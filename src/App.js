import Contact from './components/contact/Contact'
import Intro from './components/intro/intro'
import Works from './components/works/works'
import Portfolio from './components/portfolio/portfolio'
import Skills from './components/skills/Skills'
import LiquidSwipe from 'react-liquidswipe'
import About from './components/about/About'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Loader from './components/loader/Loader'
function App() {
  const [loading, isLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      isLoading(false)
    }, 1500)
  }, [])
  return (
    <>
      {loading === true ? (
        <Loader />
      ) : (
        <motion.div className='app'>
          <LiquidSwipe
            components={[
              <Intro />,
              <About />,
              <Skills />,
              <Portfolio />,
              <Works />,
              <Contact />,
            ]}
            style={{
              height: '97.6vh',
              width: '99vw',
              borderRadius: '20px',
            }}
          />
        </motion.div>
      )}
    </>
  )
}

export default App
