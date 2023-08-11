import React from 'react';
import CardLunch from './CardLunch.jsx'

const Lunch = () => {
  return (
    <div className='bg-black'>
    <h1 id="Lunch" className='pt-8 mt-6 mb-2 text-yellow-400 font-bold text-4xl text-center'>
    LUNCH MENYER
  </h1>
  
    <div className='max-w-[1640px] mx-auto p-4 grid md:grid-cols-3 gap-6'>
    <CardLunch title="KEBAB/PIZZATALLRIK" time="10/12 (10:30 - 15:00)" price="90" bg="/images/KebabLunch.jpg" alt="kebab" loading="lazy"/>
    <CardLunch title="SALLADSTALLRIK" time="10/14 (10:30 - 15:00)" price="70" bg="/images/SalladTallrik.jpg" alt="salladstallrik" loading="lazy"/>    
    <CardLunch title="HUSMANSKOSTTALRK" time="10/16 (10:30 - 15:00)" price="70" bg="/images/Husmakost.jpg" alt="husmakost" loading="lazy"/>  
    </div>
    <p className='pb-8 text-center font-medium text-yellow-400'>* STUDENT & PENSIONERSRABATT 10%</p>
    </div>
  );
};

export default Lunch;
