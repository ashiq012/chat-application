import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authUser: JSON.parse(localStorage.getItem("authUser")) || null,
  otherUsers: null,
  selectedUser: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuthUser: (state, action) => {
      state.authUser = action.payload;
      if (action.payload) {
        localStorage.setItem("authUser", JSON.stringify(action.payload));
      } else {
        localStorage.removeItem("authUser");
      }
    },

    setOtherUsers: (state, action) => {
      state.otherUsers = action.payload;
    },

    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
    },
  },
});

export const { setAuthUser, setOtherUsers, setSelectedUser } =
  userSlice.actions;

export default userSlice.reducer;
