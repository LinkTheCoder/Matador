import React from 'react';

const Lunch = () => {
  return (
    <div className='bg-black'>
    <h1 id="Lunch" className='pt-8 mt-6 mb-2 text-yellow-400 font-bold text-4xl text-center'>
    LUNCH MENYER
  </h1>
  
    <div className='max-w-[1640px] mx-auto p-4 grid md:grid-cols-3 gap-6'>

      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-white/50 rounded-xl text-white'>
          <p className='font-black text-black text-2xl px-2 pt-4'>KEBAB/PIZZATALLRIK</p>
          <p className='px-2 font-extrabold text-black'>TILLS 10/12 (10:30 - 15:00)</p>
          <button className='border-black bg-black font-semibold text-white mx-2 absolute bottom-4'>90:-*</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='/images/KebabLunch.jpg'
          alt='/'
        />
      </div>

      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-white/50 rounded-xl text-white'>
          <p className='font-black text-black text-2xl px-2 pt-4'>SALLADSTALLRIK</p>
          <p className='px-2 font-extrabold text-black'>TILLS 10/12 (10:30 - 15:00)</p>
          <button className='font-semibold border-black bg-black text-white mx-2 absolute bottom-4'>90:-*</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='/images/SalladTallrik.jpg'
          alt='/'
        />
      </div>

      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-white/40 rounded-xl text-white'>
          <p className='font-black text-black text-2xl px-2 pt-4'>HUSMANSKOSTTALRK</p>
          <p className='px-2 font-extrabold text-black'>TILLS 10/12 (10:30 - 15:00)</p>
          <button className='border-black font-semibold bg-black text-white mx-2 absolute bottom-4'>90:-*</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='/images/Husmakost.jpg'
          alt='/'
        />
      </div>
    </div>
    <p className='pb-8 text-center font-medium text-yellow-400'>* STUDENT & PENSIONERSRABATT 10%</p>
    </div>
  );
};

export default Lunch;
