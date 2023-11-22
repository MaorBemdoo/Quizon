import { BrowserRouter, Routes, Route } from "react-router-dom"
import GlobalStyles from "./styles/GlobalStyles"
import HomeStyle from "./styles/Home.style"
import ErrorStyle from "./styles/ErrorStyle"
import SharedLayout from "./components/SharedLayout"

function App() {

  return (
    <BrowserRouter>
      <GlobalStyles/>
      <Routes>
        <Route path="/" element={<SharedLayout/>}>
          <Route index element={<HomeStyle/>}/>
          <Route path="*" element={<ErrorStyle />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
