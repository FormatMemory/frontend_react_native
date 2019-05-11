import { TRY_AUTH } from './actionTypes';
import { AUTH_SIGNUP } from './actionTypes';

export const tryAuth = (authData) => {
    return {
        type: TRY_AUTH,
        authData: authData
    }
}

export const authSignup = (authData) => {
    return {
        type: AUTH_SIGNUP,
        authData: authData
    }
}