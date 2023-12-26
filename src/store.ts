import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./features/categories/categoriesSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import categoryReducer from "./features/category/categorySlice";

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    category: categoryReducer
  },
});

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
