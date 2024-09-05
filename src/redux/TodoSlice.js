import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  tasks:[],
  isEditing: false,
  editIndex: null,
};

export const tasksSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      
      state.tasks.push({description:action.payload,id: uuidv4(), isDone: false });
    },

    deleteTask: (state, action) => {
      state.tasks.splice(action.payload, 1);
    },
    editTask: (state, action) => {
      state.editIndex = action.payload;
      state.isEditing = true;
      
    },
    saveEditedTask: (state, action) => {
      state.tasks[state.editIndex].description=action.payload
      state.tasks[state.editIndex]= {
        ...state.tasks[state.editIndex],
        
      };
      state.isEditing = false;
      state.editIndex = null;
    },
    completeTask: (state, action) => {
      state.tasks[action.payload].isDone = true;
    },
   
  },
});

export const {
  addTask,
  deleteTask,
  editTask,
  saveEditedTask,
  completeTask,
 
} = tasksSlice.actions;

export default tasksSlice.reducer;
