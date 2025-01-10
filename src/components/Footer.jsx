import ContactForm from './ContactForm'

export default function Footer() {
  return (
    <section id='contact-us'>
      <div className='flex gap-10 flex-col md:flex-row'>
        {/* Left */}
        <div className='flex flex-col gap-y-8 flex-1'>
          <h2 className='text-4xl lg:text-5xl font-playfairDisplay max-w-[600px]'>
            Kick-start your dream home with us
          </h2>
          <a
            target='_blank'
            href='https://www.google.com/maps/dir//Centre+for+Human+Habitat/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3bae15a7d824b139:0x5645ab72f0346a20?sa=X&ved=1t:3061&hl=en-GB&ictx=111'
            className='w-fit'
          >
            <div className='max-w-[280px] mt-8'>
              <p className='text-2xl font-playfairDisplay mb-2'>
                Bangalore, India
              </p>
              <p className=' text-textDark font-light text-sm font-outfit'>
                #280, Basement Floor, 5th Main Rd, Sector 6, HSR Layout,
                Bengaluru, Karnataka 560102
              </p>
            </div>
          </a>

          <div className='max-w-[280px]'>
            <p className=' text-textDark font-light text-sm mb-2 font-outfit'>
              Email us at
            </p>
            <p className='font-outfit text-2xl text-primary'>
              <a href='mailto:chhbangalore@gmail.com'>chhbangalore@gmail.com</a>
            </p>
          </div>
          <div>
            <p className=' text-textDark font-light text-sm mb-2 font-outfit'>
              If you're hurry, quick call for us
            </p>
            <p className='font-outfit text-2xl text-primary'>
              <a href='tel:+917975775306'>+91 79 7577 5306</a>
              <br />
              <a href='tel:+919483958017'>+91 94 8395 8017</a>
              <br />
              <a href='tel:+919513418297'>+91 95 1341 8297</a>
              <br />
              <a href='tel:+919019529790'>+91 90 1952 9790</a>
            </p>
          </div>
        </div>
        {/* Right */}
        <ContactForm />
      </div>
      <hr className='my-20 border-gray-300' />
      <div className='flex items-center justify-between flex-wrap'>
        <p className='text-center text-xs'>
          © 2025 CHH - Architectural consultant.
        </p>
        <p className='text-center text-xs'>
          Build your place without Breaking the Bank ❤️
        </p>
        <p className='text-center text-xs'>
          Developed by <strong className='text-red-600'>Suraj</strong> &{' '}
          <strong className='text-red-600'>Ashok</strong>
        </p>
      </div>
    </section>
  )
}
