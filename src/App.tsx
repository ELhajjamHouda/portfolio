import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import { About } from '@/sections/About'
import { Contact } from '@/sections/Contact'
import { Hero } from '@/sections/Hero'
import { Projects } from '@/sections/Projects'
import { Resume } from '@/sections/Resume'

/**
 * Single-page portfolio: sections are composed here; content lives in `src/data/portfolio.ts`.
 */
function App() {
  return (
    <div className="relative min-h-svh transition-colors duration-300">
      <Navbar />
      <main className="relative min-w-0 overflow-x-clip">
        <Hero />
        <About />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
