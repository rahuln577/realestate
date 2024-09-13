import { create } from "@mui/material/styles/createTransitions";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const api_link = process.env.REACT_APP_API_LINK

const initialState = {
    data:[],
    uname:null,
    loggedin:false,
    loading:false,
    error:false,
    token:null,
}

const newUser = createAsyncThunk(
    "users/addnew",
    async (data,thunkAPI)=>{
        const response = await axios.post(api_link+"/newuser",data)
        return response.data
    }
)

const login = createAsyncThunk(
    'users/login',
    async (data,thunkAPI) => {
        const status = await axios.post(api_link+"/login",data)
        return status.data
    }
)

const getUser = createAsyncThunk(
    'users/getUser',
    async (data) => {
        const user = await axios.get(api_link+'/validuser',{
            headers:{
                'Authorization':data
            }
        })
        return user.data
    }
)


const userSlice = createSlice({
    name:"users",
    initialState,
    reducers:{
        logout:(state,action)=>{
            localStorage.removeItem("real")
            state.loggedin=false
            state.uname=null
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(login.fulfilled,(state,action)=>{
            state.data=action.payload
            if(action.payload.token)
            {
                localStorage.removeItem("real")
                localStorage.setItem("real",action.payload.token)
                state.loggedin = true
            }
            else state.error = action.payload.error
        })
        .addCase(getUser.fulfilled,(state,action)=>{
            state.uname = action.payload.uname
            state.loggedin = true
        })
    }
})

export  {newUser,login , getUser}
export const userReducer = userSlice.reducer
export const {logout} =  userSlice.actions