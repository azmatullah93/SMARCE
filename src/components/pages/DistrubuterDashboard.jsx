import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import SmartContractService from '../../contracts/smartContract' // Import SmartContractService
import Navbar from '../common/Navbar'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useEffect } from 'react'
import Footer from './Footer'
const DistributerDashboard = () => {
  const [showForm, setShowForm] = useState(false)
  // Initialize state from localStorage if products exist
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem('distributerProducts')
    return savedProducts ? JSON.parse(savedProducts) : []
  })
  const [product, setProduct] = useState({
    productId: '',
    toOwnerID: '',
    location: '',
    quantity: ''
  })
  const [toggle, setToggle] = useState(false)

  const toggleForm = () => {
    setShowForm(!showForm)
  }

  // Sync products to localStorage whenever they are updated
  useEffect(() => {
    localStorage.setItem('distributerProducts', JSON.stringify(products))
  }, [products])

  // Function to add a product locally
  const addProduct = newProduct => {
    const updatedProducts = [...products, newProduct]
    setProducts(updatedProducts) // This will trigger the useEffect to update localStorage
    console.log('Products after adding: ', updatedProducts)
  }

  const handleChange = e => {
    const { name, value } = e.target
    setProduct({ ...product, [name]: value })
  }

  const handleImage = e => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setProduct({ ...product, image: reader.result })
      }
      reader.readAsDataURL(file)
    }
  }

  const handleAdd = async e => {
    e.preventDefault()
    if (
      product.productId &&
      product.toOwnerID &&
      product.location &&
      product.quantity
    ) {
      try {
        // Call transferProduct from SmartContractService
        await SmartContractService.transferProduct(
          product.productId, // productId (use the product name for now)
          product.toOwnerID, // toOwnerID
          product.quantity, // Quantity (set to 1 for now, can be adjusted)
          product.location // Location (Source as location)
        )

        // Update localStorage with the new product data
        const savedProducts = JSON.parse(localStorage.getItem('products')) || []
        const updatedProducts = savedProducts.map(p =>
          p.productId === product.productId
            ? { ...p, quantity: p.quantity - product.quantity } // Update the quantity or other fields
            : p
        )
        localStorage.setItem('products', JSON.stringify(updatedProducts))

        // Add the product locally to the UI
        addProduct({
          id: uuidv4(),
          ...product
        })

        // Clear form inputs
        setProduct({
          productId: '',
          toOwnerID: '',
          location: '',
          quantity: ''
        })

        toggleForm()

        toast.success('Product transferred successfully')
      } catch (error) {
        console.error('Error transferring product:', error)
        toast.error('Error transferring product')
      }
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
              {showForm ? 'Cancel' : 'Transfer'}
            </button>
          </div>
          {showForm && (
            <div className='w-1/2 mx-auto ml-25% bg-gray-100 absolute'>
              <form onSubmit={handleAdd}>
                <div className='mb-5'>
                  <label
                    htmlFor='productId'
                    className='block text-sm font-medium mx-4 text-gray-700'
                  >
                    Product ID
                  </label>
                  <input
                    className='block w-full py-4 px-4 mt-1 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
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
                    htmlFor='toOwnerID'
                    className='block text-sm font-medium mx-4 text-gray-700'
                  >
                    Buyer ID
                  </label>
                  <input
                    className='block w-full py-4 px-4 mt-1 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                    type='number'
                    id='toOwnerID'
                    name='toOwnerID'
                    required
                    placeholder='Enter The Buyer ID'
                    onChange={handleChange}
                    value={product.toOwnerID}
                  />
                </div>

                <div className='mb-5'>
                  <label
                    htmlFor='location'
                    className='block text-sm font-medium mx-4 text-gray-700'
                  >
                    location
                  </label>
                  <input
                    className='block w-full py-4 px-4 mt-1 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                    type='text'
                    id='location'
                    name='location'
                    required
                    placeholder='Enter The location of the Product'
                    onChange={handleChange}
                    value={product.location}
                  />
                </div>

                <div className='mb-5'>
                  <label
                    htmlFor='quantity'
                    className='block text-sm font-medium mx-4 text-gray-700'
                  >
                    Quantity
                  </label>
                  <input
                    className='block w-full py-4 px-4 mt-1 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                    type='number'
                    id='quantity'
                    name='quantity'
                    required
                    placeholder='Enter The quantity of the Product'
                    onChange={handleChange}
                    value={product.quantity}
                  />
                </div>

                <div className='btn'>
                  <button
                    type='submit'
                    className='bg-pink-400 mb-4 text-white w-full py-4 rounded-lg hover:bg-pink-500'
                  >
                    Transfer
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 p-10'>
          {products.map(product => (
            <div
              key={product.id}
              className='mb-4 bg-white w-96 shadow-lg rounded-lg p-4'
            >
              <div className='p-4'>
                <h3 className='text-lg font-semibold'>{`productID: ${product.productId}`}</h3>
                <p className='text-gray-600'>{`OwnerID: ${product.toOwnerID}`}</p>
                <p className='text-gray-600'>{`Quantity: ${product.quantity}`}</p>
                <p className='text-gray-600'>{`Destination: ${product.location}`}</p>
              </div>
            </div>
          ))}
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

export default DistributerDashboard
//  <img className="w-full h-48 object-cover rounded-t-lg" src={product.image} alt={product.name} />
