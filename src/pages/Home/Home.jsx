import React from 'react'
import { Countries } from '../../components/Countries/Countries';

export const Home = () => {
let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "Y", "Z"];
  return (
    <div className='flex border'>
      <div className='magazines'>
        <ul>
          <li>African American</li>
          <li>Arts</li>
          <li>Business</li>
          <li>Cars</li>
          <li>Computers</li>
          <li>Cooking</li>
          <li>Education</li>
          <li>Entertainment</li>
          <li>Fashion</li>
          <li>Health</li>
          <li>History</li>
          <li>Home</li>
          <li>Kids</li>
          <li>Literature</li>
          <li>Men's</li>
          <li>Music</li>
          <li>News</li>
          <li>Photography</li>
          <li>Science</li>
          <li>Spanish</li>
          <li>Sports</li>
          <li>Teen</li>
          <li>Travel</li>
          <li>Women's</li>
        </ul>
      </div>
      <div>
          <h1 className='text-5xl text-center'>Select a country to see newspapers</h1>
        {
          letters.map((letter, index) => (
            <div key={index}>
              <h2 className='mx-auto w-4/5 text-[1.1em]'>{letter}</h2>
              <Countries letter={letter}></Countries>
            </div>
          ))
        }
      </div>
      <div>
      <ul>
          <li>African American</li>
          <li>Arts</li>
          <li>Business</li>
          <li>Cars</li>
          <li>Computers</li>
          <li>Cooking</li>
          <li>Education</li>
          <li>Entertainment</li>
          <li>Fashion</li>
          <li>Health</li>
          <li>History</li>
          <li>Home</li>
          <li>Kids</li>
          <li>Literature</li>
          <li>Men's</li>
          <li>Music</li>
          <li>News</li>
          <li>Photography</li>
          <li>Science</li>
          <li>Spanish</li>
          <li>Sports</li>
          <li>Teen</li>
          <li>Travel</li>
          <li>Women's</li>
        </ul>
      </div>
    </div>
  )
}
