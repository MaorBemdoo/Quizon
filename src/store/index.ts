import { configureStore } from '@reduxjs/toolkit'
import categoriesSlice from './categories-slice'

const store = configureStore({
    reducer: {
        categories: categoriesSlice
    }
})

export default store
