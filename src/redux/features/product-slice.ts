import { dataProps } from "@/types";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

export interface productProps {
  data: [] | null;
  loading: boolean;
  error: string | null;
}
const initialState: productProps = {
  data: [],
  loading: false,
  error: "",
};

export const getProducts = createAsyncThunk("products", async () => {
  try {
    const res: AxiosResponse = await axios.get(
      "http://localhost:3000/api/products"
    );
    const products = await res.data;
    return products;
  } catch (error) {
    console.log("Error", error);
  }
});
export const products = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.data = action.payload;
      })
      .addCase(getProducts.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
        state.data = [];
      });
  },
});

export default products.reducer;
