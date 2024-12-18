import AboutUs from './components/AboutUs'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Header from './components/Header'
import Hero from './components/Hero'
import Metrics from './components/Metrics'
import Services from './components/Services'

export default function App() {
  return (
    <main className='container px-3 sm:px-10 pb-10'>
      <Header />
      <Hero />
      <AboutUs />
      <Metrics />
      <Services />
      <Gallery />
      <Footer />
    </main>
  )
}
