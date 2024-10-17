// import React, { useState } from 'react';
import { useState } from 'react'
import ProductForm from '../forms/ProductForm'
function Dashboard () {
  const [showForm, setShowForm] = useState(false)
  const [products, setProducts] = useState([])

  const toggleForm = () => {
    setShowForm(!showForm)
  }

  const addProduct = newProduct => {
    setProducts([...products, newProduct])
    console.log(products)
  }
  return (
    <div className='bg-gray-100 min-h-screen'>
      <div className='container mx-auto bg-gray-100'>
        <div className='btn'>
          <button
            onClick={toggleForm}
            className='bg-pink-400 px-12 mt-2 ml- text-white py-4 rounded-md hover:bg-pink-500'
          >
            {showForm ? 'Cancel' : 'Add Product'}
          </button>
        </div>
        {showForm && <ProductForm addProduct={addProduct} />}
      </div>
    </div>
  )
}

export default Dashboard
