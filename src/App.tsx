import { BrowserRouter, Routes, Route } from "react-router-dom"
import GlobalStyles from "./styles/GlobalStyles"
import MainStyle from "./styles/Main.style"

function App() {

  return (
    <BrowserRouter>
      <GlobalStyles/>
      <Routes>
        <Route path="/" element={<MainStyle/>}>
          
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
