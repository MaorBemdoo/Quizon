import { createSlice } from "@reduxjs/toolkit";

type User = {
    accessToken: string
    auth: object
    displayName: null | string
    email: string
    emailVerified: boolean
    isAnonymous: boolean
    metadata: object
    phoneNumber: null | string
    photoURL: null | string
    proactiveRefresh: object
    providerData: object
    providerId: string
    reloadListener: null
    reloadUserInfo: object
    stsTokenManager: object
    tenantId: string
    uid: string
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
