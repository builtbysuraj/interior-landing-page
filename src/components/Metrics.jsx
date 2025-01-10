import React, { useEffect, useState } from 'react'

const Counter = ({ target }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let interval
    if (count < target) {
      interval = setInterval(() => {
        setCount((prevCount) => Math.min(prevCount + 1, target))
      }, 50) // Adjust speed here
    }
    return () => clearInterval(interval)
  }, [count, target])

  return (
    <span className='font-playfairDisplay text-5xl md:text-6xl'>{count}</span>
  )
}

export default function Metrics() {
  return (
    <section>
      <div className='flex justify-between items-center py-4 flex-wrap gap-7'>
        <div className='flex items-center gap-3'>
          <Counter target={45} />
          <span className='flex items-center mt-3 -ml-3 gap-2'>
            <p className='font-playfairDisplay text-5xl md:text-6xl'>+</p>
            <p className='font-outfit text-textDark text-sm mt-2'>PROJECTS</p>
          </span>
        </div>
        <div className='flex items-center gap-3 max-w-[300px]'>
          <Counter target={15} />
          <span className='flex items-center mt-3 -ml-3 gap-2'>
            <p className='font-playfairDisplay text-5xl md:text-6xl'>+</p>
            <p className='font-outfit text-textDark text-sm mt-2'>
              YEARS OF EXPERIENCE IN THE INDUSTRY (Since 2007)
            </p>
          </span>
        </div>
        <div className='flex items-center gap-3'>
          <Counter target={20} />
          <span className='flex items-center mt-3 -ml-3 gap-2'>
            <p className='font-playfairDisplay text-5xl md:text-6xl'>+</p>
            <p className='font-outfit text-textDark text-sm mt-2'>
              DEDICATED PROFESSIONALS
            </p>
          </span>
        </div>
      </div>
      <hr className='my-20 border-gray-300' />
    </section>
  )
}
