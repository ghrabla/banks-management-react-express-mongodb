import axios from 'axios'
const API_URL = 'http://localhost:8090/client/'

// Register client
const register = async (clientData) => {
   try{
    const response = await axios.post(API_URL+'register', clientData)
    if (response.data) {
      localStorage.setItem('client', JSON.stringify(response.data))
    }
    return response.data     
   }catch(error){
     return error;
   }
}

// Login client
const login = async (clientData) => {
  const response = await axios.post(API_URL +'login', clientData)
  if (response.data) {
    localStorage.setItem('client', JSON.stringify(response.data))
  }
  return response.data
}

// Logout client
const logout = () => {
  localStorage.removeItem('client')
}

const authService = {
  register,
  logout,
  login,
}

export default authService
