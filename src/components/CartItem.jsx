import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { remove } from "../redux/slices/cartSlices";
import { toast } from "react-hot-toast";
import Counter from "./Counter";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed");
  };
  


  return (
    <div className=" p-4 border-b-2 last:border-none border-slate-700">
      <div className="flex justify-between py-3.5 px-2.5 gap-14 flex-col md:flex-row">
        <div className=" md:w-[30%] w-full flex justify-center items-center">
          <img className="w-[40%] md:w-[50%] lg:w-full" src={item.image}></img>
        </div>

        <div className=" md:w-[70%] w-full flex flex-col gap-5">
          <h1 className=" font-[600] text-slate-700 text-xl ">{item.title}</h1>
          <h1 className=" text-slate-700 ">
            {item.description.split(" ").slice(0, 16).join(" ") + "..."}
          </h1>
          <div className="flex justify-between">
            <p className=" text-green-600 font-bold text-lg">{item.price}</p>
            <div>
                <Counter item={item}/>
            </div>
            <div
              className=" w-10 h-10 rounded-full bg-red-200 flex justify-center items-center hover:bg-red-500 group transition-all cursor-pointer"
              onClick={removeFromCart}
            >
              <RiDeleteBin6Line
                fontSize={24}
                className=" group-hover:text-white text-red-700 transition-all"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
