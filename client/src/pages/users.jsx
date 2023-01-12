import { useEffect,useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteclient, getclients } from "../services/clientdata/clientSlice";
import Swal from "sweetalert2";
import Updateform from "../components/update";

const Users = ()=>{
const [action,setaction] = useState(false);
const navigate = useNavigate();
const dispatch = useDispatch();
const {clients} = useSelector((state)=> state.clients)
const {admin} = useSelector((state)=> state.authadmin)

useEffect(()=>{
  if(!admin){
   navigate("/")
  }else{
    dispatch(getclients())
  }
  
},[])

const showaction = (num) =>{
  setaction(num)
}

const Deleteone = (id) =>{
  Swal.fire({
    title: "Are you sure ?",
    text: "You are going to delete this trip",
    type: "warning",
    showCancelButton: true,
    confirmButtonColor: "black", 
    cancelButtonColor: "#d33", 
    confirmButtonText: "Yes",
    cancelButtonText: "Cancel",
  }).then((result)=>{
    if(result.value){
      dispatch(deleteclient(id))
  }
  })
}

return(
<div class="container mx-auto px-4 sm:px-8">
  <Updateform/>
  <div class="py-8">
    <div>
      <h2 class="text-2xl font-semibold leading-tight">Clients dashboard</h2>
    </div>
    <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
      <div
        class="inline-block min-w-full shadow-md rounded-lg overflow-hidden"
      >
        <table class="min-w-full leading-normal">
          <thead>
            <tr>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                Client / Invoice
              </th>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                Amount
              </th>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                Member from
              </th>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                Status
              </th>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"
              ></th>
            </tr>
          </thead>
          <tbody>
           {clients.map((one)=>(
             <tr>
             <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
               <div class="flex">
                 <div class="flex-shrink-0 w-10 h-10">
                   <img
                     class="w-full h-full rounded-full"
                     src={"../public/"+one.image}
                     alt=""
                   />
                 </div>
                 <div class="ml-3">
                   <p class="text-gray-900 whitespace-no-wrap">
                     {one.id_client[0].fullname}
                   </p>
                   <p class="text-gray-600 whitespace-no-wrap">000004</p>
                 </div>
               </div>
             </td>
             <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
               <p class="text-gray-900 whitespace-no-wrap">${one.solde}</p>
               <p class="text-gray-600 whitespace-no-wrap">USD</p>
             </td>
             <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
               <p class="text-gray-900 whitespace-no-wrap font-bold">{one.id_client[0].createdAt.slice(0,10)}</p>
               <p class="text-gray-600 whitespace-no-wrap">Due in 3 days</p>
             </td>
             <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
               <span
                 class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
               >
                 <span
                   aria-hidden
                   class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                 ></span>
                 <span class="relative">Active</span>
               </span>
             </td>
             <td
               class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right"
             >
               <div className={action===one ? "hidden" : "block"}>
               <button
               onClick={() => showaction(one)}
                 type="button"
                 class="inline-block text-gray-500 hover:text-gray-700"
               >
                 <svg
                   class="inline-block h-6 w-6 fill-current"
                   viewBox="0 0 24 24"
                 >
                   <path
                     d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"
                   />
                 </svg>
               </button>
               </div>
               <div className={action===one ? "block" : "hidden"}>
                            <button onClick={showaction} class="font-bold text-xl" ><i class="fa-solid fa-xmark"></i></button>
                </div>
             </td>
             <div className={action===one ? "block" : "hidden"}>
                          <div class="flex flex-col gap-3" >
                      <button  class="text-green-500 font-bold"><i class="fas fa-edit" ></i>Update</button>
                      <button class="text-red-500 font-bold" onClick={() => Deleteone(one._id)}><i class="fa fa-trash" aria-hidden="true"></i>Delete</button>
                  </div> 
             </div>
           </tr>
           ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
    )
}

export default Users;