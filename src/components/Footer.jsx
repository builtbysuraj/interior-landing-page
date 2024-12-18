export default function Footer() {
  return (
    <>
      <div className='flex gap-10 flex-col md:flex-row'>
        {/* Left */}
        <div className='flex flex-col gap-y-8 flex-1'>
          <h2 className='text-4xl lg:text-5xl font-playfairDisplay max-w-[600px]'>
            Kick-start your dream home with us
          </h2>
          <div className='max-w-[280px] mt-8'>
            <p className='text-2xl font-playfairDisplay mb-2'>
              Brooklyn, New York
            </p>
            <p className=' text-textDark font-light text-sm font-outfit'>
              962 Fifth Avenue Str, 3rd Floor-Trump Building NY 10006, United
              State.
            </p>
          </div>
          <div className='max-w-[280px]'>
            <p className=' text-textDark font-light text-sm mb-2 font-outfit'>
              Email us at
            </p>
            <p className='font-playfairDisplay text-2xl text-primary'>
              hello@landify.design
            </p>
          </div>
          <div>
            <p className=' text-textDark font-light text-sm mb-2 font-outfit'>
              If you're hurry, quick call for us
            </p>
            <p className='font-playfairDisplay text-2xl text-primary'>
              +91 62963 71937
            </p>
          </div>
        </div>
        {/* Right */}
        <div className='flex-1'>
          <h2 className='font-playfairDisplay italic underline text-5xl text-center text-primary mb-10'>
            Send us a hi
          </h2>
          <div className='font-outfit'>
            <div className='flex flex-col items-center'>
              <form className='w-full flex-1'>
                <div className='mx-auto w-full max-w-md'>
                  <div>
                    <label
                      htmlFor='name'
                      className='text-sm mb-1 block font-light text-textDark'
                    >
                      Name
                    </label>
                    <input
                      className='w-full px-4 py-4 rounded-lg  border border-gray-200 text-sm focus:outline-none'
                      type='text'
                      id='Name1'
                      placeholder='Name'
                      required
                    />
                  </div>

                  <div className='mt-5'>
                    <label
                      htmlFor='email'
                      className='text-sm mb-1 block font-light text-textDark'
                    >
                      Email
                    </label>
                    <input
                      className='w-full px-4 py-4 rounded-lg  border border-gray-200 text-sm focus:outline-none'
                      type='email'
                      id='Email'
                      placeholder='Email'
                      required
                    />
                  </div>
                  <div className='mt-5'>
                    <label
                      htmlFor='phone'
                      className='text-sm block mb-1 font-light text-textDark'
                    >
                      Phone number
                    </label>
                    <input
                      className='w-full px-4 py-4 rounded-lg  border border-gray-200 text-sm focus:outline-none'
                      type='tel'
                      id='Phone'
                      placeholder='Phone number'
                      required
                    />
                  </div>
                  <div className='mt-5'>
                    <label
                      htmlFor='description'
                      className='text-sm block mb-1 font-light text-textDark'
                    >
                      Description
                    </label>
                    <textarea
                      className='w-full h-32 px-4 py-4 rounded-lg  border border-gray-200 text-sm focus:outline-none'
                      type='text'
                      id='description'
                      placeholder='Enter your Message'
                      required
                    />
                  </div>
                  <button
                    type='submit'
                    className='mt-5 tracking-wide font-semibold bg-primary text-gray-100 w-full py-3 rounded-lg transition-all duration-300 ease-in-out flex items-center justify-center text-lg'
                  >
                    <span className='ml-3'>Send</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <hr class='my-20 text-[#D9D9D6]'></hr>
      <p className='text-center text-xs'>
        © 2024 Inteo - Award winning studio. Made with ❤️ in Bangalore
      </p>
    </>
  )
}
