import { Image } from '../utils/images'

export default function Hero() {
  return (
    <section className='my-24'>
      <div className='mx-auto text-center my-20'>
        <h1 className='font-playfairDisplay text-6xl md:text-7xl font-medium text-textDark'>
          Make <span className='font-playfairDisplay italic'>your home</span> an
          ode to joy
        </h1>
        <p className='font-outfit mt-6 max-w-[800px] mx-auto text-xl font-light text-textLight'>
          We turn your empty house to a lovely home, making the compact spaces
          with sapce saving furnitures. Making the unique tastes of yours into
          reality!
        </p>
      </div>
      <div
        className='w-full h-[600px] bg-cover bg-center bg-no-repeat'
        style={{ backgroundImage: `url(${Image.HeroImage})` }}
      >
        {/* <img src={Image.HeroImage} alt='Hero Image' /> */}
      </div>
    </section>
  )
}
