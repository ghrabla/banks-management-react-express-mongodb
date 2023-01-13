import axios from 'axios'
import Swal from 'sweetalert2'

const API_URL = 'http://localhost:5050/'

// Get data of clients
const getclients = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    const response = await axios.get(API_URL+'data') 
    return response.data
}

// update client 
const updateclient = async (id_client,clientData) => {
 if(clientData){
  const response = await axios.put(API_URL+'data/'+id_client, clientData)
  Swal.fire('Updated!', '', 'success')
  return response.data
 }else{
  Swal.fire( 'there is a problem !', 'warning')
 }
}

// get one client by id 
const getoneclient = async (clientId) =>{
  const res = await axios.get(API_URL+'client/'+clientId)
  return res.data
}

// Delete client client
const deleteclient = async (clientId) => {
  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // }
  
    axios.delete(API_URL+'data/'+clientId)
    
  
}

const clientService = {
  updateclient,
  getclients,
  getoneclient,
  deleteclient,
}

export default clientService
