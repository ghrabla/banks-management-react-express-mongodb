import './App.css'
import { ToastContainer } from 'react-toastify';
import Footer from './components/footer'
import Navbar from './components/navbar'
import Login from './pages/login'
import {Routes,Route} from "react-router-dom"
import Register from './pages/register'
import Home from './pages/home'
import Users from './pages/users'
import Account from './pages/account'
import Loginadmin from './pages/loginadmin'
import Informations from './pages/informations';


function App() {
 
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='register' element={<Register/>}/>
      <Route path='admin/users' element={<Users/>}/>
      <Route path='account' element={<Account/>}/>
      <Route path='informations' element={<Informations/>}/>
      <Route path='admin/login' element={<Loginadmin/>}/>
      </Routes>
      <ToastContainer/>
      <Footer/>
    </div>
  )
}

export default App
