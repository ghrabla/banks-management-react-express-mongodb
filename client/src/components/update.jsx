import axios from "axios";
import { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from "react-redux";
import countryList from 'country-list';
import { cities } from "list-of-moroccan-cities";
import { getclients, updateclient } from "../services/clientdata/clientSlice";
import clientService from "../services/clientdata/clientService";
const Updateform = ({show,showfun}) => {
  const dispatch = useDispatch();
  const [countries,setCountries] = useState(countryList.getNames())
  const [Cities,setCities] = useState(cities)
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose file');
  const [formData, setFormData] = useState({
    cin: "",
    phone: "",
    country: "",
    city: "",
    adresse: "",
    postal: "",
    solde: "",
    born_date: ""
  });
  const { cin,
  phone,
  country,
  city,
  adresse,
  postal,
  solde,
  born_date} = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    console.log(formData)
  };

  const onChangeimg = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
    };

  const uploadeimage = async ()=>{
    const formData = new FormData();
    formData.append('file', file);

      const res = await axios.post('http://localhost:5050/data/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      });
  }

  const onSubmit = async (e)=>{
    e.preventDefault()
    const clientid = JSON.parse(localStorage.getItem("updatedata")).clientid
    const dataid = JSON.parse(localStorage.getItem("updatedata")).dataid
    const clientInfo = {
      cin,
      phone,
      country,
      city,
      adresse,
      postal,
      solde,
      born_date,
      image: filename,
      id_client: clientid,
    }
    function isObjectEmpty(obj) {
      return Object.values(obj).every( val => val)
  }
  if(isObjectEmpty(clientInfo)){
    // clientService.updateclient(dataid,clientInfo)
    dispatch(updateclient({dataid,clientInfo}))
    uploadeimage()
    toast.success("your data updated succesfully")
  }else{
    toast.error("please fill all the feilds")
  }

  }
  
    return (
      <div className={show ? "block" : "hidden"}>
        <section class="absolute ml-36 max-w-4xl p-6 mx-auto rounded-md shadow-md bg-gray-800 my-10 z-50">
          <div className="flex justify-between">
          <h1 class="text-xl font-bold text-white capitalize dark:text-white">
            Account Update
          </h1>
           <span className="text-white font-bold cursor-pointer" onClick={showfun}><i class="fa-solid fa-x"></i></span>
          </div>
          <form onSubmit={onSubmit}>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label class="text-white dark:text-gray-200" for="CIN">
                  CIN
                </label>
                <input
                  id="CIN"
                  name="cin"
                  value={cin}
                  onChange={onChange}
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
  
              <div>
                <label class="text-white dark:text-gray-200" for="Phone">
                  Phone
                </label>
                <input
                  id="Phone"
                  name="phone"
                  value={phone}
                  onChange={onChange}
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
  
              <div>
                <label class="text-white dark:text-gray-200" for="Postal">
                  Postal
                </label>
                <input
                  id="Postal"
                  name="postal"
                  value={postal}
                  onChange={onChange}
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
  
              <div>
                <label
                  class="text-white dark:text-gray-200"
                  for="adresse"
                >
                  Adresse
                </label>
                <input
                  id="adresse"
                  name="adresse"
                  value={adresse}
                  onChange={onChange}
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
              <div>
              <label
                  class="text-white dark:text-gray-200"
                  for="country"
                >
                  Country
                </label>
                <select class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                name="country"
                value={country}
                onChange={onChange}
                > 
                <option selected disabled>select a country</option>
                {countries.map((country)=>(
                  <option>{country}</option>
                ))}
                  
                </select>
              </div>
              <div>
                <label
                  class="text-white dark:text-gray-200"
                  for="city"
                >
                  City
                </label>
                <select class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                name="city"
                value={city}
                onChange={onChange}>
                  <option selected disabled>select a city</option>
                  {Cities.map((city)=>(
                  <option>{city.name}</option>
                ))}
                </select>
              </div>
              <div>
              <label class="text-white dark:text-gray-200" for="Solde">
                  Solde
                </label>
                <input
                  id="Solde"
                  name="solde"
                  value={solde}
                  onChange={onChange}
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  class="text-white dark:text-gray-200"
                  for="date"
                >
                 Born Date
                </label>
                <input
                  id="date"
                  name="born_date"
                  value={born_date}
                  onChange={onChange}
                  type="date"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
              </div>
              <div className="mt-6">
                <label class="block text-sm font-medium text-white">Image</label>
                <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div class="space-y-1 text-center">
                    <svg
                      class="mx-auto h-12 w-12 text-white"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <div class="flex text-sm text-gray-600">
                      <label
                        for="file-upload"
                        class="relative cursor-pointer bg-white rounded-md font-medium text-teal-600 hover:text-teal-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      >
                        <span class="">Upload a file</span>
                        <input
                          id="file-upload"
                          name="file"
                          onChange={onChangeimg}
                          type="file"
                          class="sr-only"
                        />
                      </label>
                      <p class="pl-1 text-white">or drag and drop</p>
                    </div>
                    <p class="text-xs text-white">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>
              </div>
            
  
            <div class="flex justify-end mt-6">
              <button class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-teal-500 rounded-md hover:bg-teal-700 focus:outline-none focus:bg-gray-600" type="submit">
                update
              </button>
            </div>
          </form>
        </section>
      </div>
    );
  };
  
  export default Updateform;
  