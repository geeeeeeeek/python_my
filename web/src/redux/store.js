import { configureStore } from "@reduxjs/toolkit";
import adminSettingReducer from "./adminSettingSlice";
import productDataReducer from "./productDataSlice";

const store = configureStore({
  reducer: {
    adminSetting: adminSettingReducer,
    productData: productDataReducer
  },
});

export default store;
