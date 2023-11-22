import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import GlobalStyles from "./styles/GlobalStyles"
import HomeStyle from "./styles/Home.style"
import ErrorStyle from "./styles/ErrorStyle"
import CategoryStyle from "./styles/Category.style"
import SharedLayout from "./components/SharedLayout"
import SharedCategoryLayout from "./components/SharedCategoryLayout"

function App() {

  return (
    <BrowserRouter>
      <GlobalStyles/>
      <Routes>
        <Route path="/" element={<SharedLayout/>}>
          <Route index element={<HomeStyle/>}/>
          <Route path="category" element={<SharedCategoryLayout/>}>
            <Route index element={<Navigate to='/'/>}/>
            <Route path=":category" element={<CategoryStyle/>}></Route>
          </Route>
          <Route path="*" element={<ErrorStyle />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
