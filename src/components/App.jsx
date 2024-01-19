import Navbar from './Navbar'
import Hero from './Hero'
import Content from './Content'
import Contact from './Contact'
import Footer from './Footer'
import { data } from '../assets/websiteData/data.js'
import '../styles/CommonStyles.scss'

function App() {
  return (
    <div className="app">
      <Navbar data={ data.navbar } />
      <Hero data={ data.heroSection } />
      <Content data={ data.contentSection } />
      <Contact data={ data.contactSection } />
      <Footer>
        <Navbar data={ data.navbar } />
      </Footer>
    </div>
  )
}
export default App