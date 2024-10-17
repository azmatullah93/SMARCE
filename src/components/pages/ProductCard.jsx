// import React from 'react'

// const ProductCard = ({ product }) => {
//   return (
//     <div className='bg-white shadow-lg rounded-lg p-4'>
//       <img
//         className='w-full h-48 object-cover rounded-t-lg'
//         src={product.image}
//         alt={product.name}
//       />
//       <div className='p-4'>
//         <h3 className='text-lg font-semibold'>{product.name}</h3>
//         <p className='text-gray-600'>{`Source: ${product.source}`}</p>
//         <p className='text-gray-600'>{`Destination: ${product.destination}`}</p>
//       </div>
//     </div>
//   )
// }

// export default ProductCard

// import React, { useState, useRef } from 'react';
// import QRReader from 'react-qr-reader';

// function ProductCard() {
//   const [result, setResult] = useState('No QR code detected');
//   const videoRef = useRef(null);

//   const handleScan = (data) => {
//     if (data) {
//         console.log("qr data ", data)
//       setResult(data);
//     }
//   };

//   return (
//     <div>
//       <video ref={videoRef} style={{ width: '320px', height: '240px' }} />
//       <p>{result}</p>
//     </div>
//   );
// }

// export default ProductCard;