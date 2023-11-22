import { BrowserRouter, Routes, Route } from "react-router-dom"
import GlobalStyles from "./styles/GlobalStyles"
import MainStyle from "./styles/Main.style"
import ErrorStyle from "./styles/ErrorStyle"

function App() {

  return (
    <BrowserRouter>
      <GlobalStyles/>
      <Routes>
        <Route path="/">
          <Route index element={<MainStyle/>}></Route>
          <Route path="*" element={<ErrorStyle />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
