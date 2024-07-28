import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/slices/CounterSlice";

const Counter = ({item}) => {

  

  
  // const count=useSelector((state)=>state.counter.count);
  const count = useSelector(state => state.counter[item.id] || 1);
  
  const dispatch=useDispatch();
  
  const decreasing=()=>{
    dispatch(decrement(item.id))
  };
  
  const increasing=()=>{
    dispatch(increment(item.id));
  }
  


  return (
    <div >
      <div className=" flex gap-4 items-center border-2 p-1 rounded-lg">

        <button className=" bg-red-800 text-xl font-[600] text-white py-2 px-2 rounded-lg" onClick={(decreasing)}>
          <FiMinus/>
        </button>
        <div className=" text-xl font-[600]">{count}</div>
        <button className=" bg-green-700 text-xl font-[600] text-white py-2 px-2 rounded-lg" onClick={(increasing)}>
          <FaPlus/>
        </button>
      </div>
    </div>
  );
};

export default Counter;
