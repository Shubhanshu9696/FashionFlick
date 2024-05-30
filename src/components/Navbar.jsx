import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {

  const {cart} = useSelector((state) => state)
  return (
    <div>
        <nav className='flex justify-between items-center h-20 max-w-6xl mx-auto'>

          <NavLink to='/'>
            <div className='ml-5'>
              <img src='/main_logo.png' alt='alternate' width={250} className='h-14'/>
            </div>
          </NavLink>

          <div className='flex space-x-6 items-center text-slate-100  font-medium mr-5'>
            <NavLink to="/">
              <p>Home</p>
            </NavLink>

            <NavLink to="/cart">
              <div className='relative'>
                <FaCartShopping className='text-2xl'/>  
                <span className='absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full'>{cart.length}</span> 
              </div>
            </NavLink>
          </div>
        </nav>
    </div>
  )
}
