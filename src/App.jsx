import AboutUs from './components/AboutUs'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Header from './components/Header'
import Hero from './components/Hero'
import Metrics from './components/Metrics'
import Pricing from './components/Pricing'
import Services from './components/Services'

export default function App() {
  return (
    <>
      <div className='bg-bgPrimary'>
        <div className='pt-px'>
          <div className='px-4 md:px-8'>
            <Header />
          </div>
        </div>
        <Hero />
        <main className='container px-3 sm:px-10 pb-10'>
          <AboutUs />
          <Metrics />
          <Services />
          <Gallery />
          <Pricing />
          <Footer />
        </main>
      </div>
    </>
  )
}
