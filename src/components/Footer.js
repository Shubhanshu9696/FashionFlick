import React from 'react';
// import { NavLink } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-5">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-wrap justify-between items-start ">
                    <div className="w-full md:w-1/3 mb-8 md:mb-0">
                        <h2 className="text-xl font-bold mb-4">About Us</h2>
                        <p>We are a company dedicated to providing the best services and products to our customers.</p>
                    </div>
                    {/*<div className="w-full md:w-1/3 mb-8 md:mb-0">
                        <h2 className="text-xl font-bold mb-4">Quick Links</h2>
                        <ul className="space-y-2">
                        <li><NavLink to="/" className="hover:underline">Home</NavLink></li>
                        <li><NavLink to="/services" className="hover:underline">Services</NavLink></li>
                        <li><NavLink to="/about" className="hover:underline">About</NavLink></li>
                        <li><NavLink to="/contact" className="hover:underline">Contact</NavLink></li>
                        </ul>
                    </div> */}
                    <div className="w-full md:w-1/3 mb-8 md:mb-0">
                        <h2 className="text-xl font-bold mb-4">Contact Us</h2>
                        <p>Email: shubhanshutiwari1011@gmail.com</p>
                        <p>Phone: (+91) 9696300187</p>
                    </div>
                    <div className="w-full md:w-1/3">
                        <h2 className="text-xl font-bold mb-4">Follow Us</h2>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                                <FaFacebook size={24} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                                <FaTwitter size={24} />
                            </a>
                            <a href="https://www.instagram.com/shubhanshu_tiwari__/?next=%2F" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                                <FaInstagram size={24} />
                            </a>
                            <a href="https://www.linkedin.com/in/shubhanshu-tiwari-4a1025215/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                                <FaLinkedin size={24} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-8">
                    <p>&copy; 2024 Company Name. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
