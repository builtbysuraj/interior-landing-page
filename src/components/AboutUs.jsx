import { Image } from '../utils/images'

export default function AboutUs() {
  return (
    <section className='mx-auto my-20' id='about-us'>
      <div className='flex items-center justify-between gap-10 flex-col lg:flex-row'>
        <div className=' max-w-[600px] flex-1'>
          <div className='flex items-center gap-4 mb-6'>
            <div className='border-b border-primary w-14'></div>
            <p className='font-outfit text-primary text-xs font-semibold tracking-widest'>
              ABOUT US
            </p>
          </div>
          <div>
            <h2 className='font-playfairDisplay text-5xl md:text-6xl text-textDark mb-6'>
              We help to bring your
              <span className='font-playfairDisplay italic'>
                {' '}
                dream home
              </span>{' '}
              to reality
            </h2>
            <p className='font-outfit text-textLight mb-6 font-light'>
              Bringing Your Vision to Life At Center for human habitat, we are
              dedicated to transforming your ideas into beautifully crafted
              spaces. From concept to completion, we strive to create homes that
              reflect your personality and lifestyle.
            </p>
            <p className='font-outfit text-textLight font-light'>
              We blend innovative design with practical solutions, ensuring
              every detail is tailored to your unique needs. Our team of
              experienced professionals is committed to delivering exceptional
              results, making your dream home a reality. With a focus on
              quality, creativity, and sustainability, we take pride in building
              spaces that are not only aesthetically pleasing but also
              functional and enduring. Let us help you create a home that you
              will cherish for years to come.
            </p>
          </div>
        </div>
        <div className='flex gap-4 max-w-[600px]'>
          <div className=''>
            <img src={Image.AboutUs1} alt='' className='flex-1 mb-[-40px]' />
          </div>
          <div className=''>
            <img src={Image.AboutUs2} alt='' className='flex-1 mt-9' />
          </div>
        </div>
      </div>
    </section>
  )
}
