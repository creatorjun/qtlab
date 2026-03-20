// src/App.jsx

import Navbar from './presentation/components/Navbar'
import Hero from './presentation/components/Hero'
import About from './presentation/components/About'
import Career from './presentation/components/Career'
import Projects from './presentation/components/Projects'
import Skills from './presentation/components/Skills'
import Contact from './presentation/components/Contact'

export default function App() {
  return (
    <div className="bg-[#0a0a0f] text-gray-100 font-sans antialiased">
      <Navbar />
      <Hero />
      <About />
      <Career />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}
