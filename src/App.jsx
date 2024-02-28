import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import WorkEx from "./components/WorkEx"

function App() {

  return (
    <div className="inter antialiased text-gray-900">
      <div className="container mx-auto px-5 sm:px-10 md:px-16 lg:px-20 xl:px-32 2xl:px-56">
        <Navbar />
        <Hero />
        <WorkEx />
        <Projects />
        <Contact />
        <Navbar />
        <Footer />
      </div>
    </div>
  )
}

export default App
