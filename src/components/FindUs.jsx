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
  <div className="relative">
  <img className="mx-auto rounded-lg w-auto lg:w-2/3" src="/images/GMap.png" alt='Map' loading="lazy" height="330" width="180"/>
  <a href="https://www.google.com/maps/place/Restaurang+%26+Pizzeria+Matador/@63.8221285,20.281307,17z/data=!3m1!4b1!4m6!3m5!1s0x467c5b0596b7c201:0x50415757cd11359a!8m2!3d63.8221285!4d20.2838819!16s%2Fg%2F1vm_wj55?entry=ttu"
   className="sm: mr-0.5 md:mr-2 lg:mr-36 border rounded-xl px-3 py-1 mr-36 absolute bottom-0 right-0 m-2 bg-black font-bold border-black text-white hover:bg-yellow-500 hover:text-black">Google Maps</a>
</div>
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
