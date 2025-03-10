import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productItem: null,
  isFormOpen: false
};

const productFormSlice = createSlice({
  name: "productForm",
  initialState,
  reducers: {
    setProductItem(state, action) {
      state.productItem = action.payload;
    },
    setIsFormOpen(state, action) {
      state.isFormOpen = action.payload;
    }
  },
});

export const {setProductItem, setIsFormOpen } =
  productFormSlice.actions;
export default productFormSlice.reducer;
