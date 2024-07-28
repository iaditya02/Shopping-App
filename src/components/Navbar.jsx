import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';


const Navbar = () => {

    const {cart}=useSelector((state)=>state);

  return (
    <div>
        <nav className='flex justify-between items-center h-20 max-w-6xl mx-auto md:p-4'>
            <NavLink to="/">
                <div className='ml-5'>
                <img className='h-14 rounded-lg' src='https://dynamic.brandcrowd.com/asset/logo/c5d38f4b-1060-42ba-9f7f-94e58f1f2fac/logo-search-grid-1x?logoTemplateVersion=2&v=638371781451900000&text=shopping+cart&colorpalette=red'/>
                </div>
            </NavLink>

            <div className='flex items-center font-medium text-slate-100 space-x-6'>
            
                <NavLink to="/">
                    <p>Home</p>
                </NavLink>

                <NavLink to={"/cart"}>
                    <div className=' relative'>
                    {
                        cart.length>0 &&<span className=' absolute -top-1 -right-2 bg-green-600 text-sm w-5 h-5 flex justify-center items-center animate-bounce rounded-full'>{cart.length}</span>
                    }
                    <FaShoppingCart className='text-2xl'/>
                    </div>
                </NavLink>
                
            </div>
        </nav>
    </div>
  )
}

export default Navbar