import React, { useState } from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'
import SmartContractService from '../../contracts/smartContract'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const Navbar = () => {
  const [isConnected, setIsConnected] = useState(false)
  const [account, setAccount] = useState(null)
  const [ownerID, setOwnerID] = useState(null)
  const [toggle, setToggle] = useState(false);

  const ConnectWallet = async () => {
    console.log('ConnectWallet in Navbar called')
    try {
      await SmartContractService.connectWallet()
      const signer = await SmartContractService.signer
      const address = await signer.getAddress()
      setAccount(address)
      setIsConnected(true)
      console.log('Wallet connected successfully')
      toast.success('Wallet connected successfully')

      // Fetch the owner ID
      const fetchedOwnerID = await SmartContractService.getOwnerID(address)
      setOwnerID(fetchedOwnerID) // Directly set the ownerID
    } catch (error) {
      console.error('Error connecting wallet:', error)
      toast.error('Error connecting wallet')
    }
  }

  const handleSignUp = async () => {
    console.log('SignUp button clicked')
    try {
      if (!isConnected) {
        // Connect wallet first if not already connected
        await ConnectWallet()
      }
      const result = await SmartContractService.signUP()
      console.log('SignUp result:', result)
      setOwnerID(result.toNumber ? result.toNumber() : parseInt(result, 10)) // Convert if necessary
      toast.success('Sign up successful')
    } catch (error) {
      console.error('Error signing up:', error.message)
      toast.error('Error signing up')
    }
  }

  return (
    <div>
      <nav className='bg-pink-200 flex justify-between align-middle'>
        <h1 className='font-bold text-lg flex align-middle pl-3 pt-3'>
          <Link to='/'>
            <button>SMARCE</button>
          </Link>
        </h1>
        <div className='flex list-none gap-5'>
          {/* <li>
            <Link to='/ProductList'>
              <Button text='Products' />
            </Link>
          </li> */}

          <li>
            <Link to='/ManufacturerDashboard'>
              {/* <Button text='Distribute' /> */}
              <h1 className='font-bold text-lg flex align-middle pl-3 pt-3'>
                {' '}
                <button className='border rounded-lg px-5 '>Add Product</button>
              </h1>
            </Link>
          </li>

          <li>
            <Link to='/DistributerDashboard'>
              {/* <Button text='Distribute' /> */}
              <h1 className='font-bold text-lg flex align-middle pl-3 pt-3'>
                {' '}
                <button className='border rounded-lg px-5 '>Distribute</button>
              </h1>
            </Link>
          </li>

          <li>
            <Link to='/RetailerDashboard'>
              {/* <Button text='Distribute' /> */}
              <h1 className='font-bold text-lg flex align-middle pl-3 pt-3'>
                {' '}
                <button className='border rounded-lg px-5 '>
                  Sell Product
                </button>
              </h1>
            </Link>
          </li>

          <li>
            <Link to='/productAuthenticity'>
              {/* <Button text='Distribute' /> */}
              <h1 className='font-bold text-lg flex align-middle pl-3 pt-3'>
                {' '}
                <button className='border rounded-lg px-5 '>
                  Authenticity
                </button>
              </h1>
            </Link>
          </li>

          {/* <li>
            <Link to='/RetailerDashboard'>
              <Button text='Sell Product' />
            </Link>
          </li>
          <li>
            <Link to='/ManufacturerDashboard'>
              <Button text='Add Product' />
            </Link>
          </li> */}
        </div>
        <div>
          <ul className='flex gap-5 align-middle pt-1 pr-1'>
            {/* Updated Navigation Links */}

            <li>
              <Button
                text={isConnected ? 'Connected' : 'Connect Wallet'}
                onClick={ConnectWallet}
              />
            </li>
            <li>
              <Button
                text={ownerID > 0 ? `Owner ID: ${ownerID}` : 'SignUp'}
                onClick={ownerID > 0 ? null : handleSignUp} // Disable signup if already registered
              />
            </li>
          </ul>
        </div>
      </nav>

      <ToastContainer
        position='top-right'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
      />
    </div>
  )
}

export default Navbar
