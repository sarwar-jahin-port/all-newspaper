import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export const Magazines = () => {
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch("magazines.json")
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])
  return (
    <div className='magazines mt-5'>
        <h3 className='text-lg font-semibold'>Magazines by Subject</h3>
        <ul>
            {
                categories.map((category, index) => <Link key={index} to={`magazine/${category["category-name"]}`}><li>{category["category-name"]}</li></Link>)
            }
        </ul>
    </div>
  )
}
