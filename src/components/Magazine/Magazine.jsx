import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

export const Magazine = () => {
  const {id} = useParams();
  const [category, setCategory] = useState([]);

  useEffect(()=>{
    fetch("/magazines.json")
    .then(res => res.json())
    .then(data => setCategory(data.filter(c => c["category-name"] === id)[0]));
  },[])
  return (
    category["magazines"] &&(
      category["magazines"].map((magazine, index) => (<div key={index} className='w-4/5 mx-auto mb-5'>
        <Link to={magazine["magazine-link"]} className='text-2xl font-bold text-blue-600 hover:underline'><p>{magazine["magazine-name"]}</p></Link>
        <p className='text-xl'>{magazine["magazine-about"]}</p>
      </div>
      ))
    )
  )
}
