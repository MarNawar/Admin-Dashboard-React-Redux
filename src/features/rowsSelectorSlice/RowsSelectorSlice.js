import {createSlice} from '@reduxjs/toolkit'
const initialState={
  masterSelector: false,
  ind: 0,
}
const RowsSelectorSlice = createSlice({
  name: 'rowsSelector',
  initialState,
  reducers:{
    toggleMasterSelector: (state)=>{
      state.masterSelector= !(state.masterSelector);
    },
    indexDec: (state)=>{
      state.ind = state.ind-10;
    },
    indexFirst:(state)=>{
      state.ind =0 ;
    },
    indexLast:(state,action)=>{
      state.ind = action.payload;
    },
    indexSet:(state,action)=>{
      state.ind = action.payload;
    }
  }
})

export default paginationSlice.reducer
export const paginationActions = paginationSlice.actions
