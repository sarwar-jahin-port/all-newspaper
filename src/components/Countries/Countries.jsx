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
    <div className='flex flex-wrap gap-5 w-4/5 mx-auto mb-10'>
        {
            countries.map((country, index) => {
                console.log("here");
                if(country.name[0].toLowerCase()===letter.toLowerCase()){
                    return(
                    <div key={index} className="country border">
                        <img src={country.flag} alt="" />
                        <p className='text-center'>{country.name}</p>
                    </div>
                    )
                }
            })
        }
    </div>
    </>
  )
}
