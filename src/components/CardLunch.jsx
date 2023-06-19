import React from 'react';

const CardLunch = (props) => {
  return (
     <div className='rounded-xl relative'>
     <div className='absolute w-full h-full bg-white/50 rounded-xl text-white'>
       <p className='font-black text-black text-2xl px-2 pt-4'>{props.title}</p>
       <p className='px-2 font-extrabold text-black'>TILLS {props.time}</p>
       <button className='border-black bg-black font-semibold text-white mx-2 absolute bottom-4'>{props.price}:-*</button>
     </div>
     <img
     className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
       src={props.bg}
       alt={props.alt}
     />
   </div>
  );
};

export default CardLunch;