import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Dashboard, Geracao, Login, NotFound, Unidades } from "./pages"
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from './hooks/auth';

export function PrivateRoute() {
  const { token } = useAuth();
 
  return token ? <Outlet /> : <Navigate to="/login" />;
}

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route element={<PrivateRoute/>}>

        <Route path='/' element={<Dashboard/>}/>
        <Route path='/unidades-consulmidora' element={<Unidades/>}/>
        <Route path='/cadastro-energia-gerada' element={<Geracao/>}/>

        <Route path='*' element={<NotFound/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
