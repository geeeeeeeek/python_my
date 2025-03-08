import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPlaying: true,
  title: "",
  artist: "",
  showForm: false,
  formState:  "add",
  collapsed: false,
};

const adminSettingSlice = createSlice({
  name: "adminSetting",
  initialState,
  reducers: {
    setIsPlaying: (state, action) => {
      state.isPlaying = action.payload;
    },
    setShowForm: (state, action) => {
      state.showForm = action.payload;
    },
    setCollapsed: (state, action) => {
      state.collapsed = action.payload;
    },
    setFormState: (state, action) => {
      state.formState = action.payload;
    },
    setAdminSetting: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const {setShowForm, setCollapsed, setFormState,setAdminSetting } =
  adminSettingSlice.actions;
export default adminSettingSlice.reducer;
