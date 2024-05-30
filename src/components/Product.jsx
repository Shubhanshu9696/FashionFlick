import { React } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../redux/Slices/CartSlice';
import toast from 'react-hot-toast';

export const Product = ({ post }) => {

  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();


  const addHandler = () => {
    dispatch(add(post))
    toast.success("Item added to cart");
  }

  const removeHandler = () => {
    dispatch(remove(post.id));
    toast.success("item remove from cart");
  }


  return (
    <div className='flex flex-col items-center justify-between hover:scale-110 transition duratioin-300 ease-in  gap-3 p-4 mt-10 ml-5 rounded-xl  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] '>
      <div>
        <p className='text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1'>{post.title}</p>
      </div>
      <div>
        <p className='w-40 text-gray-400 font-normal text-[10px] text-left'>{post.description.split(" ").slice(0, 10).join(" ") + "..."} </p>
      </div>
      <div className='h-[180px]'>
        <img src={post.image} alt='alternate' className='h-full w-full' />
      </div>

      <div className='flex items-center gap-12 justify-between w-full mt-5'>
        <div> <p className='text-green-600 font-semibold'>${post.price}</p> </div>
        {
          cart.some((p) => p.id === post.id) ?
            (
              <button onClick={removeHandler}
                className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] bg-white p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in '>
                Remove Item
              </button>
            ) :
            (
              <button onClick={addHandler}
                className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] bg-white p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in '>
                Add to cart
              </button>
            )
        }
      </div>
    </div>
  )
}
