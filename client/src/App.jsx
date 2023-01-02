import './App.css'
import Footer from './components/footer'
import Navbar from './components/navbar'
import Login from './pages/login'
import {Routes,Route} from "react-router-dom"
import Register from './pages/register'
import Home from './pages/home'


function App() {
  

  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='register' element={<Register/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
