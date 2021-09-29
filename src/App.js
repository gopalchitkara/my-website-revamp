import Hero from 'components/Hero'
import MenuBar from 'components/MenuBar'
import Work from 'components/mainPage/Work/Work'
import React from 'react'
import ShowcaseProjects from 'components/mainPage/ShowcaseProjects/ShowcaseProjects'
import Footer from 'components/Footer'
import './styles/CommonStyles.scss'

function App() {
  return (
    <div className="App">
      <MenuBar />
      <Hero />
      <Work />
      <ShowcaseProjects />
      <Footer />
    </div>
  )
}

export default App
