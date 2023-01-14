import React, { useEffect, useRef, useState } from "react";
import html2pdf from "html2pdf.js";
import { useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";


const Account = () => {
  const year = new Date().getFullYear();
  const componentRef = useRef(null);
  const handleDownload = () =>{
    const element = componentRef.current;
    html2pdf().from(element).save("account.pdf");
  };
  const {client} = useSelector((state)=>state.authclient)
  const [data,setData] = useState([])
  const [clientdata,setclientData] = useState([])
  useEffect(()=>{
  const getdatabyid = async (id)=>{
    const res = await axios.get("http://localhost:5050/data/client/"+id)
    setData(res.data) 
    setclientData(res.data.id_client[0])
  }
  getdatabyid(client.client._id)
  },[])

  return (
    <div>
      <div class="p-16" ref={componentRef}>
        <div class="p-8 bg-white shadow mt-24">        
          <div class="grid grid-cols-1 md:grid-cols-3">           
            <div class="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">             
              <div>
                <p class="font-bold text-gray-700 text-xl">{data.postal}</p>
                <p class="text-gray-400">Postal</p>
              </div>
              <div>              
                <p class="font-bold text-gray-700 text-xl">{data.phone}</p>
                <p class="text-gray-400">Phone</p>
              </div>
              <div>        
                <p class="font-bold text-gray-700 text-xl">{data.solde}</p>
                <p class="text-gray-400">Solde $</p>
              </div>
            </div>
            <div class="relative">        
              <div class="">
               <img className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500" src={"../public/"+data.image} alt="no image" />
              </div>
            </div> 
            <div class="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
              <Link to="/account/send">
              <button class="text-white py-4 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">  
                Send money
              </button>
              </Link>
              <button class="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5" onClick={handleDownload}> 
                Download
              </button>
            </div>
          </div>
          <div class="mt-20 text-center border-b pb-12">
            
            <h1 class="text-4xl font-medium text-gray-700">
              {clientdata.fullname}, <span class="font-light text-gray-500">{data.born_date}</span>
            </h1>
            <p class="font-light text-gray-600 mt-3">{data.city}, {data.country}</p> 
            <p class="mt-8 text-gray-500 font-bold">
              {clientdata.email}
            </p>
            <p class="mt-2 text-gray-500">{data.adresse}</p> 
          </div>
          <div class="mt-12 flex flex-col justify-center">
            
            <p class="text-gray-600 text-center font-light lg:px-16">
              An artist of considerable range, Ryan — the name taken by
              Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
              and records all of his own music, giving it a warm, intimate feel
              with a solid groove structure. An artist of considerable range.
            </p>
            <button class="text-indigo-500 py-2 px-4  font-medium mt-4">
              
              Show more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
