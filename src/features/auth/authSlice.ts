import { createSlice } from "@reduxjs/toolkit";

type User = {
    email: string;
    password: string;
};

interface initialStateType {
    user: null | User;
    accessToken: null | string;
}

const initialState: initialStateType = {
    user: null,
    accessToken: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredentials(state, action) {
            const { user, accessToken } = action.payload;
            state.user = user;
            state.accessToken = accessToken;
        },
        logOut() {
            return {
                user: null,
                accessToken: null,
            };
        },
    },
});

export const { setCredentials, logOut } = authSlice.actions;
export default authSlice.reducer;
