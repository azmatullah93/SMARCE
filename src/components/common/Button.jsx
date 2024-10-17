// // import React from 'react'

// const Button = ({text, style}) => {
//   return (
//     <div>

// <button type="button" className={` ${style} text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2`} >{text}</button>

//     </div>
//   )
// }

// export default Button

// import React from 'react'

const Button = ({ text, onClick, style }) => {
  return (
    <div>
      <button
        type='button'
        onClick={onClick}
        className={` ${style} text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2`}
      >
        {text}
      </button>
    </div>
  )
}

export default Button
