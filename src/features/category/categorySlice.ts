import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCategory = createAsyncThunk(
    "category/fetchCategory",
    async (arg) => {
        try {
            console.log(arg);
            const response = await axios.request({
                method: 'get',
                url: 'https://opentdb.com/api_config.php',
                params: {
                    amount: arg.categoryId,
                    difficulty: arg.difficulty
                }
            })
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error("Failed to fetch category");
        }
    }
);

interface initialStateType {
    question: string
    options: string[]
    difficulty: string
    id: string
}

const initialState: initialStateType = {
    question: "",
    options: [],
    difficuly: "",
    id: ""
};

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        setCategoryId(state, action){
            state.id = action.payload
        },
        setCategoryDifficulty(state, action){
            state.difficulty = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategory.pending, (state) => {

            })
            .addCase(fetchCategory.fulfilled, (state, action) => {
            
            })
            .addCase(fetchCategory.rejected, (state) => {

            });
    },
});

export const { setCategoryId, setCategoryDifficulty } = categorySlice.actions
export default categorySlice.reducer;
