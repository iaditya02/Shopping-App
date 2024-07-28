import { createSlice } from "@reduxjs/toolkit";


const initialState = {};

export const CounterSlice=createSlice({
    name: 'counter',
  initialState,
  reducers: {
    increment: (state, action) => {
      const itemId = action.payload;
      state[itemId] = (state[itemId] || 1) + 1;
    },
    decrement: (state, action) => {
      const itemId = action.payload;
      if (state[itemId] > 0) {
        state[itemId] -= 1;
      }
    },
    // You can add more actions like reset or setCount if needed
  },
});

export const {increment,decrement}=CounterSlice.actions;

export default CounterSlice.reducer;