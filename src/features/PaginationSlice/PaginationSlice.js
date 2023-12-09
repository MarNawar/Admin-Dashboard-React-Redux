import {createSlice} from '@reduxjs/toolkit'
const initialState={
  rowsPerPage:10,
  ind: 0,
}
const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers:{
    indexInc: (state)=>{
      state.ind= state.ind+10;
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
