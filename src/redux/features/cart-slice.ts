import { dataProps } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: dataProps[] = [];

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateCart: (state, action: PayloadAction<dataProps[]>) => {
      return action.payload;
    },
  },
});

export const { updateCart } = cart.actions;

export default cart.reducer;
