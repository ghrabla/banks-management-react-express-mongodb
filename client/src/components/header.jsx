const Header = ()=>{
    return(
        <div class="px-6 py-12 md:px-12 bg-gray-50 text-gray-800 text-center lg:text-left">
      <div class="container mx-auto xl:px-32">
        <div class="grid lg:grid-cols-2 gap-12 flex items-center">
          <div class="mt-12 lg:mt-0">
            <h1 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">The best offer <br /><span class="text-teal-600">for your business</span></h1>
            <a class="inline-block px-7 py-3 mr-2 bg-teal-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-teal-700 hover:shadow-lg focus:bg-teal-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Get started</a>
            <a class="inline-block px-7 py-3 bg-transparent text-teal-600 font-medium text-sm leading-snug uppercase rounded hover:text-teal-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Learn more</a>
          </div>
          <div class="mb-12 lg:mb-0">
            <img
              src="https://mdbootstrap.com/img/new/ecommerce/vertical/028.jpg"
              class="w-full rounded-lg shadow-lg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    )
}

export default Header;