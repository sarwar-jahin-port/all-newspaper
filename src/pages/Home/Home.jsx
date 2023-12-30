import React from 'react'
import { Countries } from '../../components/Countries/Countries';

export const Home = () => {
let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "Y", "Z"];
  return (
    <div>
        <h1 className='text-5xl text-center mb-10'>Select a country to see newspapers</h1>
      {
        letters.map((letter, index) => (
          <div key={index}>
            <h2 className='mx-auto w-4/5 text-2xl'>{letter}</h2>
            <Countries letter={letter}></Countries>
          </div>
        ))
      }
    </div>
  )
}
