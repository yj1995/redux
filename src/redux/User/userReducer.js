import {FETCH_USER_REQUEST,FETCH_USER_SUCCESS,FETCH_USER_ERROR} from './userType';

const initalState = { 
    loading : false,
    user: [],
    error: ''
}

const userReducer = (state = initalState,action)=>{
    switch(action.type){
        case FETCH_USER_REQUEST : return {
            ...state,
            loading: true
        }
        case FETCH_USER_SUCCESS: return{
            ...state,
            loading: false,
            user: action.payload,
            error: ''
        }
        case FETCH_USER_ERROR: return{
            ...state,
            loading: false,
            user:[],
            error: action.payload
        }
        default : return state; 
    }
}

export default userReducer;