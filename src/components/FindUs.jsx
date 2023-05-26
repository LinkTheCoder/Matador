import React from 'react';
import { categories } from '../data/data.js';

const FindUs = () => {
  console.log(categories);
  return (

    <div className="bg-black p-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
    <div>
      <div>
      <h1 id="HittaOss" className='mt-6 mb-2 text-yellow-400 font-bold text-4xl text-center'>
    HITTA OSS
  </h1>
        <iframe className='rounded-xl mt-4 w-full aspect-auto' title="Google Maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1760.1452508885463!2d20.281693216216002!3d63.822130850013544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x467c5b0596b7c201%3A0x50415757cd11359a!2sRestaurang%20%26%20Pizzeria%20Matador!5e0!3m2!1ssv!2sse!4v1662550826900!5m2!1ssv!2sse" height="400em" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className="mb-7 px-6 pt-4 pb-2 text-center md:mb-0">
      </div>
    </div>

    <div className="rounded overflow-hidden">
      <div className="px-6 py-4 text-center">
      <h1 id="OpenTider" className='mt-6 mb-2 text-yellow-400 font-bold text-4xl text-center'>
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
