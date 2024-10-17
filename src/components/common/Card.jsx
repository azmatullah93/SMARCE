import React from 'react'
const Card = ({ children, positionClasses, text }) => {
  return (
    <div>
      <div
        className={`card1 p-8 border border-gray-300 rounded-lg shadow-md bg-white w-60 h-52 flex items-center justify-center ${positionClasses}`}
      >
        <div className='flex flex-col items-center'>
          {children}
          <h2 className='text-lg font-semibold text-gray-700'>{text}</h2>
        </div>
      </div>
    </div>
  )
}

export default Card
