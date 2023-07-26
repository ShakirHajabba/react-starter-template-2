import { createSlice } from '@reduxjs/toolkit';
import { UserState } from 'types/auth.type';

export const initialState: UserState = {
    isLoggedIn: false,
    loginToken: '',
};

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        loginUser(state) {
            state.isLoggedIn = true;
            state.loginToken = 'randomtoken';
        },
    },
});

export const { loginUser } = authSlice.actions;
export default authSlice.reducer;
