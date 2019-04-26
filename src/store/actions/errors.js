import { START_ERROR, STOP_ERROR } from "actionTypes";


export const startError = (err) => {
    return {
        type: START_ERROR,
        error: err
    };
};

export const stopError = () => {
    return {
        type: STOP_ERROR
    };
};