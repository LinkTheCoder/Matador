import React, { useState } from 'react';
import { data } from '../data/data.js';
import LazyLoad from 'react-lazyload';

const Dinner = () => {
  //   console.log(data);
  const [foods, setFoods] = useState(data);

  //   Filter Type burgers/pizza/etc
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  //   Filter by price
  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div id="Middag" className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='mb-6 text-black font-black text-4xl text-center'>
        MIDDAGS MENYER
      </h1>

      {/* Filter Row */}
      <div className='mt-5 flex flex-col lg:flex-row justify-between md:mt-0'>
        {/* Fliter Type */}
        <div>
          <p className='ml-2 font-extrabold text-gray-700'>FILTRERA SORT</p>
          <div className='flex justfiy-between flex-wrap'>
            <button
              onClick={() => setFoods(data)}
              className='m-1 bg-black font-bold border-black text-white hover:bg-yellow-500 hover:text-black'
            >
              ALLA
            </button>

            <button
              onClick={() => filterType('pizza')}
              className='m-1 font-bold bg-black border-black text-white hover:bg-yellow-500 hover:text-black'
            >
              PIZZA
            </button>

            <button
              onClick={() => filterType('inbakat')}
              className='m-1 font-bold bg-black border-black text-white hover:bg-yellow-500 hover:text-black'
            >
              INBAKADE PIZZOR
            </button>

            <button
              onClick={() => filterType('veganskt')}
              className='m-1 font-bold bg-black border-black text-white hover:bg-yellow-500 hover:text-black'
            >
              VEGANSKT
            </button>

            <button
              onClick={() => filterType('pasta')}
              className='m-1 font-bold bg-black border-black text-white hover:bg-yellow-500 hover:text-black'
            >
              PASTA
            </button>

            <button
              onClick={() => filterType('kebab')}
              className='m-1 font-bold bg-black border-black text-white hover:bg-yellow-500 hover:text-black'
            >
              KEBAB
            </button>

            <button
              onClick={() => filterType('rulle')}
              className='m-1 font-bold bg-black border-black text-white hover:bg-yellow-500 hover:text-black'
            >
              RULLE
            </button>

            <button
              onClick={() => filterType('grillat')}
              className='m-1 font-bold bg-black border-black text-white hover:bg-yellow-500 hover:text-black'
            >
              GRILLAT
            </button>

            <button
              onClick={() => filterType('sallad')}
              className='m-1 font-bold bg-black border-black text-white hover:bg-yellow-500 hover:text-black'
            >
              SALLAD
            </button>

            <button
              onClick={() => filterType('barn')}
              className='m-1 font-bold bg-black border-black text-white hover:bg-yellow-500 hover:text-black'
            >
              BARN
            </button>

          </div>
        </div>

        {/* Filter Price */}
        <div>
          <p className='mt-5 ml-2 font-extrabold text-gray-700 md:mt-0'>FILTRERA LAND</p>
          <div className='flex justify-between max-w-[390px] w-full'>
            <button
              onClick={() => filterPrice('🇮🇹')}
              className='flags m-1 font-bold bg-black border-black text-white hover:bg-yellow-500 hover:text-black'
            >
            🇮🇹
            </button>

            <button
              onClick={() => filterPrice('🇺🇸')}
              className='flags m-1 font-bold bg-black border-black text-white hover:bg-yellow-500 hover:text-black'
            >
              🇺🇸
            </button>

            <button
              onClick={() => filterPrice('🇲🇽')}
              className='flags m-1 font-bold bg-black border-black text-white hover:bg-yellow-500 hover:text-black'
            >
              🇲🇽
            </button>
          </div>
        </div>
      </div>
      

      {/* Display foods */}
      <div className='grid grid-cols-1 lg:grid-cols-4 gap-6 pt-4 md:grid-cols-2 sm:grid-cols-1'>
        {foods.map((item, index) => (
            <LazyLoad 
            key={index}
            className='bg-black shadow-lg rounded-lg hover:scale-105 duration-300'
          >
            <img
              src={item.image}
              alt={item.name}
              className='w-full h-[200px] object-cover rounded-t-lg'
            />
            <div className='flex justify-between px-2 py-4'>
              <p className='font-bold text-white'>{item.name}</p>
              <p>
                <span className='flags text-white p-1 rounded-full'>
                  {item.price}
                </span>
              </p>
            </div>
            </LazyLoad>
        ))}
      </div>
    </div>
  );
};

export default Dinner;
