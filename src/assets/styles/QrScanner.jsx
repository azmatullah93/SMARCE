import React, { useState } from 'react'
import { QrReader } from 'react-qr-reader'

const QrScanner = () => {
  const [data, setData] = useState('No result')

  const handleScan = result => {
    if (result) {
      setData(result)
    }
  }

  const handleError = error => {
    console.error(error)
  }

  return (
    <div>
      <h1>QR Code Scanner</h1>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            handleScan(result?.text)
          }

          if (!!error) {
            handleError(error)
          }
        }}
        style={{ width: '50%' }}
      />
      <p>{data}</p>
    </div>
  )
}

export default QrScanner
