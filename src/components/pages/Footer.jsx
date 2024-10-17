// import React from 'react'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn
} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-[#E9D3E9] py-12 mx-auto rounded-lg'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-start px-6'>
        {/* About Us Section */}
        <div className='mb-8 md:mb-0 md:w-1/3'>
          <h2 className='text-2xl font-spaceGrotesk mb-4'>Beauty Shield</h2>
          <p>
            Ensuring the authenticity of your beauty products. Our mission is to
            protect consumers and businesses by providing a reliable solution to
            trace and verify the authenticity of beauty products in the supply
            chain.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className='mb-8 md:mb-0 md:w-1/3'>
          <h3 className='text-xl font-spaceGrotesk mb-4'>Quick Links</h3>
          <ul className='list-none'>
            <li className='mb-2'>
              <a href='#home' className='hover:underline'>
                Home
              </a>
            </li>
            <li className='mb-2'>
              <a href='#about' className='hover:underline'>
                About Us
              </a>
            </li>
            <li className='mb-2'>
              <a href='#services' className='hover:underline'>
                Services
              </a>
            </li>
            <li className='mb-2'>
              <a href='#contact' className='hover:underline'>
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Information Section */}
        <div className='mb-8 md:mb-0 md:w-1/3'>
          <h3 className='text-xl font-spaceGrotesk mb-4'>
            Contact Information
          </h3>
          <p className='mb-2'>Email: info@beautyshield.com</p>
          <p className='mb-2'>Phone: +1 123 456 7890</p>
          <p className='mb-2'>
            Address: 123 Beauty Lane, Skincare City, BE 12345
          </p>

          {/* Social Media Links */}
          <div className='flex space-x-4 mt-4'>
            <a href='https://facebook.com' className=' hover:text-gray-400'>
              <FaFacebookF />
            </a>
            <a href='https://twitter.com' className=' hover:text-gray-400'>
              <FaTwitter />
            </a>
            <a href='https://instagram.com' className=' hover:text-gray-400'>
              <FaInstagram />
            </a>
            <a href='https://linkedin.com' className=' hover:text-gray-400'>
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className='text-center mt-8'>
        <p>&copy; 2024 Beauty Shield. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
