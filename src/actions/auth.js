import axios from 'axios';
import jwt from 'jsonwebtoken';
import toast from 'react-hot-toast';


export const loginUser = (email, password) => async (dispatch) => {
    const base_Url = 'http://localhost:8008'
    try {
        const res = await axios.post(`${base_Url}/api/v1/auth/login`, {
            email, password
        })
        const { token, message } = res.data

        if (token) {
            toast.success('Login Success')
            dispatch({
                type: "LOGIN_SUCCESS",
                payload: { token }
            })
        } else {
            toast.error(message)
            dispatch({
                type: "LOGIN_FAILED",
                payload: { token: null }
            })
        }
    } catch (error) {
        console.log(error.message)
        toast.error(error.message)
    }
};

export const signupUser = (email, firstName, lastName, password) => async (dispatch) => {
    const base_Url = 'http://localhost:8008'
    try {
        const res = await axios.post(`${base_Url}/api/v1/auth/signup`, {
            email, firstName, lastName, password
        })
        const { user } = res.data
        if (user) {
            toast.success('Signup Success')
            dispatch({
                type: "SIGNUP_SUCCESS",
                payload: {
                    signup: true
                }
            })
        } else {
            toast.error('Signup Failed')
            dispatch({
                type: "SIGNUP_FAILED",
                payload: { signup: false }
            })
        }
    } catch (error) {
        console.log(error.message)
        toast.error(error.message)
    }
};
