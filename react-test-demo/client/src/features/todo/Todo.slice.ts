import { AppThunk, RootState } from '../../stores/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { findAllTodo, createTodoItem, updateTodoById, deleteTodo } from '../../service/todo';

// Define a type for the slice state
interface TodoState {
  inputValue: string;
  data: API.TodoItem[];
}

// Define the initial state using that type
const initialState: TodoState = {
  inputValue: '',
  data: []
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setInputValue: (state, action: PayloadAction<string>) => {
      state.inputValue = action.payload;
    },
    setTodos: (state, action: PayloadAction<API.TodoItem[]>) => {
      state.data = action.payload
    }
  },
});

export const createTodo = (): AppThunk => async (dispatch, getState) => {
  const res = await createTodoItem({name: selectInputValue(getState())});
  dispatch(setTodos(res.data.data))
  dispatch(setInputValue(''));
};

export const fetchTodos = (): AppThunk => async (dispatch) => {
  const result = await findAllTodo()
  dispatch(setTodos(result.data.data))
}

export const updateTodo = (todo: API.TodoItem): AppThunk => async (dispatch) => {
  const result = await updateTodoById(todo)
  dispatch(setTodos(result.data.data))
}

export const deleteTodoById = (id: string): AppThunk => async (dispatch) => {
  const result = await deleteTodo({id})
  dispatch(setTodos(result.data.data))
}


// Action creators are generated for each case reducer function
export const { setInputValue, setTodos } = todoSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectInputValue = (state: RootState) => state.todo.inputValue;

export default todoSlice.reducer;
