import { BrowserRouter, Route, Routes } from "react-router"
import { Header } from "./components/Header/Header"
import { Nav } from "./components/Nav/Nav"
import { ByDate } from "./pages/ByData/ByDate"
import { Today } from "./pages/Today/Today"
import { Since } from "./pages/Since/Since"

function App() {
 

  return (
    
 <BrowserRouter>
 <Header></Header>
 <Nav></Nav>
 <Routes>
  <Route path='/ByDate' element={<ByDate/>}></Route>
  <Route path= '/Today' element={<Today/>}></Route>
  <Route path='/Since' element={<Since/>}></Route>
 </Routes>
 </BrowserRouter>

  )
}

export default App
