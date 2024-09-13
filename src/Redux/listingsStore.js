import {createAsyncThunk,createSlice} from "@reduxjs/toolkit"
import axios from 'axios'



const api_link = process.env.REACT_APP_API_LINK


const fetchListings = createAsyncThunk(
    'listings/fetchall',
    async (req,thunkAPI)=>{
        const token = localStorage.getItem("real")
        const response = await axios.get(api_link+"/alllistings?page="+req,
            {
                headers:{
                    "Authorization":token
                }
            }
        )
        return response.data
    }
)

const addListings = createAsyncThunk(
    'listings/addlisting',
    async (data)=>{
        const token = localStorage.getItem("real")
        await axios.post(api_link+"/addlisting",data,{
            headers:{
                'Content-Type':'multipart/form-data',
                'Authorization':token
            }
        }
        )
    }
)


const deleteListing = createAsyncThunk(
    'listings/deleteListing',
    async (data)=>{
        const token = localStorage.getItem("real")
        const response = await axios.delete(api_link+"/deletelistings/"+data,{
            headers:{
                'Authorization':token
            }
        })
        return response.data
    }
)

const myListing = createAsyncThunk(
    'listings/myListings',
    async (data) =>{
        const token = localStorage.getItem("real")
        const response = await axios.get(api_link+"/mylisting",{
            headers:{
                'Authorization':token
            }
        })
        return response.data
    }
)

const List = createAsyncThunk(
    'listings/List',
    async (data)=>{
        const token = localStorage.getItem("real")
        const list = await axios.get(api_link+'/list/'+data,{
            headers:{
                'Authorization':token
            }
        })
        console.log(list.data)
        return list.data
    }
)

const editList = createAsyncThunk(
    'listings/editList',
    async (data)=>{
        const token = localStorage.getItem("real")
        const list = await axios.patch(api_link+'/editlistings',data,{
            headers:{
                'Authorization':token
            }
        })
    }
)

const filterListing = createAsyncThunk(
    'listings/filterListing',
    async (data,thunkAPI)=>{
        console.log(data)
        const list = await axios.get(api_link+"/filterlistings",{
            params:data
        })
        return list.data
    }
)

const initialState = {listdata:[],loading:false,error:"",query:{}}

const store = createSlice({
    name:'listings',
    initialState,
    reducers:{
        setQuery:(state,action)=>{
            state.query=action.payload
        }
    }
    ,
    extraReducers:(builder)=>{
        builder.addCase(fetchListings.fulfilled,(state,action)=>{
            state.listdata=action.payload
            state.loading=false
        })
        .addCase(fetchListings.pending,(state,action)=>{
            state.loading=true
        })
        .addCase(fetchListings.rejected,(state,action)=>{
            state.error=true
            state.loading=false
        })
        .addCase(deleteListing.pending,(state)=>{
            state.loading=true
        })
        .addCase(deleteListing.fulfilled,(state,action)=>{
            //console.log(action.payload)
            state.listdata=action.payload
            state.loading=false
            
        })
        .addCase(deleteListing.rejected,(state)=>{
            state.error=true
            state.loading=false
        })
        .addCase(myListing.pending,(state)=>{
            state.loading=true
            state.listdata=[]
        })
        .addCase(myListing.fulfilled,(state,action)=>{
            state.loading=false
            state.listdata=action.payload
        })
        .addCase(List.fulfilled,(state,action)=>{
            state.data=action.payload
            state.loading=false
        })
        .addCase(List.pending,(state)=>{
            state.loading=true
        })
        .addCase(filterListing.fulfilled,(state,action)=>{
            console.log(action.payload)
            state.listdata=action.payload
            state.loading=false
            state.filter=true
        })
        .addCase(filterListing.pending,(state)=>{
            state.loading=true
        })
        .addCase(addListings.fulfilled,(state,action)=>{
            if(action.payload)
            {
                state.error=action.payload.error
            }
        })
    }
})

export {fetchListings,addListings,myListing,deleteListing,List,editList,filterListing}
export default  store.reducer
export const {setQuery} = store.actions