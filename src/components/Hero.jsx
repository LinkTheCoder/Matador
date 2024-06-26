import React from 'react';

const Hero = () => {
  return (
   
<div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">

<div className="rounded overflow-hidden">
  <div className="md:px-8 py-4 text-left">
    <div className="font-normal md:text-6xl mb-2 sm: text-4xl">PIZZERIA & RESTAURANG</div>
    <p className="font-black md:text-6xl sm: text-4xl">
ÖST PÅ STAN
    </p>
  </div>
</div>

<div className="rounded overflow-hidden">
  <div className="flex justify-end mr-10">
    <img className="w-64 h-64" src="/images/HeroImage.png" alt='pizza' width="64" height="64"/>
  </div>
</div>
</div>
  );
};

export default Hero;
