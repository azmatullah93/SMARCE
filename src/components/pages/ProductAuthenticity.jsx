import { useState } from 'react'
import QrScanner from 'react-qr-scanner'
import SmartContractService from '../../contracts/smartContract'
import Navbar from '../common/Navbar'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Footer from './Footer'
const ProductAuthenticity = () => {
  const [formData, setFormData] = useState({ ownerID: '' })
  const [isScanning, setIsScanning] = useState(false)
  const [qrCode, setQrCode] = useState('')
  const [productInfo, setProductInfo] = useState(null)
  const [error, setError] = useState(null)

  // Handle QR code scanning
  const handleScan = async data => {
    console.log('Handle scan triggered.')
    if (data) {
      console.log('Scanned Data:', data)
      // Use the `text` property of the QR code result
      const scannedQRCode = data.text
      setQrCode(scannedQRCode)
      setIsScanning(false)
      await handleSubmit(scannedQRCode)
    } else {
      console.log('No data detected')
    }
  }

  const handleError = err => {
    console.error('Scanner Error:', err)
    setError('Failed to scan the QR code, please try again.')
  }

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }))
    console.log('Owner ID Updated:', value)
  }

  const handleSubmit = async scannedQRCode => {
    console.log('Submitting data...')
    try {
      const ownerID = formData.ownerID
      if (!ownerID || !scannedQRCode) {
        console.log('Missing Owner ID or QR Code.')
        setError('Owner ID or QR Code is missing.')
        return
      }
      setError(null)
      console.log(
        'Calling smart contract with Owner ID:',
        ownerID,
        'and QR Code:',
        scannedQRCode
      )

      // Call the smart contract using the scanned QR code (string) and ownerID
      const result = await SmartContractService.checkProduct(
        ownerID,
        scannedQRCode
      )
      console.log('Smart Contract Result:', result)
      setProductInfo(result)
    } catch (error) {
      console.error('Error calling smart contract function:', error)
      setError('Error fetching product data. Please try again.')
    }
  }

  return (
    <div className=''>
      <Navbar />
      <div className='flex flex-col items-center bg-gray-100 min-h-screen justify-center'>
        <div>
          <h1 className='text-5xl font-spaceGrotesk font-bold mb-20'>
            Product Authenticity
          </h1>
          <div>
            <label
              className='block text-sm font-medium mx-4 text-gray-700'
              htmlFor='ownerID'
            >
              Owner ID
            </label>
            <input
              onChange={handleChange}
              value={formData.ownerID}
              type='text'
              name='ownerID'
              id='ownerID'
              required
              placeholder='Enter Owner ID'
              className='block w-full py-4 px-4 mt-1 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:indigo-500 focus:border-indigo-500 sm:text-sm'
            />
          </div>
        </div>
        <button
          className='bg-pink-400 p-4 rounded-lg mb-4 mt-4 text-white'
          type='button'
          onClick={() => {
            console.log('Starting QR Code scan...')
            setIsScanning(true)
          }}
        >
          Scan QRCode
        </button>
        {isScanning && (
          <QrScanner
            delay={300}
            onError={handleError}
            onScan={handleScan}
            style={{ width: '50%' }}
          />
        )}

        {/* Note to user */}
        <div className='mt-4 text-red-600 font-semibold'>
          Upon purchasing a product, a receipt containing the transaction hash
          must be generated. Without this receipt, the product may be considered
          counterfeit.
        </div>

        {/* Display product information or no product left message */}
        {productInfo ? (
          productInfo.quantity === '0' ? (
            <div className='mt-4 p-4 bg-red-200 rounded'>
              <h2 className='text-xl font-semibold text-red-600'>
                No Product Left
              </h2>
            </div>
          ) : (
            <div className='mt-4 p-4 bg-green-200 rounded'>
              <h2 className='text-xl font-semibold'>Product Information:</h2>
              <pre>{JSON.stringify(productInfo, null, 2)}</pre>
            </div>
          )
        ) : null}

        {error && (
          <div className='mt-4 p-4 bg-red-200 rounded'>
            <p>{error}</p>
          </div>
        )}
      </div>
      <Footer />
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

export default ProductAuthenticity
