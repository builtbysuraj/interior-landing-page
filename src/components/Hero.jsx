import { Image } from '../utils/images'

export default function Hero() {
  return (
    <section className='my-24'>
      <div className='mx-auto text-center my-20'>
        <h1 className='font-playfairDisplay text-6xl md:text-7xl font-medium text-textDark'>
          Your key to{' '}
          <span className='font-playfairDisplay italic'>Affordable </span>{' '}
          Living
        </h1>
        <p className='font-outfit mt-6 max-w-[800px] mx-auto text-xl font-light text-textLight'>
          Transforming empty houses into cozy homes with space-saving furniture
          and personalized designs that reflect your unique taste!
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
