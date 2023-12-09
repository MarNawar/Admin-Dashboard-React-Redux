import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  loading : false,
  users: [],
  globalUsers: [],
  isFiltered: false,
  filteredText: '',
  error:'',
}

//createAsyncThunk  automatically generate pending , fulfilled, and rejected action types
export const fetchUsers = createAsyncThunk('user/fetchUsers', ()=>{
  return axios
    .get('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json')
    .then(response=> response.data)
})

const userSlice = createSlice({
  name:'user',
  initialState,
  reducers:{
    delete:(state,action)=>{
      state.globalUsers = state.globalUsers.filter((user)=>{
        return user.id !== action.payload;
      });
      if(state.isFiltered === false){
        state.users = state.globalUsers;
      }
      else{
        state.users = state.globalUsers.filter((itm)=>{
          if (JSON.stringify(itm.name).toLowerCase().includes(state.filteredText) || JSON.stringify(itm.email).toLowerCase().includes(state.filteredText) || JSON.stringify(itm.role).toLowerCase().includes(state.filteredText)) {
            return true;
          }
        })
      }
    },
    update:(state,action)=>{
      state.globalUsers = state.globalUsers.map((user)=>{
        return user.id === action.payload.id?action.payload:user;
      });
      if(state.isFiltered === false){
        state.users = state.globalUsers;
      }
      else{
        state.users = state.globalUsers.filter((itm)=>{
          if (JSON.stringify(itm.name).toLowerCase().includes(state.filteredText) || JSON.stringify(itm.email).toLowerCase().includes(state.filteredText) || JSON.stringify(itm.role).toLowerCase().includes(state.filteredText)) {
            return true;
          }
        })
      }
    },
    search:(state,action)=>{
      if(action.payload ===''){
        state.users = state.globalUsers;
        state.isFiltered = false;
        state.filteredText='';
      }
      else{
        state.users = state.globalUsers.filter((itm)=>{
          if (JSON.stringify(itm.name).toLowerCase().includes(action.payload) || JSON.stringify(itm.email).toLowerCase().includes(action.payload) || JSON.stringify(itm.role).toLowerCase().includes(action.payload)) {
            return true;
          }
        })
        state.isFiltered =true;
        state.filteredText = action.payload;
      }
    },
  },
  extraReducers:(builder)=>{
    builder.addCase(fetchUsers.pending, state=>{
      state.loading = true
    })
    builder.addCase(fetchUsers.fulfilled, (state,action)=>{
      state.loading = false
      state.globalUsers = action.payload
      state.users = action.payload
      state.error = ''
    })
    builder.addCase(fetchUsers.rejected, (state,action)=>{
      state.loading = false
      state.users = []
      state.globalUsers=[]
      state.error = action.error.message
    })
  },
});

export default userSlice.reducer
export const userActions = userSlice.actions
