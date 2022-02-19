import { types } from "../types/types";
import { postFetch } from "../utils/FetchFunctions";
import {signInWithPopup} from 'firebase/auth';
import { auth, googleProvider } from "../firebase/firebase-config";
import Swal from 'sweetalert2'
import { cleanList } from "./list";

export const startLoginEmailPassword = (user) => {

    return async (dispatch) => {
        try {
            const data = await postFetch('login', user);
            dispatch( login(data) );
            localStorage.setItem('auth', JSON.stringify(data))
        } catch (error) {
            Swal.fire('Error', error, 'error')
        }finally{

        }

    }
}

export const startLoginGoogleProvider = () =>{
    return async(dispatch)=>{
        try{
            const {user} = await signInWithPopup(auth, googleProvider);
            dispatch(loginGoogle(user))
            const resAuth = {token:user.uid}
            localStorage.setItem('auth', JSON.stringify(resAuth))
        }catch(e){
            console.log(e)
        }
    } 
}

export const startLogout = () =>{
    return (dispatch)=>{
        dispatch(logout())
        dispatch(cleanList())
        localStorage.setItem('auth','')
    }
}

export const loginGoogle = (user) =>({
    type : types.authLoginGoogle,
    payload : user   
})


export const login = (user) => ({
    type: types.authLogin,
    payload: user
})

export const logout = () => ({
    type: types.authLogout
})
