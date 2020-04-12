import {FETCH_USER_REQUEST,FETCH_USER_SUCCESS,FETCH_USER_ERROR} from './userType';
import axios from 'axios';

export const fetchUserRequest = ()=>{
    return {
        type: FETCH_USER_REQUEST
    }
}

const fetchUserSuccess = (users)=>{
    return {
        type: FETCH_USER_SUCCESS,
        payload: users
    }
}

 const fetchUserError = (error)=>{
    return {
        type: FETCH_USER_ERROR,
        payload: error
    }
}

export const userFetch = ()=>{
    return (dispatch)=>{
        dispatch(fetchUserRequest());
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{
            const user = res.data;
            dispatch(fetchUserSuccess(user));
        })
        .catch((err)=>{
            const {message} = err;
            dispatch(fetchUserError(message));
        })
    }
}