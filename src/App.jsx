
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Steps from './components/Steps'
import Peer2Peer from './components/Peer2Peer'
import Discord from './components/Discord'
import Footer from './components/Footer'
import BackToTopButton from './components/BackToTopButton'
import ViewMarket from './components/ViewMarket'


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ViewMarket />
      <Steps />
      <Peer2Peer />
      <Discord />
      <BackToTopButton />
      <Footer />
    </div>
  )
}

export default App