import { useState } from 'react'
import toast from 'react-hot-toast'

export default function ContactForm() {
  const URL = 'https://hook.eu2.make.com/fqggdswoqbpf7krk1wbfa352a20be2jm'
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Phone: '',
    Description: '',
  })

  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault()

    setIsLoading(true) // Set loading state

    try {
      const response = await fetch(URL, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' },
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      setIsSuccess(true)
      setIsLoading(false)
      toast.success(
        "Thank you for contacting us! We'll get back to you shortly."
      )
      setFormData({ Name: '', Email: '', Phone: '', Description: '' })
    } catch (error) {
      console.error('Error submitting form:', error)
      toast.error('An error occurred. Please contact us by phone or email.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
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
                  value={formData.Name}
                  onChange={handleChange}
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
                  value={formData.Email}
                  onChange={handleChange}
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
                  value={formData.Phone}
                  onChange={handleChange}
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
                  name='Description'
                  placeholder='Enter your Message'
                  required
                  value={formData.Description}
                  onChange={handleChange}
                />
              </div>
              <button
                type='submit'
                className='mt-5 tracking-wide font-semibold bg-primary text-gray-100 w-full py-2 rounded-lg transition-all duration-300 ease-in-out flex items-center justify-center text-lg'
                disabled={isLoading}
              >
                <span className='ml-3'>Send</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
