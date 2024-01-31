import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export const Country = () => {
  const {id} = useParams();
  const [country, setCountry] = useState({});
  
  useEffect(()=>{
      fetch("/newspapers.json")
      .then(res => res.json())
      .then(data => setCountry(data.filter(c => c["country-name"] === id)[0]))
  }, [id])
  // country["newspapers"].map(newspaper => console.log(newspaper));
  return (
    country["newspapers"] &&(
      country["newspapers"].map((newspaper, index) => (<div key={index} className='w-4/5 mx-auto mb-5'>
        <Link to={newspaper["newspaper-link"]} className='text-2xl font-bold text-blue-600 hover:underline'><p>{newspaper["newspaper-name"]}</p></Link>
        <p className='text-xl'>{newspaper["newspaper-about"]}</p>
      </div>
      ))
    )
  )
}
