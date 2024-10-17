// import React from 'react'
import './../../assets/styles/signUpAsPage.css'
import { Link } from 'react-router-dom'
const SignUpAsPage = () => {
  return (
    <div className='parentDiv  h-screen'>
      <h1 className='ml-md text-5xl font-spaceGrotesk text-pink-700 mb-28 pt-32'>
        SignUp As
      </h1>
      <div className='flex justify-center gap-32 text-3xl '>
        <Link to='/ManufacturerSignup'>
          <div className='text-center bg-white'>
            <img
              src='https://getdrawings.com/free-icon-bw/blank-avatar-icon-22.png'
              alt='Manufacturer'
              height={300}
              width={300}
            />
            <h1>Manufacturer</h1>
          </div>
        </Link>

        <Link to='/DistributerSignUp'>
          <div className='text-center bg-white'>
            <img
              src='https://getdrawings.com/free-icon-bw/blank-avatar-icon-22.png'
              alt='Distributer'
              height={300}
              width={300}
            />
            <h1>Distributer</h1>
          </div>
        </Link>

        <Link to='/RetailerSignUp'>
          {' '}
          <div className='text-center bg-white'>
            <img
              src='https://getdrawings.com/free-icon-bw/blank-avatar-icon-22.png'
              alt='Retailer'
              height={300}
              width={300}
            />
            <h1>Retailer</h1>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default SignUpAsPage
