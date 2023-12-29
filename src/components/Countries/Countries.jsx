import React, { useEffect, useState } from 'react'

export const Countries = ({letter}) => {
    const [countries, setCountries] = useState([]);
    useEffect(()=>{
        fetch("countries.json")
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])
  return (
    <>
    <div className='grid grid-cols-4 gap-5 w-4/5 mx-auto mb-10'>
        {
            countries.map((country, index) => {
                console.log("here");
                if(country.name[0].toLowerCase()===letter.toLowerCase()){
                    return(
                    <div key={index} className="country flex items-center gap-2">
                        <img className='w-8 h-6' src={country.flag} alt="" />
                        <p className='text-center text-2xl'>{country.name}</p>
                    </div>
                    )
                }
            })
        }
    </div>
    </>
  )
}
