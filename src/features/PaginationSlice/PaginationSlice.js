import {createSlice} from '@reduxjs/toolkit'
const initialState={
  rowsPerPage:5,
  ind: 0,
}
const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers:{
    indexInc: (state)=>{
      state.ind= state.ind+state.rowsPerPage;
    },
    indexDec: (state)=>{
      state.ind = state.ind-state.rowsPerPage;
    },
    indexFirst:(state)=>{
      state.ind =0 ;
    },
    indexLast:(state,action)=>{
      state.ind = action.payload;
    },
    indexSet:(state,action)=>{
      state.ind = action.payload;
    },
    setRowPerPage:(state, action)=>{
      state.rowsPerPage = action.payload;
    }
  }
})

export default paginationSlice.reducer
export const paginationActions = paginationSlice.actions
