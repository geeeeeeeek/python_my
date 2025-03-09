import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  category: undefined
};

const productDataSlice = createSlice({
  name: "productData",
  initialState,
  reducers: {
    setTitle : (state, action) => {
      state.title = action.payload;
    },
    setCategory : (state, action) => {
      state.category = action.payload;
    },
    setProductData: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetProductData: () => initialState,
  },
});

export const {setTitle, setCategory, resetProductData, setProductData } =
  productDataSlice.actions;
export default productDataSlice.reducer;
