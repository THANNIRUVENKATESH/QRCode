import React, { useState } from 'react';
import QRCode from 'qrcode';

export default function QRCodeGeneratorform() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [qrcode, setQRCode] = useState('');
  
  // Function to generate QR code
  const generateQRCode = (e) => {
    e.preventDefault();  // Prevent form submission
    
    // Check if at least one field is filled
    if (!name && !email && !phone && !address) {
      alert('Please fill in at least one field');
      return;
    }

    // Create a string with user information to encode into the QR code
    const userData = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nAddress: ${address}`;
    
    // Generate the QR code
    QRCode.toDataURL(userData, (err, url) => {
      if (err) return console.error(err);
      console.log(url);  // Log the generated QR code URL
      setQRCode(url);    // Set the generated QR code URL to the state
    });
  };

  return (
    <div className='container'>
      <h1>QR Code Generator</h1>
      
      {/* Form to capture user details */}
      <form onSubmit={generateQRCode}>
        <input
          className='input-text'
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Enter Name'
        /><br/><br/>
        <input
          className='input-text'
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Enter Email'
        /><br/><br/>
        <input
          className='input-text'
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder='Enter Phone Number'
        /><br/><br/>
        <input
          className='input-text'
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder='Enter Address'
        /><br/><br/>
        
        <button className='btn' type="submit">Generate QR Code</button>
      </form>

      {/* Display QR Code image if it's generated */}
      {qrcode && (
        <div>
          <h3>Your QR Code:</h3>
          <img src={qrcode} alt="QR Code" />
        </div>
      )}
    </div>
  );
}
 