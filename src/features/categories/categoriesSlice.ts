import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch todos
export const fetchCategories = createAsyncThunk("categories/fetchCategories", async () => {
  try {
    const response = await axios.get("https://opentdb.com/api_category.php") // Assuming a function to fetch todos from an API
    console.log(response.status);
    return response.data; // Return the data received from the API
  } catch (error) {
    // Handle error scenarios
    console.log(error);
    throw new Error("Failed to fetch todos");
  }
});

interface initialStateType{
  categories: {id: number, name: string}[] | null | []
  loading: boolean
  error: null | string
}

// const categoriesStore = sessionStorage.getItem("categoriesStore")

// const initialState: initialStateType = {
//   categories: typeof categoriesStore !== "undefined" ? JSON.parse(categoriesStore).categories : [],
//   loading: false,
//   error: typeof categoriesStore !== "undefined" ? JSON.parse(categoriesStore).error : null,
// }

const categoriesStore = sessionStorage.getItem("categoriesStore");

let parsedCategories: { id: number; name: string }[] | null = null;
let parsedError: string | null = null;

try {
  if (categoriesStore) {
    parsedCategories = JSON.parse(categoriesStore).categories;
    parsedError = JSON.parse(categoriesStore).error
  }
} catch (error) {
  console.error("Error parsing categoriesStore:", error);
}

const initialState: initialStateType = {
  categories: parsedCategories || [],
  loading: false,
  error: parsedError,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    // Other synchronous reducers can be defined here if needed
  },
  extraReducers: (builder) => {
    builder
        .addCase(fetchCategories.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchCategories.fulfilled, (state, action) => {
            state.loading = false;
            state.categories = action.payload.trivia_categories;
            state.error = null;
            sessionStorage.setItem("categoriesStore", JSON.stringify({
              categories: action.payload.trivia_categories,
              error: null
            }))
        })
        .addCase(fetchCategories.rejected, (state) => {
            state.loading = false;
            state.error = "error";
            sessionStorage.setItem("categoriesStore", JSON.stringify({
              categories: [],
              error: "error"
            }))
        })
  },
});

export default categoriesSlice.reducer;
