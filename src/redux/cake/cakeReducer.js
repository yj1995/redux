import {
    BUY_CAKE
} from './cakeType';

const initalState = {
    noOfCake: 10
}

const cakeReducer = (state = initalState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
                ...state,
                noOfCake: state.noOfCake - action.payload
            }
            default : return state
    }
}

export default cakeReducer;