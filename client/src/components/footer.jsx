const Footer = ()=>{
    return(
    <footer class="footer-1 bg-teal-500 py-8 sm:py-12 text-white">
  <div class="container mx-auto px-4">
      <div class="sm:flex sm:flex-wrap sm:-mx-4 mt-4">
      <div class="sm:w-full px-4 md:w-1/6">
        <strong>FWR</strong>
      <div class="flex sm:justify-center xl:justify-start pt-4">
          <a href="" class="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 text-white hover:text-white hover:bg-blue-600 hover:border-blue-600">
            <i class="fab fa-facebook"></i>
          </a>
          <a href="" class="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-white hover:text-white hover:bg-blue-400 hover:border-blue-400">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="" class="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-white hover:text-white hover:bg-red-600 hover:border-red-600">
            <i class="fab fa-google-plus-g"></i>
          </a>
        </div>
      </div>
      <div class="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
        <h6 class="font-bold mb-2">Address</h6>
        <address class="not-italic mb-4 text-sm">
          123 6th St.<br/>
          Melbourne, FL 32904
        </address>
      </div>
      <div class="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
        <h6 class="font-bold mb-2">Free Resources</h6>
        <p class="mb-4 text-sm">Use our HTML blocks for <strong>FREE</strong>.<br/>
          <em>All are MIT License</em></p>
      </div>
      <div class="px-4 md:w-1/4 md:ml-auto mt-6 sm:mt-4 md:mt-0">
      <div>
      <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">get started</a>
    </div>
      </div>
    </div>
  </div>
</footer>
    )
}

export default Footer;