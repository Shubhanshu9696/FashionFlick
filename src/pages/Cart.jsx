import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';

export const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="container mx-auto px-4 py-6 max-w-6xl">
      {
        cart.length > 0 ? (
          <div className="flex flex-col lg:flex-row lg:space-x-6 gap-y-4">
            <div className="flex-1">
              {
                cart.map((item, index) => {
                  return <CartItem key={item.id} item={item} itemIndex={index} />;
                })
              }
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md lg:w-1/3">
              <div className="mb-4 text-xl font-bold">Your Cart</div>
              <div className="mb-2">Summary</div>
              <p className="mb-4"><span className="font-semibold">Total Items: {cart.length}</span></p>
              <p className="text-lg font-bold mb-4">Total Amount: ${totalAmount.toFixed(2)}</p>
              <button className="w-full bg-green-600 text-white py-2 rounded font-semibold text-xl hover:bg-green-700 transition duration-300 ease-in">Checkout Now</button>
            </div>
          </div>
        ) : (
          <div className="text-center flex flex-col justify-center items-center h-[60vh]">
            <h1 className="text-2xl font-bold mb-4 ">Cart is empty</h1>
            <Link to="/">
              <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 transition">Shop Now</button>
            </Link>
          </div>
        )
      }
    </div>
  );
};
