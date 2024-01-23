// formSlice.ts
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  model: '',
  visible: false,
  userId:'',
  userData:[],
  filteredData:[]
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    showForm: (state) => {
      state.visible = true;
    },
    hideForm: (state) => {
      state.visible = false;
    },
    setUserId:(state,action)=>{
      state.userId = action.payload
    },
    setUserData:(state,action) =>{
        state.userData=action.payload
    },
    setFilteredData:(state,action)=>{
        state.filteredData=action.payload
    }
  },
});

export const { showForm, hideForm,setUserId,setUserData,setFilteredData } = formSlice.actions;
export default formSlice.reducer;