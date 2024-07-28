import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  const {counter}=useSelector((state)=>state);


  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => {
      return acc + (curr.price*(counter[curr.id]||1))
    }, 0));
  }, [cart,counter]);

  return (
    <div>
      {cart.length > 0 ? (
        <div className="flex gap-16 max-w-6xl p-6 mx-auto flex-wrap lg:flex-nowrap">
          <div className="lg:w-[70%]">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} setTotalAmount={setTotalAmount} />
            ))}
          </div>

          <div className="flex flex-col justify-between w-full gap-8 md:w-[30%]">
                <div className=" mt-20">
                    <p className="text-xl uppercase font-[600] text-green-600">Your Cart</p>
                    <div className=" text-5xl font-[600] uppercase mb-4  text-green-800">Summary</div>
                    <p className=" font-[600] text-xl text-slate-700">
                        <span className=" font-normal">Total Items: {cart.length}</span>
                    </p>
                </div>

                <div className=" mb-20">
                    <p className="text-slate-800 text-xl font-[600] mb-5">Total Amount: <span className="font-bold ml-2 text-black">${totalAmount}</span></p>
                    <button className="text-lg w-full py-2.5 rounded-lg font-bold text-white bg-green-700
          border-2 border-green-700 hover:bg-white hover:text-[#15803d] transition-all duration-300 hover:scale-95 ease-in">CheckOut Now</button>
                </div>
          </div>
        </div>
      ) : (
        <div className=" w-screen h-[90vh] flex items-center justify-center flex-col gap-6">
          <h1 className=" font-[600] text-xl">Your Cart is Empty</h1>
          <NavLink to={"/"}>
            <button className=" text-white text-md uppercase bg-green-700 font-[600] py-3 px-10 rounded-md border-green-700 border-2 hover:bg-slate-100 hover:text-green-700 transition-all duration-300 ease-in-out hover:scale-95">Shop now</button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Cart;
