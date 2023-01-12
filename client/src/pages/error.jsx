import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
       
<main class="h-screen w-full flex flex-col justify-center items-center bg-gray-800">
	<h1 class="text-9xl font-extrabold text-white tracking-widest">404</h1>
	<div class="bg-teal-500 px-2 text-sm rounded rotate-12 absolute">
		Page Not Found
	</div> 
	<button class="mt-5">
      <a
        class="relative inline-block text-sm font-medium text-teal-500 group active:text-orange-500 focus:outline-none focus:ring"
      >
        <span
          class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-teal-500 group-hover:translate-y-0 group-hover:translate-x-0"
        ></span>

        <span class="relative block px-8 py-3 bg-white border border-current">
          <Link to="/">Go Home</Link>
        </span>
      </a>
    </button>
</main>
    );
};

export default ErrorPage;