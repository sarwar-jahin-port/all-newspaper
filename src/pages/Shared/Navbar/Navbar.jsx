import React from 'react'

export const Navbar = () => {
  return (
    <div>
      <div className="site-title flex w-4/5 mx-auto justify-between items-center">
        <a href=""><img src="" alt="" className="logo" />Logo</a>
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
        <div className="search">
          <input className='border' type="text" name="search" id="search" />
          <button>Search</button>
        </div>
      </div>
    </div>
  )
}