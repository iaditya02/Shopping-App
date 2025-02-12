import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add,remove } from '../redux/slices/cartSlices';
import toast from 'react-hot-toast';

const Product = ({item}) => {

    const {cart}=useSelector((state)=>state);

    const dispatch=useDispatch();

    const addToCart=()=>{
        dispatch(add(item));
        toast.success("Item added to cart")
    }

    const removeFromCart=()=>{
        dispatch(remove(item.id));
        toast.error("Item removed from cart");
    }

  return (
    <div className=' flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] rounded-xl gap-3 mt-10 p-4 ml-5'>
        <div>
            <p className=' text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1'>{item.title}</p>
        </div>
        <div>
            <p className='w-40 text-gray-400 font-normal text-[12px] text-left'>{item.description.split(" ").slice(0,10).join(" ")+"..."}</p>
        </div>
        <div className='h-[180px]'>
            <img className='h-full w-full' src={item.image} alt="product" />
        </div>

        <div className=' flex justify-between gap-12 items-center w-full mt-5'>
            <div>
                <p className=' text-green-600 font-bold'>
                    ${item.price}
                </p>
            </div>

            {
                cart.some((p)=> p.id===item.id) ?  
                
                
                (<button
                 className=' text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in'
                 onClick={removeFromCart}>
                Remove Item
                </button>):
                
                (<button 
                 className=' text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in'
                onClick={addToCart}>
                Add To Cart
                </button>)
            }
        </div>
        
        
    </div>
  )
}

export default Product