import { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

const Send = ()=>{
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        solde: "",
      });
      const {client} = useSelector((state)=>state.authclient)
      const { fullname, email, solde } = formData;

      const onChange = (e) => {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
      };
    
      const onSubmit = async (e) => {
        e.preventDefault();
        if (solde.trim() == "" || fullname.trim() == "" || email.trim() == "" ) {
          toast.error("please all the feilds are required");
        } else {
          const clientData = {
            id:client.client._id,
            fullname,
            email,
            solde,
          };
          const res = await axios.post("http://localhost:5050/client/check",clientData)
          console.log(res.data);
        }
      };

  return(
      <div>
          <section class="">
      <div class="container px-6 py-12 h-full">
        <div class="flex flex-row-reverse justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div class="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
            <img
              src="https://t4.ftcdn.net/jpg/02/79/97/57/360_F_279975720_5e1htkKW6U1DQwADKYBtaCf4Kvt255j1.jpg"
              class="w-full"
              alt="Phone image"
            />
          </div>
          <div class="md:w-8/12 lg:w-5/12 lg:ml-20">
            <form onSubmit={onSubmit}>
              <div class="mb-6">
                <input
                  type="text"
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Fullname"
                  id="fullname"
                  name="fullname"
                  value={fullname}
                  onChange={onChange}
                />
              </div>
              <div class="mb-6">
                <input
                  type="text"
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Email address"
                  id="email"
                  name="email"
                  value={email}
                  onChange={onChange}
                />
              </div>
              <div class="mb-6">
                <input
                  type="solde"
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="solde"
                  id="solde"
                  name="solde"
                  value={solde}
                  onChange={onChange}
                />
              </div>
              <button
                type="submit"
                class="inline-block px-7 py-3 bg-teal-500 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-teal-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
      </div>
  )
}

export default Send;