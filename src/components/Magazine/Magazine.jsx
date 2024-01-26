import React, { useEffect, useState } from 'react'

export const Magazine = () => {
  const [magazines, setMagazines] = useState([]);

  useEffect(()=>{
    fetch("magazines.json")
    .then(res => res.json())
    .then(data => console.log(data))
  },[])
  return (
    <div>Magazine</div>
  )
}
