import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../common/Button'
import smartContractService from './../../contracts/smartContract'

const ManufacturerSignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    password: '',
    confirmPassword: ''
  })

  const [connected, setConnected] = useState(false)

  const handleSignUp = async () => {
    try {
      // Connect to Metamask
      await smartContractService.connectWallet()
      setConnected(true)

      // Call your smart contract function
      const result = await smartContractService.signingUP()
      console.log('Sign up result:', result)
      return result
    } catch (error) {
      console.error('Error during sign up:', error)
    }
  }

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()

    console.log('Form submitted Successfully', formData)
  }

  return (
    <div>
      <div className='flex items-center justify-center min-h-screen w-full bg-gray-100 '>
        <div className='bg-whit max-w-700'>
          <h2 className='text-4xl mb-12'>Enter Your Correct Information</h2>
          <form action='' onSubmit={handleSubmit}>
            <div className='mb-5'>
              <label
                htmlFor='name'
                className='block text-sm font-medium mx-4 text-gray-700'
              >
                Name
              </label>
              <input
                className='block w-full py-4 px-4 mt-1 border border-gray-300 rounded-lg shadow-sm placeholer-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                type='text'
                id='name'
                name='name'
                autoComplete='name'
                required
                placeholder='Enter Your Name'
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className='mb-5'>
              <label
                htmlFor='email'
                className='block text-sm font-medium mx-4 text-gray-700'
              >
                Email
              </label>
              <input
                className='block w-full py-4 px-4 mt-1 border border-gray-300 rounded-lg shadow-sm placeholer-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                type='email'
                id='email'
                name='email'
                autoComplete='email'
                required
                placeholder='Enter Your Email'
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className='mb-5'>
              <label
                htmlFor='location'
                className='block text-sm font-medium mx-4 text-gray-700'
              >
                Location
              </label>
              <input
                className='block w-full py-4 px-4 mt-1 border border-gray-300 rounded-lg shadow-sm placeholer-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                type='location'
                id='location'
                name='location'
                autoComplete='location'
                required
                placeholder='Enter Your Location'
                value={formData.location}
                onChange={handleChange}
              />
            </div>

            <div className='mb-5'>
              <label
                htmlFor='password'
                className='block text-sm font-medium mx-4 text-gray-700'
              >
                Password
              </label>
              <input
                className='block w-full py-4 px-4 mt-1 border border-gray-300 rounded-lg shadow-sm placeholer-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                type='password'
                id='password'
                name='password'
                autoComplete='password'
                required
                placeholder='Enter Your Password'
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div className='mb-5'>
              <label
                htmlFor='confirmPassword'
                className='block text-sm font-medium mx-4 text-gray-700'
              >
                Confirm Password
              </label>
              <input
                className='block w-full py-4 px-4 mt-1 border border-gray-300 rounded-lg shadow-sm placeholer-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                type='password'
                id='confirmPassword'
                name='confirmPassword'
                autoComplete='password'
                required
                placeholder='Confirm Your Password'
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>

            <div className='btn'>
              <Link to=''>
                <Button
                  onClick={handleSignUp}
                  text='SignUp'
                  style='text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200  w-full py-4 rounded-lg'
                />
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ManufacturerSignUp
