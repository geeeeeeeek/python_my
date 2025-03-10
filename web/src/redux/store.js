import { configureStore } from "@reduxjs/toolkit";
import adminSettingReducer from "./adminSettingSlice";
import productFormReducer from "./productFormSlice";

const store = configureStore({
  reducer: {
    adminSetting: adminSettingReducer,
    productForm: productFormReducer
  },
});

export default store;
