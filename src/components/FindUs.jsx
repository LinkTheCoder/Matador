import React from 'react';
import { categories } from '../data/data.js';

const FindUs = () => {
  console.log(categories);
  return (

    <div id="HittaOss" className="bg-black p-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
    <div>
      <div>
      <h1 className='mt-6 mb-2 text-yellow-400 font-bold text-4xl text-center'>
    HITTA OSS
  </h1>
    <img className="mx-auto rounded-lg w-2/3" src="/images/GMap.png" alt='Map' loading="lazy" height="330" width="180"/>
      </div>
      <div className="mb-7 px-6 pt-4 pb-2 text-center md:mb-0">
      </div>
    </div>

    <div id="OpenTider" className="rounded overflow-hidden">
      <div className="px-6 py-4 text-center">
      <h1 className='mt-6 mb-2 text-yellow-400 font-bold text-4xl text-center'>
    ÖPPEN TIDER
  </h1>
        <ul className="mt-10 font-semibold text-yellow-400 text-base space-y-6">
         <li><b>VARDAG</b> 10:30 - 21:00</li>
         <li><b>HELG:</b> 11:00 - 21:00</li>
         <li><b>LUNCH:</b> 10:30 - 15:00</li>

         <li><b>ADRESS:</b> KUNGSGATAN 102, 903 32 UMEÅ</li>
         <li><b>TELEFONNUMMER:</b> 090-121100 / 090-121434</li>
        </ul>
      </div>
      <div className="mb-7 px-6 pt-4 pb-2 text-center md:mb-0">
      </div>
    </div>
  </div>
)
}

export default FindUs;
