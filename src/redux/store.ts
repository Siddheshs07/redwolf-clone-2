import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart-slice";
import productReducer from "./features/product-slice";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
  reducer: { products: productReducer, cart: cartReducer },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
