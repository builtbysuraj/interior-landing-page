import { Image } from '../utils/images'

export default function Gallery() {
  return (
    <section id='gallery'>
      <div className='flex items-center gap-4 mb-6'>
        <div className='border-b border-primary w-14'></div>
        <p className='font-outfit text-primary text-xs font-semibold tracking-widest'>
          GALLERY
        </p>
      </div>
      <div className='my-5'>
        <h2 className='font-playfairDisplay text-5xl md:text-6xl max-w-[700px]'>
          Some of <span className='italic'>our crafts</span> made with love
        </h2>
      </div>
      <div className='grid gap-5'>
        {/* Gallery cards */}
        {/* Item 1 */}
        <div className='flex flex-col items-center gap-10 md:flex-row mt-20'>
          <div>
            <img src={Image.Gallery1} alt='' className='min-w-[280px]' />
          </div>
          <div className=''>
            <h2 className='font-playfairDisplay text-4xl md:text-5xl font-normal py-5 '>
              Luxury Hotel Renovation
            </h2>
            <p className='font-outfit text-lg font-light max-w-[700px]'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
              earum ratione asperiores, fugiat labore reprehenderit architecto
              aliquid sapiente non repellendus!
            </p>
            {/* <a
              className='flex-end cursor-pointer text-primary text-right text-xs mt-2 block'
              to='#'
            >
              ...show more
            </a> */}
          </div>
        </div>
        {/* <hr className='my-5 border-gray-400' /> */}
        <hr className='my-20 text-[#D9D9D6]' />

        {/* Item 2 */}
        <div className='flex flex-col items-center gap-10 md:flex-row'>
          <div>
            <h2 className='font-playfairDisplay text-4xl md:text-5xl font-normal py-5'>
              Luxury Hotel Renovation
            </h2>
            <p className='font-outfit text-lg font-light max-w-[700px]'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
              earum ratione asperiores, fugiat labore reprehenderit architecto
              aliquid sapiente non repellendus!
            </p>
            {/* <a
              className='flex-end cursor-pointer text-primary text-right text-xs mt-2 block'
              to='#'
            >
              ...show more
            </a> */}
          </div>
          <div>
            <img src={Image.Gallery1} alt='' />
          </div>
        </div>
        {/* <hr className='my-5 border-gray-400' /> */}
        <hr className='my-20 text-[#D9D9D6]' />

        {/* Item 3 */}
        <div className='flex flex-col items-center gap-10 md:flex-row'>
          <div>
            <img src={Image.Gallery1} alt='' />
          </div>
          <div>
            <h2 className='font-playfairDisplay text-4xl md:text-5xl font-normal py-5 '>
              Luxury Hotel Renovation
            </h2>
            <p className='font-outfit text-lg font-light max-w-[700px]'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
              earum ratione asperiores, fugiat labore reprehenderit architecto
              aliquid sapiente non repellendus!
            </p>
            {/* <a
              className='flex-end cursor-pointer text-primary text-right text-xs mt-2 block'
              to='#'
            >
              ...show more
            </a> */}
          </div>
        </div>
      </div>
      {/* <hr className='my-16 border-gray-400' /> */}
      <hr className='my-20 text-[#D9D9D6]' />
    </section>
  )
}
