import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Testimonials from './components/Testimonials';
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <div className="font-sans scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
