import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import QrCode from '../common/QrCode'
import SmartContractService from '../../contracts/smartContract' // Import SmartContractService
import Navbar from '../common/Navbar'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Footer from './Footer'
import { message } from 'antd'

const ManufacturerDashboard = () => {
  const [showForm, setShowForm] = useState(false)
  const [products, setProducts] = useState(() => {
    // Retrieve products from localStorage on initial load
    const savedProducts = localStorage.getItem('products')
    return savedProducts ? JSON.parse(savedProducts) : []
  })

  const [qrValue, setqrValue] = useState('')
  const [product, setProduct] = useState({
    productId: '',
    qrCode: '',
    quantity: '',
    imageUrl: ''
  })
  const [toggle, setToggle] = useState(false)

  // Sync products to localStorage whenever they are updated
  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products))
  }, [products]) // This effect runs every time `products` changes

  // Listen to storage changes (like when the product is transferred)
  useEffect(() => {
    window.addEventListener('storage', syncProductsWithLocalStorage)

    return () => {
      window.removeEventListener('storage', syncProductsWithLocalStorage)
    }
  }, [])

  // Function to generate a random alphanumeric string of length 7
  const generateRandomString = () => {
    return Math.random().toString(36).substring(2, 9).toUpperCase()
  }

  const handleGenerateQr = () => {
    // Generate random string and set it as the QR value
    const randomString = generateRandomString()
    setqrValue(randomString)

    // Set the random value in the Product Name field
    setProduct({ ...product, qrCode: randomString })
  }

  const toggleForm = () => {
    setShowForm(!showForm)
  }

  const addProduct = newProduct => {
    const updatedProducts = [...products, newProduct]
    setProducts(updatedProducts)
    // localStorage.setItem('products', JSON.stringify(updatedProducts)); // Store updated products in localStorage
  }

  // Function to update state when localStorage changes
  const syncProductsWithLocalStorage = () => {
    const savedProducts = localStorage.getItem('products')
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts))
    }
  }
  // Function to handle product update after transaction
  const updateProductAfterTransaction = updatedProduct => {
    const updatedProducts = products.map(p =>
      p.productId === updatedProduct.productId ? updatedProduct : p
    )
    setProducts(updatedProducts) // This will trigger localStorage sync
  }

  // Function to handle product quantity update after transaction
  const handleTransactionUpdate = async productId => {
    try {
      // Fetch updated product data from the smart contract (e.g., quantity changed)
      const updatedProductFromBlockchain =
        await SmartContractService.getProduct(productId)

      // Once we have updated data, we update the product in our state
      updateProductAfterTransaction(updatedProductFromBlockchain)

      message.success('Product updated successfully after transaction!')
    } catch (error) {
      console.error('Error updating product after transaction:', error)
      // toast.error('Error updating product after transaction.')
    }
  }

  const handleChange = e => {
    const { name, value } = e.target
    setProduct({ ...product, [name]: value })
  }

  const handleAdd = async e => {
    e.preventDefault()
    console.log('Button clicked')

    if (
      product.productId &&
      product.qrCode &&
      product.quantity &&
      product.imageUrl
    ) {
      // Add product to the list
      addProduct({
        id: uuidv4(),
        ...product
      })

      if (
        !product.productId ||
        !product.qrCode ||
        !product.quantity ||
        !product.imageUrl
      ) {
        message.error('Please fill in all fields')
      }

      try {
        // Call the smart contract function to manufacture the product
        const tx = await SmartContractService.manufactureProduct(
          product.productId, // productId
          product.qrCode, // qrCode
          product.imageUrl, // imageUrl
          product.quantity // quantity
        )
        console.log('Transaction successful:', tx)

        // After the transaction, fetch updated data from the blockchain
        handleTransactionUpdate(product.productId, product.quantity)

        // Reset the form after successful transaction
        setProduct({
          productId: '',
          qrCode: '',
          quantity: '',
          imageUrl: ''
        })

        message.success('Product Added successfully')
      } catch (error) {
        console.error('Error Adding product:', error)
        message.error('Error Adding product')
      }

      // Hide the form
      toggleForm()
    }
  }

  return (
    <div>
      <Navbar />
      <div className='bg-gray-100 min-h-screen relative'>
        <div className='bg-gray-100'>
          <div className='btn ml-md'>
            <button
              onClick={toggleForm}
              className='bg-pink-400 px-12 mb-4 mt-2 ml- text-white py-4 rounded-md hover:bg-pink-500'
            >
              {showForm ? 'Cancel' : 'Add Product'}
            </button>
          </div>
          {showForm && (
            <div className='w-1/2 mx-auto ml-25% bg-gray-100 absolute rounded-lg'>
              <form onSubmit={handleAdd}>
                <div className='mb-5'>
                  <label
                    htmlFor='productId'
                    className='block text-sm font-medium mx-4 text-gray-700'
                  >
                    Product ID
                  </label>
                  <input
                    className='block w-full py-4 px-4 mt-1 border border-gray-300 rounded-lg shadow-sm placeholer-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                    type='number'
                    id='productId'
                    name='productId'
                    required
                    placeholder='Enter Your Product ID'
                    value={product.productId}
                    onChange={handleChange}
                  />
                </div>

                <div className='mb-5'>
                  <label
                    htmlFor='source'
                    className='block text-sm font-medium mx-4 text-gray-700'
                  >
                    Quantity
                  </label>
                  <input
                    className='block w-full py-4 px-4 mt-1 border border-gray-300 rounded-lg shadow-sm placeholer-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                    type='number'
                    id='quantity'
                    name='quantity'
                    required
                    placeholder='Enter The Quantity of the Product'
                    onChange={handleChange}
                    value={product.quantity}
                  />
                </div>
                <div className='mb-5'>
                  <label
                    htmlFor='imageUrl'
                    className='block text-sm font-medium mx-4 text-gray-700'
                  >
                    URL
                  </label>
                  <input
                    className='block w-full py-4 px-4 mt-1 border border-gray-300 rounded-lg shadow-sm placeholer-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                    type='text'
                    id='imageUrl'
                    name='imageUrl'
                    required
                    placeholder='Enter The URL of the Product'
                    onChange={handleChange}
                    value={product.imageUrl}
                  />
                </div>

                <div className='mb-5'>
                  <label
                    htmlFor='qrCode'
                    className='block text-sm font-medium mx-4 text-gray-700'
                  >
                    QRCode
                  </label>
                  <input
                    className='block w-full py-4 px-4 mt-1 border border-gray-300 rounded-lg shadow-sm placeholer-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                    type='text'
                    id='qrCode'
                    name='qrCode'
                    required
                    placeholder='Enter Your Product Name'
                    value={product.qrCode}
                    onChange={handleChange}
                    disabled
                  />
                </div>

                <div className='mx-auto'>
                  <button
                    className='bg-pink-400 p-4 rounded-lg mb-4 hover:bg-pink-500'
                    type='button'
                    onClick={handleGenerateQr}
                  >
                    Generate QRCode
                  </button>
                  {qrValue && <QrCode value={qrValue} />}
                </div>

                <div className='btn'>
                  <button
                    type='submit'
                    className='bg-pink-400 text-white w-full py-4 rounded-lg hover:bg-pink-500'
                  >
                    Add
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>

        {/* <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 p-10'> */}
        <div className=' flex gap-5 p-10'>
          {products.map(product => {
            return (
              <div
                key={product.productId}
                className='mb-4 bg-white w-96 shadow-lg rounded-lg p-4'
              >
                <div className='p-4'>
                  <h3 className='text-lg font-semibold'>{`ID: ${product.productId}`}</h3>
                  <h3 className='text-lg font-semibold'>{`qrCode: ${product.qrCode}`}</h3>
                  <p className='text-gray-600'>{`Quantity: ${product.quantity}`}</p>
                  {/* <p className='text-gray-600'>{`URL: ${product.imageUrl}`}</p> */}
                  <img src={product.imageUrl} alt="Product" className="w-full mt-2 h-auto" />

                </div>
              </div>
            )
          })}
        </div>
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

export default ManufacturerDashboard
