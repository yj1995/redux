import { combineReducers } from 'redux';
import icecreamReducer from './icecream/icecreamReducer';
import cakeReducer from './cake/cakeReducer';
import userReducer from './User/userReducer';

const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: icecreamReducer,
    user : userReducer
}); 

export default rootReducer;