import { START_ERROR, STOP_ERROR } from "../actions/actionTypes";

const initialState = {
    isError: false,
    errorMessgae: ""
}

const errorReducer = (state = initialState, action) => {
    // console.log("error reducer");
    switch (action.type) {
        case START_ERROR:
            return {
                ...state,
                isError: true,
                errorMessgae: action.error.error_message
            };
        case STOP_ERROR:
            return {
                ...state,
                isError: false,
                errorMessgae: ""
            };
        default:
            return state;
    }
};

export default errorReducer;