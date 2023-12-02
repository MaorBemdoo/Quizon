import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import GlobalStyles from "./styles/GlobalStyles"
import HomeStyle from "./styles/Home.style"
import ErrorStyle from "./styles/Error.style"
import CategoryStyle from "./styles/Category.style"
import SharedLayout from "./pages/SharedLayouts/SharedLayout"
import SharedCategoryLayout from "./pages/SharedLayouts/SharedCategoryLayout"
import { useState, useEffect } from "react"
import axios from "axios"

function App() {

  const [tempCategories, setTempCategories] = useState<null | string | any[]>(null)

  useEffect(() => {
    axios.get("https://opentdb.com/api_category.php")
      .then(res => {
        // setCategories(res.data.trivia_categories)
        console.log(res.data.trivia_categories)
        setTempCategories(res.data.trivia_categories)
      })
      .catch((err) => {
        // setCategories("error")
        console.log(err);
        setTempCategories("error")
      })
  }, [])

  const categories = sessionStorage.getItem("categories") && !tempCategories ? JSON.parse(sessionStorage.getItem("categories")) : tempCategories

  useEffect(() => {
    sessionStorage.setItem("categories", JSON.stringify(categories))
  , [categories]})

  
  return (
    <BrowserRouter>
      <GlobalStyles/>
      <Routes>
        <Route path="/" element={<SharedLayout/>}>
          <Route index element={<HomeStyle categories={categories} setTempCategories={setTempCategories}/>}/>
          <Route path="category" element={<SharedCategoryLayout/>}>
            <Route index element={<Navigate to='/'/>}/>
            <Route path=":categoryId" element={<CategoryStyle categories={categories}/>}></Route>
          </Route>
          <Route path="*" element={<ErrorStyle />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
