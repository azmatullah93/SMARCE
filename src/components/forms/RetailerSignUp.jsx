// import React from 'react'
import { useState } from 'react'
import Button from '../common/Button'
import { Link } from 'react-router-dom'
const RetailerSignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eth_address: '',
    password: '',
    confirmPassword: ''
  })

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
                htmlFor='eth_address'
                className='block text-sm font-medium mx-4 text-gray-700'
              >
                ETH-address
              </label>
              <input
                className='block w-full py-4 px-4 mt-1 border border-gray-300 rounded-lg shadow-sm placeholer-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                type='text'
                id='eth_address'
                name='eth_address'
                autoComplete='text'
                required
                placeholder='Enter Your ETH-address'
                value={formData.eth_address}
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
              <Link to='/RetailerDashboard'>
                <Button
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

export default RetailerSignUp
