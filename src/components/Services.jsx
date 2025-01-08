import { SERVICES } from '../constants'

export default function Services() {
  return (
    <section className='my-20' id='services'>
      <div>
        <div className='flex items-center gap-4 mb-6'>
          <div className='border-b border-primary w-14'></div>
          <p className='font-outfit text-primary text-xs font-semibold tracking-widest'>
            OUR SERVICES
          </p>
        </div>
        <h2 className='font-playfairDisplay text-5xl md:text-6xl max-w-[800px]'>
          We provide the <span className='italic'>best solutions</span> for your
          dream home
        </h2>
      </div>
      {/* Services cards */}
      <div className='grid lg:grid-cols-3 md:grid-cols-2 flex-wrap items-center justify-center gap-x-11'>
        {SERVICES.map((item, idx) => (
          <div
            key={idx}
            className='flex flex-col justify-between border-2 border-gray-400 mt-20 p-10 md:min-h-[580px] min-h-[400px]'
          >
            <div>
              <img src={item.icon} alt={item.title} />
            </div>
            <div>
              <h3 className='font-playfairDisplay lg:text-4xl text-3xl font-normal pb-6'>
                {item.title}
              </h3>
              <p className='font-outfit font-light text-textLight text-2xl tracking-wide leading-10'>
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* <hr className='my-20 border-gray-400' /> */}
      <hr className='my-20 text-[#D9D9D6]' />
    </section>
  )
}
