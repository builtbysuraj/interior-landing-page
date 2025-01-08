export default function ContactForm() {
  const handleFormSubmit = (evt) => {
    evt.preventDefault()
    const { name, value } = evt.target
    console.log({ name }, { value })
  }
  return (
    <>
      <div className='flex-1'>
        <h2 className='font-playfairDisplay italic text-5xl text-center text-primary mb-10'>
          Contact Us
        </h2>
        <div className='font-outfit'>
          <div className='flex flex-col items-center'>
            <form className='w-full flex-1' onSubmit={handleFormSubmit}>
              <div className='mx-auto w-full max-w-md'>
                <div>
                  <label
                    htmlFor='name'
                    className='text-sm mb-1 block font-light text-textDark'
                  >
                    Name
                  </label>
                  <input
                    className='w-full px-4 py-4 rounded-lg bg-gray-100 border border-gray-400 text-sm focus:outline-none'
                    type='text'
                    id='name'
                    name='Name'
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
                    className='w-full px-4 py-4 rounded-lg bg-gray-100 border border-gray-400 text-sm focus:outline-none'
                    type='email'
                    id='email'
                    name='Email'
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
                    className='w-full px-4 py-4 rounded-lg bg-gray-100 border border-gray-400 text-sm focus:outline-none'
                    type='tel'
                    id='phone'
                    name='Phone'
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
                    className='w-full h-32 px-4 py-4 rounded-lg bg-gray-100 border border-gray-400 text-sm focus:outline-none'
                    type='text'
                    id='description'
                    placeholder='Enter your Message'
                    required
                  />
                </div>
                <button
                  type='submit'
                  className='mt-5 tracking-wide font-semibold bg-primary text-gray-100 w-full py-2 rounded-lg transition-all duration-300 ease-in-out flex items-center justify-center text-lg'
                >
                  <span className='ml-3'>Send</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
