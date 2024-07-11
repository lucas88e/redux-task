import { createSlice } from "@reduxjs/toolkit";



const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTask: (state, action) => {

      const newTask = {
        id: Date.now(),
        task: action.payload,
      };
      state.push(newTask);
    },

    removeTask: (state, action) => {

     return state.filter(task => task.id !== action.payload);
    }  },
});

export const { addTask, removeTask } = todoSlice.actions;
export default todoSlice.reducer;

