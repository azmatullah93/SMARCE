// // import React, { useState } from 'react'
// import { useState } from 'react'
// import { v4 as uuidv4 } from 'uuid'
// const ProductForm = ({ addProduct }) => {
//   const [product, setProduct] = useState({
//     name: '',
//     source: '',
//     destination: '',
//     image: null
//   })

//   const handleChange = e => {
//     const { name, value } = e.target
//     setProduct({ ...product, [name]: value })
//   }

//   const handleImage = e => {
//     const file = e.target.files[0]
//     if (file) {
//       const reader = new FileReader()
//       reader.onloadend = () => {
//         setProduct({ ...product, image: reader.result })
//       }
//       reader.readAsDataURL(file)
//     }
//   }

//   const handleAdd = e => {
//     e.preventDefault()
//     if (
//       product.name &&
//       product.source &&
//       product.destination &&
//       product.image
//     ) {
//       addProduct({
//         id: uuidv4(),
//         ...product
//       })
//       setProduct({
//         name: '',
//         source: '',
//         destination: '',
//         image: null
//       })
//     }
//   }

//   return (
//     <div>
//       <div className='w-1/2 mx-auto'>
//         <form onSubmit={handleAdd}>
//           <div className='mb-5'>
//             <label
//               htmlFor='name'
//               className='block text-sm font-medium mx-4 text-gray-700'
//             >
//               Product Name
//             </label>
//             <input
//               className='block w-full py-4 px-4 mt-1 border border-gray-300 rounded-lg shadow-sm placeholer-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
//               type='text'
//               id='name'
//               name='name'
//               required
//               placeholder='Enter Your Product Name'
//               value={product.name}
//               onChange={handleChange}
//             />
//           </div>
//           <div className='mb-5'>
//             <label
//               htmlFor='source'
//               className='block text-sm font-medium mx-4 text-gray-700'
//             >
//               Source
//             </label>
//             <input
//               className='block w-full py-4 px-4 mt-1 border border-gray-300 rounded-lg shadow-sm placeholer-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
//               type='text'
//               id='source'
//               name='source'
//               required
//               placeholder='Enter The Source of the Product'
//               onChange={handleChange}
//               value={product.source}
//             />
//           </div>
//           <div className='mb-5'>
//             <label
//               htmlFor='destination'
//               className='block text-sm font-medium mx-4 text-gray-700'
//             >
//               Destination
//             </label>
//             <input
//               className='block w-full py-4 px-4 mt-1 border border-gray-300 rounded-lg shadow-sm placeholer-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
//               type='text'
//               id='destination'
//               name='destination'
//               required
//               placeholder='Enter The Destination of the Product'
//               onChange={handleChange}
//               value={product.destination}
//             />
//           </div>
//           <div className='mb-5'>
//             <input
//               className=' py-4 px-4 mt-1'
//               type='file'
//               id='file'
//               name='file'
//               required
//               accept='image/*'
//               onChange={handleImage}
//             />
//           </div>
//           <div className='btn'>
//             <button type='submit' className='bg-pink-400 text-white w-full py-4 rounded-lg hover:bg-pink-500'>
//               Add
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default ProductForm
