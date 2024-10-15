import { createSlice } from "@reduxjs/toolkit";

const initState={
    filters:{
        name:'',
    }
}

const slice=createSlice({
    name:'filters',
    initState,
    reducers:{
        changeFilter:(state, action)=>{
            state.filters.name=action.payload
        }
    }
})

export const nameFilter=state=>state.filters.filters.name
export const filtersReducer=slice.reducer
export const {changeFilter}=slice.actions