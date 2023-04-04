import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    dataLoadState: 0, // 0 - not loaded, 1 - is loading, 2 - loaded, 3 - error
    dataLoadError: null,
    data:null,
    isLogin:null,

}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        updateLoadState: (state, action) =>{
            state.dataLoadState = action.payload.state;
            state.isLogin = action.payload.isLogin;
            state.dataLoadError = action.payload.error;


        },



        updateData: (state,action) => {
            state.data = action.payload;
        },



    }


});
export const { updateLoadState, updateData } = userSlice.actions;

export default userSlice.reducer;