import { Image } from '../utils/images'

export default function AboutUs() {
  return (
    <section className='mx-auto my-20'>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              fringilla dui amet faucibus nam. Erat id laoreet posuere etiam
              morbi.
            </p>
            <p className='font-outfit text-textLight font-light'>
              Tempor dolor elementum tellus non ipsum faucibus. Justo, magna
              mauris posuere auctor justo. Habitant proin aliquet volutpat leo
              ultricies. Dui blandit eget vitae turpis ultrices aliquet nunc.
              Faucibus sit odio bibendum lobortis diam.
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
