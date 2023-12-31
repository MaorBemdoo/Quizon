import { useNavigate, useParams } from "react-router-dom"
import CategoryError from "./Error/CategoryError"
import { Helmet } from "react-helmet-async"
import { useAppDispatch, useAppSelector } from "../store"
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import category9 from '../assets/category9.jpeg'
import category10 from '../assets/category10.jpeg'
import category11 from '../assets/category11.jpeg'
import category12 from '../assets/category12.jpeg'
import category13 from '../assets/category13.jpeg'
import category14 from '../assets/category14.jpeg'
import category15 from '../assets/category15.jpeg'
import category16 from '../assets/category16.jpeg'
import category17 from '../assets/category17.jpeg'
import category18 from '../assets/category18.jpeg'
import category19 from '../assets/category19.jpeg'
import category20 from '../assets/category20.jpeg'
import category21 from '../assets/category21.jpeg'
import category22 from '../assets/category22.jpeg'
import category23 from '../assets/category23.jpeg'
import category24 from '../assets/category24.jpeg'
import category25 from '../assets/category25.jpeg'
import category26 from '../assets/category26.jpeg'
import category27 from '../assets/category27.jpeg'
import category28 from '../assets/category28.jpeg'
import category29 from '../assets/category29.jpeg'
import category30 from '../assets/category30.jpeg'
import category31 from '../assets/category31.jpeg'
import category32 from '../assets/category32.jpeg'
import { ArrowBack, CheckCircle, CheckCircleOutlined } from "@mui/icons-material"
import { Link } from "react-router-dom"
import { fetchCategory, setCategoryDifficulty, setCategoryId, setFetchToDefault } from "../features/category/categorySlice"
import { Modal } from "@mui/material"
import ModalStyle from "../styles/Modal.style"
import { useEffect, useState } from "react"
// import { useEffect } from "react"
interface CategoryProps{
    className?: string
}

const categoryImages = [category9, category10, category11, category12, category13, category14, category15, category16, category17, category18, category19, category20, category21, category22, category23, category24, category25, category26, category27, category28, category29, category30, category31, category32]

const Category = ({className}: CategoryProps) => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    // useEffect(() => {
    //     dispatch(fetchCategory({difficulty: 'easy', categoryId: '12'}))
    // }, [dispatch])
    const { categoryId } = useParams()

    dispatch(setCategoryId(categoryId))

    const [openModal, setOpenModal] = useState(false)
    // const categories = [{id: 18, name: "Test"}]
    const categories = useAppSelector((state) => state.categories.categories)
    const isLoading = useAppSelector((state) => state.categories.loading)
    let error = useAppSelector((state) => state.categories.error) || "error"

    const { difficulty, success } = useAppSelector((state) => state.category)

    useEffect(() => {
        if(success == true){
            setOpenModal(false)
            // setInterval(() => {
                navigate(`/category/${categoryId}/quiz`)
            // }, 10000)
        }
        dispatch(setFetchToDefault())
    }, [navigate, success, categoryId, dispatch])

    const startQuiz = () => {
        setOpenModal(true)
        dispatch(fetchCategory({difficulty, categoryId}))
        // dispatch(setFetchToDefault())
        // if(success == true){
        //     setOpenModal(false)
        //     // setInterval(() => {
        //         navigate(`/category/${categoryId}/quiz`)
        //     // }, 10000)
        // }
        // setInterval(() => {
        //     dispatch(setCategoryLoading(false))
        // }, 10000)
    }

    if(error == "error"){
        error = "netError"
    }

    const category = categories.find(({ id }) => Number(categoryId) == id )

    if(typeof category === 'undefined'){
        error = "404"
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (typeof category === 'undefined') {
        return <CategoryError error={error} />;
    }

    if (category === null) {
        return null; // Handle case when category is null
    }

    return (
        <main className={className}>
            <Helmet>
                <title>{`${category.name} - Quizon`}</title>
                <meta name="title" content={`${category.name} - Quizon`} />
                {/* <meta name="description" content="" /> */}

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://metatags.io/" />
                <meta property="og:title" content={`${category.name} - Quizon`} />
                {/* <meta property="og:description" content="" /> */}
                <meta property="og:image" content={`src/assets/category${category.id}`} />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://metatags.io/" />
                <meta property="twitter:title" content={`${category.name} - Quizon`} />
                {/* <meta property="twitter:description" content="" /> */}
                <meta property="twitter:image" content={`src/assets/category${category.id}`} />
            </Helmet>
            <Card variant="outlined"></Card>
            <div className="category">
                <div className="category-header">
                    <Link to='/'><ArrowBack/></Link>
                    <img src={categoryImages[category.id-9]} alt={`${category.name} image`} />
                    <Typography variant="h4">{category.name}</Typography>
                </div>
                <div className="category-body">
                    <Typography variant="h4">Which difficuly do you prefer?</Typography>
                    <div className="difficulty-cards">
                        <div onClick={() => dispatch(setCategoryDifficulty("easy"))}>
                            {difficulty == "easy" ? <CheckCircle sx={{fill: "#7e7eef"}}/> : <CheckCircleOutlined/>}
                            <Typography variant="h3">Easy</Typography>
                            <Typography variant="h5">5 - 10yrs</Typography>
                        </div>
                        <div onClick={() => dispatch(setCategoryDifficulty("medium"))}>
                            {difficulty == "medium" ? <CheckCircle sx={{fill: "#7e7eef"}}/> : <CheckCircleOutlined/>}
                            <Typography variant="h3">Medium</Typography>
                            <Typography variant="h5">11 - 15yrs</Typography>
                        </div>
                        <div onClick={() => dispatch(setCategoryDifficulty("hard"))}>
                            {difficulty == "hard" ? <CheckCircle sx={{fill: "#7e7eef"}}/> : <CheckCircleOutlined/>}
                            <Typography variant="h3">Hard</Typography>
                            <Typography variant="h5">16+yrs</Typography>
                        </div>
                    </div>
                </div>
                <div className="category-footer">
                    <Button variant="contained" onClick={startQuiz}>Start Quiz!</Button>
                </div>
            </div>
            {<Modal open={openModal} children={<ModalStyle setOpenModal={setOpenModal}/>}></Modal>}
        </main>
    )
}

export default Category