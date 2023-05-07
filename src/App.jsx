import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Dashboard, Login, NotFound, Unidades } from "./pages"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/unidades-consulmidora' element={<Unidades/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
