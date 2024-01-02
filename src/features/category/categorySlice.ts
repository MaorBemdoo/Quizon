import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCategory = createAsyncThunk(
    "category/fetchCategory",
    async (arg: {difficulty: string, categoryId: string | undefined}) => {
        try {
            console.log(arg);
            const response = await axios.request({
                method: 'get',
                url: 'https://opentdb.com/api.php',
                params: {
                    amount: 10,
                    category: arg.categoryId,
                    difficulty: arg.difficulty
                }
            })
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error("Failed to fetch category");
        }
    }
);

type QuizzesType = {
    type: string
    difficulty: string
    category: string
    question: string
    correct_answer: string,
    incorrect_answers: string[]
}
interface initialStateType {
    quizzes: QuizzesType[] | []
    question: string
    incorrectAnswers: string[]
    correctAnswer: string
    difficulty: string
    number: number
    id: string
    loading: boolean
    error: string | null
    success: boolean
    score: number
    type: "question" | "result"
}

const initialState: initialStateType = {
    quizzes: [],
    question: "",
    incorrectAnswers: [],
    correctAnswer: "",
    difficulty: "easy",
    number: 1,
    id: "",
    loading: false,
    error: null,
    success: false,
    score: 0,
    type: "question"
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
        },
        setFetchToDefault(state){
            state.loading = false
            state.error = null
            state.success = false
        },
        setToDefault(){
            return {
                quizzes: [],
                question: "",
                incorrectAnswers: [],
                correctAnswer: "",
                difficulty: "easy",
                number: 1,
                id: "",
                loading: false,
                error: null,
                success: false,
                score: 0,
                type: "question"
            }
        },
        nextQuestion(state, action){
            if(action.payload == state.correctAnswer){
                state.score++
            }
            if(state.number < 10){
                state.number++
                state.question = state.quizzes[state.number-1].question
                state.incorrectAnswers = state.quizzes[state.number-1].incorrect_answers
                state.correctAnswer = state.quizzes[state.number-1].correct_answer
            }else{
                state.type = "result"
            }
        },
        setQuestion(state, action){
            state.question = state.quizzes[action.payload-1].question
            state.incorrectAnswers = state.quizzes[action.payload-1].incorrect_answers
            state.correctAnswer = state.quizzes[action.payload-1].correct_answer
        }
        // setCategoryLoading(state, action){
        //     state.loading = action.payload
        // }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategory.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchCategory.fulfilled, (state, action) => {
                state.loading = false
                state.success = true
                state.quizzes = action.payload.results
                state.question = action.payload.results[state.number-1].question
                state.incorrectAnswers = action.payload.results[state.number-1].incorrect_answers
                state.correctAnswer = action.payload.results[state.number-1].correct_answer
            })
            .addCase(fetchCategory.rejected, (state) => {
                state.loading = false
                state.error = "error"
            });
    },
});

export const { setCategoryId, setCategoryDifficulty, setFetchToDefault, nextQuestion, setQuestion, setToDefault } = categorySlice.actions
export default categorySlice.reducer;
