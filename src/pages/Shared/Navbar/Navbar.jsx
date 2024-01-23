import React from 'react'
import logo from "../../../../public/images/logo.png";

export const Navbar = () => {
  return (
    <div>
      <div className="site-title flex w-4/5 mx-auto justify-between items-center">
        <a href=""><img src={logo} alt="" className="logo max-w-56" /></a>
        <div className='flex flex-col'>
          <h1 className='text-4xl'>World Newspapers, News Sites, and Magazines Online</h1>
          <div className="continents text-center">
            <a href="/" className="continent ml-2">Africa |</a>
            <a href="/" className="continent ml-2"> Asia |</a>
            <a href="/" className="continent ml-2"> Caribbean |</a>
            <a href="/" className="continent ml-2"> Central America |</a>
            <a href="/" className="continent ml-2"> Europe |</a>
            <a href="/" className="continent ml-2"> North America |</a>
            <a href="/" className="continent ml-2"> Oceania |</a>
            <a href="/" className="continent ml-2"> South America</a>
          </div>
        </div>
        <div className="search flex items-center justify-center">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="py-2 px-4 border border-gray-300 rounded-l focus:outline-none focus:ring focus:border-blue-300"
            />
            <button
              className="bg-red-900 text-white py-2 px-4 rounded-r hover:bg-red-950 focus:outline-none focus:ring focus:border-blue-300"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}