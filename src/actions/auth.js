import jwt from 'jsonwebtoken';
import toast from 'react-hot-toast';

export const loginUser = (email, password) => {
    // VERIFY EMAIL AND PASSWORD
    // create and sign a JWT
    const users = JSON.parse(localStorage.getItem('users')) ?? []
    const user = users.find(u => u.email === email)

    if (user.password === password) {
        const token = jwt.sign({ email: user.email }, 'SECRET')
        toast.success("LOGIN SUCCESS")

        return {
            type: "LOGIN_SUCCESS",
            payload: { token }
        }
    } else {
        toast("LOGIN FAILED")
        
        return {
            type: "LOGIN_FAILED",
            payload: { token: null }
        }
    }
}