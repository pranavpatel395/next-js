import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-800 text-white py-10">
  <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
    <div>
      <h2 className="font-bold text-lg mb-4">About Us</h2>
      <p>we are passionate about empowering </p>
      <p>ndividuals and businesses  innovative <br /> technology solutions. With a commitment to excellence</p>
      
    </div>

    <div>
      <h2 className="font-bold text-lg mb-4">Quick Links</h2>
      <ul>
        <li><a href="#" className="hover:text-green-400">Link1</a></li>
        <li><a href="#" className="hover:text-green-400">Link2</a></li>
        <li><a href="#" className="hover:text-green-400">Link3</a></li>
      </ul>
    </div>

    
    <div>
      <h2 className="font-bold text-lg mb-4">Follow Us</h2>
      <ul>
        <li><a href="#" className="hover:text-green-400">Instagram</a></li>
        <li><a href="#" className="hover:text-green-400">LinkedIn</a></li>
      </ul>
    </div>

   
    <div>
      <h2 className="font-bold text-lg mb-4">Contact Us</h2>
      <p>Mehsana, Gujarat, India</p>
      <p>+91 000000</p>
    </div>
  </div>
</footer>

      
    </div>
  )
}

export default Footer
