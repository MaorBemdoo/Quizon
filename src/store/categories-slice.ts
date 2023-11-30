import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    categories: []
}

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        fetchCats: {
            reducer(state, action){
                state.categories = action.payload
            },
            prepare(categories){
                axios.get('https://opentdb.com/api_category.php')
                    .then(res => {
                        console.log(res.data.trivia_categories);
                        return res.data.trivia_categories
                    })
                    .catch(err => {
                        console.log(err)
                        return [{id: 1, name: "Bemdoo"}, {id: 2, name: "Suur"}]
                    })
            }
        }
    }
})

export const selectCategories = (state) => state.categories.categories
export const categoriesActions = categoriesSlice.actions
export default categoriesSlice.reducer