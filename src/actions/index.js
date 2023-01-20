import {auth, provider} from "../firebase";
import { signInWithPopup , GoogleAuthProvider} from "firebase/auth";
import { SET_USER } from "./actionType";

export const setUser = (payload) => ({
    type: SET_USER,
    user: payload, 
});

export function signInAPI() {
    return (dispatch) => {
        signInWithPopup(auth, provider)
        .then((payload) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            // const credential = GoogleAuthProvider.credentialFromResult(payload);
            // const token = credential.accessToken;
            // console.log(token);
            // dispatch who the signed in user is 
            dispatch(setUser(payload.user));
            console.log(payload);
        })
        .catch((error) => alert(error.message));
    };
};


export function getUserAuth() {
    return (dispatch ) => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                dispatch(setUser(user));
            }
        });
    }
}