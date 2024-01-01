import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { HelmetProvider } from "react-helmet-async"
import GlobalStyles from "./styles/GlobalStyles"
import HomeStyle from "./styles/Home.style"
import ErrorStyle from "./styles/Error.style"
import CategoryStyle from "./styles/Category.style"
import SharedLayout from "./pages/SharedLayouts/SharedLayout"
import SharedCategoryLayout from "./pages/SharedLayouts/SharedCategoryLayout"
import { useEffect, useState } from "react"
import QuestionStyle from "./styles/Question.style"

function App() {

  // const loading = useAppSelector((state) => state.categories.loading);

  const [dark, isDark] = useState(() => {
    const darkLocalStorage = localStorage.getItem("color-scheme")
    return darkLocalStorage ? JSON.parse(darkLocalStorage) : false
  })
  const HelmetContext = {}

  useEffect(() => {
    localStorage.setItem("color-scheme", JSON.stringify(dark))
  }, [dark])

  return (
    <HelmetProvider context={HelmetContext}>
      <BrowserRouter>
        <GlobalStyles dark={dark}/>
        <Routes>
          <Route path="/" element={<SharedLayout dark={dark} isDark={isDark}/>}>
            <Route index element={<HomeStyle dark={dark}/>}/>
            <Route path="category" element={<SharedCategoryLayout/>}>
              <Route index element={<Navigate to='/'/>}/>
              <Route path=":categoryId" element={<CategoryStyle />}></Route>
            </Route>
            <Route path="*" element={<ErrorStyle />}/>
          </Route>
          <Route path="category/:categoryId/quiz" element={<QuestionStyle dark={dark}/>}></Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
