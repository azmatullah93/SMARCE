import './App.css'
import Footer from './components/pages/Footer'
// import Button from './components/Button'
import HomePage from './components/pages/HomePage'
// import SmartContractService from './contracts/smartContract'
// import { useState } from 'react'

function App () {
  // const [connected, setConnected] = useState(false)

  // const connectWallet = async () => {
  //   try {
  //     await SmartContractService.connectWallet()
  //     setConnected(true)
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  return (
    <>
      <HomePage />
    </>
  )
}

export default App
