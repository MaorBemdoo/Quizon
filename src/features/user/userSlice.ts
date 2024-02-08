import { createSlice } from "@reduxjs/toolkit";

interface initialStateType{

}

const initialState: initialStateType = {

}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {

    },
});

export default userSlice.reducer;