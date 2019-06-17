import { 
    TRY_AUTH, 
    AUTH_SIGNUP_LOGIN,
    DELETE_TOKEN,
    UPDATE_TOKEN
} from './actionTypes';

export const updateToken = (authData) => {
    return {
        type: UPDATE_TOKEN,
        authData: authData
    }
}

export const deleteToken = () => {
    return {
        type: DELETE_TOKEN,
    } 
}

export const tryAuth = (authData) => {
    return {
        type: TRY_AUTH,
        authData: authData
    }
}

export const authSignupLogin = (authData) => {
    return {
        type: AUTH_SIGNUP_LOGIN,
        authData: authData
    }
}