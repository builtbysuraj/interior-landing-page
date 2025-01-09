export default function Metrics() {
  return (
    <section>
      <div className='flex justify-between items-center py-4 flex-wrap gap-7'>
        <div className='flex items-center gap-3'>
          <span className='font-playfairDisplay text-5xl md:text-6xl'>45</span>
          <span className='flex items-center mt-3 -ml-3 gap-2'>
            <p className='font-playfairDisplay text-5xl md:text-6xl'>+</p>
            <p className='font-outfit text-textDark text-sm mt-2'>PROJECTS</p>
          </span>
        </div>
        <div className='flex items-center gap-3 max-w-[300px]'>
          <span className='font-playfairDisplay text-5xl md:text-6xl'>15</span>
          <span className='flex items-center mt-3 -ml-3 gap-2'>
            <p className='font-playfairDisplay text-5xl md:text-6xl'>+</p>
            <p className='font-outfit text-textDark text-sm mt-2'>
              YEARS OF EXPERIENCE IN THE INDUSTRY
            </p>
          </span>
        </div>
        <div className='flex items-center gap-3'>
          <span className='font-playfairDisplay text-5xl md:text-6xl'>20</span>
          <span className='flex items-center mt-3 -ml-3 gap-2'>
            <p className='font-playfairDisplay text-5xl md:text-6xl'>+</p>
            <p className='font-outfit text-textDark text-sm mt-2'>
              DEDICTED PROFESSIONALS
            </p>
          </span>
        </div>
        {/* <div className='flex items-center gap-3'>
          <span className='font-playfairDisplay text-5xl md:text-6xl'>
            154
          </span>
          <p className='font-outfit text-textDark text-sm mt-5'>
            {' '}
            TOTAL VISITORS
          </p>
        </div> */}
      </div>
      <hr className='mt-20 text-[#D9D9D6]' />
    </section>
  )
}
