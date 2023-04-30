import { AppThunk, RootState } from "../../stores/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface TodoState {
  username: string;
  role: string;
  menuLists: string[];
}

// Define the initial state using that type
const initialState: TodoState = {
  username: "ryo",
  role: "admin",
  menuLists: ["/", "/login", "/foo", "/foo/test"],
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
// export const { setInputValue, setTodos } = loginSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectInputValue = (state: RootState) => state.todo.inputValue;

export default loginSlice.reducer;
