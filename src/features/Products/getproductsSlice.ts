import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
export const getProductsSlice = createSlice({
  name: "getProducts",
  initialState: {
    loading: false,
    products: [],
    error: null,
  },
  reducers: {
    productsRequest: (state) => {
        state.loading = true;
        state.products = [];
        state.error = null;
    },

    productsSuccess: (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.error = null;
    },

    productsError: (state, action) => {
        state.loading = false;
        state.products = [];
        state.error = action.payload;
    },

    productsReset: (state) => {
      state.loading = false;
      state.products = [];
      state.error = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { productsRequest, productsSuccess, productsError } =
  getProductsSlice.actions;

export const getProducts = () => async (dispatch) => {
  dispatch(productsRequest());
  try {
    const {data} = await axios.get("https://molla-backend.onrender.com/products");
    
    dispatch(productsSuccess(data.payload));
    return data;
  } catch (error) {
    dispatch(productsError(error.message))
  }
};
export default getProductsSlice.reducer;
