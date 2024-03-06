import { createContext, useEffect, useState } from "react"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import WorkEx from "./components/WorkEx"

export const ThemeContext = createContext('light');

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, []);

  useEffect(() => {
    if (theme === "light") document.documentElement.classList.remove("dark")
    if (theme === "dark") document.documentElement.classList.add("dark")
  }, [theme]);

  const onThemeChange = () => {
    if (theme === 'light') setTheme('dark')
    if (theme === 'dark') setTheme('light')
    // if (theme === 'dark') setTheme('system')
    // if (theme === 'system') setTheme('light')
  }

  return (
    <div className="inter antialiased transition-all bg-white dark:bg-gray-900 dark:text-gray-100" >
      <div className="container mx-auto px-5 sm:px-10 md:px-16 lg:px-20 xl:px-32 2xl:px-56">
        <ThemeContext.Provider value={theme}>
          <Navbar onThemeChange={onThemeChange} />
          <Hero />
          <WorkEx />
          <Projects />
          <Contact />
          <Navbar />
          <Footer />
        </ThemeContext.Provider>
      </div>
    </div>
  )
}

export default App
