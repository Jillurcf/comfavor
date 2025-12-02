import React from 'react';
import NavBar from './home/NavBar';
import Banner from './home/Banner';
const Page = () => {
  return (
    <div className="">
      {/* Navbar */}
      <div className='flex w-full justify-end'>
        <NavBar />
      </div>


      {/* Banner Section */}
      {/* <section className="flex flex-col items-center justify-center flex-1 p-8 bg-gray-800">
        <h1 className="text-5xl font-bold mb-4 text-white">Welcome to MyApp</h1>
        <p className="text-lg mb-6 text-center max-w-xl text-gray-200">
          Build amazing apps with Next.js and Tailwind CSS. Fast, responsive, and modern.
        </p>
        <button className="bg-green-500 text-white font-semibold px-6 py-3 rounded hover:bg-white hover:text-green-500 transition">
          Get Started
        </button>
      </section> */}
      <div className='w-full'>
        <Banner />
      </div>

    </div>
  );
};

export default Page;
