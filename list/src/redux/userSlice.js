import {createSlice} from "@reduxjs/toolkit";

const initialState = {

    email: null,
    id:null,
    token:null,
    isLogin:null,
    taskInfo:null,
    taskId:null,


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

    setTaskInfo: (state,action) => {
            state.taskInfo = action.payload.taskInfo;

        },
        setTaskId: (state,action) => {
            state.taskId = action.payload.taskId;

        },
    }


});
export const { setUser,setLogin,setTaskInfo,setTaskId } = userSlice.actions;

export default userSlice.reducer;