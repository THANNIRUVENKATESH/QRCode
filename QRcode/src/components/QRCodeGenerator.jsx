import React, { useState } from 'react'
import QRCode from 'qrcode'

export default function QRCodeGenerator() {
  const [url, setUrl] = useState('')  // Use `setUrl` for consistency
  const [qrcode, setQRCode] = useState('')

  const generateQRCode = () => {
    QRCode.toDataURL(url, (err, url) => {
      if (err) return console.error(err)
      console.log(url)  // Log the QR code URL to the console
      setQRCode(url)    // Update the QR code state with the generated URL
    })
  }

  return (
    <div className='container'>
      <h1>QR Code Generator</h1>
      <input
        className='inputtext'  // Use `input-text` for clarity
        value={url}
        onChange={(evt) => setUrl(evt.target.value)}  // `setUrl` to set the input URL
        type="text"
        placeholder='Enter URL'
      />
      <button className='btn' onClick={generateQRCode}>Generate QR Code</button><br />
      {qrcode && <img src={qrcode} alt="QR Code" />}  {/* Ensure the QR code is only displayed when available */}
    </div>
  )
}
