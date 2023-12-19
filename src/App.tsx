import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { HelmetProvider } from "react-helmet-async"
import GlobalStyles from "./styles/GlobalStyles"
import HomeStyle from "./styles/Home.style"
import ErrorStyle from "./styles/Error.style"
import CategoryStyle from "./styles/Category.style"
import SharedLayout from "./pages/SharedLayouts/SharedLayout"
import SharedCategoryLayout from "./pages/SharedLayouts/SharedCategoryLayout"
import { useSelector } from "react-redux"

function App() {

  const categories = useSelector((state) => state.categories.categories);
  const loading = useSelector((state) => state.categories.loading);
  const error = useSelector((state) => state.categories.error);

  const HelmetContext = {}

  return (
    <HelmetProvider context={HelmetContext}>
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
    </HelmetProvider>
  )
}

export default App
