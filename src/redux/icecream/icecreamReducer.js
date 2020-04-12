import {BUY_ICECREAM} from './icecreamType';

const initalState = {
    noOfIcecream: 10
};

const icecreamReducer = (state = initalState,action)=>{
    switch(action.type){
        case BUY_ICECREAM: return {
            ...state,
            noOfIcecream: state.noOfIcecream - 1
        }
        default: return state
    }
} 

export default icecreamReducer;