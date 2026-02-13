import { BrowserRouter, Route, Routes } from "react-router"
import { Header } from "./components/Header/Header"
import { Nav } from "./components/Nav/Nav"
import { ByDate } from "./pages/ByData/ByDate"
import { Today } from "./pages/Today/Today"
import { Since } from "./pages/Since/Since"
import { useState } from "react"



function App() {
    const [date, setDate] = useState<string | null>(null)

    




  return (

    <BrowserRouter>
      <Header setDate={setDate} date={date} />
      <Nav />
      <Routes>
        <Route path='/ByDate' element={<ByDate date={date} />} />
        <Route path='/Today' element={<Today />} />
        <Route path='/Since' element={<Since />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
