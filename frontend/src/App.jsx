import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from "./components/Header/Header"
import Home from "./pages/Home"
import Detail from "./pages/Detail"
import Create from "./pages/Create"

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/admin/create" element={<Create/>}/>
      <Route path="/place/:id" element={<Detail/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
