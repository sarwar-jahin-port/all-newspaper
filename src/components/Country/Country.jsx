import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

export const Country = () => {
    const {id} = useParams();
    const data = useLoaderData();
    console.log(data);
  return (
    <div>{id}</div>
  )
}
