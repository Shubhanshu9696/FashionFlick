import React from 'react';
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { remove } from '../redux/Slices/CartSlice';
import toast from 'react-hot-toast';

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item removed from cart");
  }

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col lg:flex-row items-center px-6 py-4 bg-white shadow-md rounded-lg mb-4">
      <div className="w-24 h-28 lg:w-32 lg:h-32 flex-shrink-0">
        <img src={item.image} alt='Product' className="w-full h-full object-contain rounded-lg" />
      </div>
      <div className="flex-1 w-full lg:pl-6">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between w-full">
          <h1 className="text-lg lg:text-xl font-bold mb-2 lg:mb-0">{item.title}</h1>
        </div>
        <h2 className="text-gray-700 mb-4">{item.description.split(" ").slice(0, 10).join(" ") + "..."}</h2>
        <div className="flex justify-between">
          <div className="text-xl text-green-600 font-semibold lg:ml-4">${item.price.toFixed(2)}</div>
          <div className='text-red-500 h-10 w-10 bg-pink-200 rounded-full flex justify-center items-center cursor-pointer' onClick={removeFromCart}>
            <RiDeleteBin5Fill className='text-2xl' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem;
