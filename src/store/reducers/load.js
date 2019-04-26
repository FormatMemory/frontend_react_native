import { START_LOAD, STOP_LOAD } from "../actions/actionTypes";

const initialState = {
    isLoading: true,
}

const loadReducer = (state = initialState, action) => {
    // console.log("load reducer");
    // console.log(action.type);
    // console.log(state);
    switch (action.type) {
        case START_LOAD:
            return {
                ...state,
                isLoading: true
            };
        case STOP_LOAD:
            return {
                ...state,
                isLoading: false
            };
        default:
            return state;
    }
};

export default loadReducer;