import { AppThunk, RootState } from "../../stores/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface LoginState {
  username: string;
  role: string;
  menuLists: any[];
}

// Define the initial state using that type
const initialState: LoginState = {
  username: "ryo",
  role: "admin",
  menuLists: [
    {
      id: "1",
      name: "首页",
      icon: "icon-home",
      url: "/",
      parent_id: "0",
    },
    {
      id: "2",
      name: "foo",
      icon: "icon-foo",
      url: "/foo",
      parent_id: "0",
    },
    {
      id: "2-1",
      name: "auth-button",
      icon: "icon-auth-button",
      url: "/foo/auth-button",
      parent_id: "2",
    },
  ],
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function

// Other code such as selectors can use the imported `RootState` type

export default loginSlice.reducer;
