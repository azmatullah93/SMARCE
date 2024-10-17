import React, { useRef } from 'react'
import QRCode from 'qrcode.react'

const QrCode = ({ value }) => {
  const qrRef = useRef()

  // Download the QR code with a high resolution and white border
  const handleDownload = () => {
    const canvas = qrRef.current.querySelector('canvas')

    // Create an offscreen canvas for high-resolution QR code generation
    const offscreenCanvas = document.createElement('canvas')
    const context = offscreenCanvas.getContext('2d')

    // Set the size of the QR code to a larger resolution for download (e.g., 500px)
    const qrSize = 500
    const borderSize = 50 // Border size (in pixels)

    // Set the offscreen canvas size to accommodate the border
    offscreenCanvas.width = qrSize + borderSize * 2
    offscreenCanvas.height = qrSize + borderSize * 2

    // Fill the background with white
    context.fillStyle = '#FFFFFF'
    context.fillRect(0, 0, offscreenCanvas.width, offscreenCanvas.height)

    // Draw the original QR code from the frontend onto the offscreen canvas
    context.drawImage(canvas, borderSize, borderSize, qrSize, qrSize)

    // Create the data URL for the high-res QR code with white border
    const url = offscreenCanvas.toDataURL('image/png')
    const a = document.createElement('a')
    a.href = url
    a.download = 'qrcode.png'
    a.click()
  }

  return (
    <>
      <div className='qr-container' ref={qrRef}>
        <QRCode value={value} size={500} /> {/* High-res QR code */}
      </div>
      <button
        className='bg-pink-400 p-4 rounded-lg mb-4 mt-5 hover:bg-pink-500'
        type='button'
        onClick={handleDownload}
      >
        Download QRCode
      </button>
    </>
  )
}

export default QrCode
