import { updateLoadState, updateData } from "./userSlice.js";
import {newEvent} from "../components/event";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


let mail = ''
let pas = ''
const  setMail = (email) => {

    mail = email

}
const  setPassword = (pass) => {

    pas = pass

}
newEvent.addListener('Mail', setMail);
newEvent.addListener('Pass', setPassword);
export async function userLogin(dispatch){


    const auth = getAuth();
    signInWithEmailAndPassword(auth,mail,pas)
        .then ((userCredential) => {
            dispatch(updateLoadState({state:1,error:null,isLogin:false}));

                dispatch(updateLoadState({state: 2, error: null, isLogin: true}));
                console.log('Success')
                const stringify = JSON.stringify(userCredential.user);
                dispatch(updateData(stringify))

        })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        dispatch(updateLoadState({state:3,error:error,isLogin:false}))
                        console.log(`ErrorCode: ${errorCode} ErrorMessage: ${errorMessage} `)
                    });


}
