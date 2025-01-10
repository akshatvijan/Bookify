import React from 'react'
import footerLogo  from "../assets/footer-logo.png"
import {Link} from "react-router-dom"

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 sm:px-12 px-4 ">
      {/* Top Section */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left Side - Logo and Nav */}
        <div className="md:w-1/2 w-full">
          <img src={footerLogo} alt="Logo" className="mb-5 w-36" />
          <ul className="flex flex-col md:flex-row gap-4">
            <li><a href="#home" className="hover:text-primary">Home</a></li>
            <li><a href="#services" className="hover:text-primary">Services</a></li>
            <li><a href="#about" className="hover:text-primary">About Us</a></li>
            <li><a href="#contact" className="hover:text-primary">Contact</a></li>
          </ul>
        </div>

        {/* Right Side - Newsletter */}
        <div className="md:w-1/2 w-full">
          <p className="mb-4">
            Subscribe to our newsletter to receive the latest updates, news, and offers!
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-l-md text-black"
            />
            <button className="bg-primary px-6 py-2 rounded-r-md hover:bg-primary-dark">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center mt-10 border-t border-gray-700 pt-6">
        {/* Left Side - Privacy Links */}
        <ul className="flex gap-6 mb-4 md:mb-0">
          <li><Link to="#privacy" className="hover:text-primary">Privacy Policy</Link></li>
          <li><Link href="#terms" className="hover:text-primary">Terms of Service</Link></li>
        </ul>

        {/* Right Side - Social Icons */}
        <div className="flex gap-6">
          <Link to="https://facebook.com" target="_blank"  className="hover:text-primary">
            <FaFacebook size={24} />
          </Link>
          <Link to="https://twitter.com" target="_blank" className="hover:text-primary">
            <FaTwitter size={24} />
          </Link>
          <Link to="https://instagram.com" target="_blank"  className="hover:text-primary">
            <FaInstagram size={24} />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer