// import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../common/Button'
const ManufacturerLogIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
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
          <h2 className='text-4xl mb-12'>MANUFACTURER LOGIN</h2>
          <form action='' onSubmit={handleSubmit}>
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

            <div className='btn'>
              <Link to='/ManufacturerDashboard'>
                <Button
                  text='LogIn'
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

export default ManufacturerLogIn
