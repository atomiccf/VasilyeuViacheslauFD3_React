import {createSlice} from "@reduxjs/toolkit";

const initialState = {

    email: null,
    id:null,
    token:null,
    isLogin:null,

}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{

        setUser:(state, action) => {
            state.email = action.payload.email;
            state.id = action.payload.id;
            state.token = action.payload.token;
},
    setLogin: (state,action) => {
            state.isLogin = action.payload.isLogin;

},


    }


});
export const { setUser,setLogin } = userSlice.actions;

export default userSlice.reducer;