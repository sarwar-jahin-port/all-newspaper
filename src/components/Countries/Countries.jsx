import React, { useEffect, useState } from 'react'

export const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(()=>{
        fetch("countries.json")
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])
  return (
    <div className='flex gap-5 w-4/5 mx-auto'>
        {
            countries.map((country, index) => (
                <div key={index} className="country border">
                    <img src={country.flag} alt="" />
                    <p className='text-center'>{country.name}</p>
                </div>
            ))
        }
    </div>
  )
}
