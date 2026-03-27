import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#0a0a0a]"
    >
      <Navbar />
      <main>
        <Hero />
        <div className="mx-auto max-w-6xl px-0">
          <div className="h-px bg-gradient-to-r from-transparent via-[#2a2a2a] to-transparent" />
        </div>
        <About />
        <div className="mx-auto max-w-6xl px-0">
          <div className="h-px bg-gradient-to-r from-transparent via-[#2a2a2a] to-transparent" />
        </div>
        <Skills />
        <div className="mx-auto max-w-6xl px-0">
          <div className="h-px bg-gradient-to-r from-transparent via-[#2a2a2a] to-transparent" />
        </div>
        <Projects />
        <div className="mx-auto max-w-6xl px-0">
          <div className="h-px bg-gradient-to-r from-transparent via-[#2a2a2a] to-transparent" />
        </div>
        <Contact />
      </main>
      <Footer />
    </motion.div>
  )
}
