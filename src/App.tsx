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

  const [categories, setCategories] = useState<null | string | []>(null)

  useEffect(() => {
      axios.get("https://opentdb.com/api_category.php")
        .then(res => {
          setCategories(res.data.trivia_categories)
        })
        .catch(() => {
          setCategories("error")
        })
  }, [])
  
  return (
    <BrowserRouter>
      <GlobalStyles/>
      <Routes>
        <Route path="/" element={<SharedLayout/>}>
          <Route index element={<HomeStyle categories={categories}/>}/>
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
