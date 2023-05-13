import React, { useState } from 'react';
import {IoShareOutline} from 'react-icons/io5';
import {GoDiffAdded} from 'react-icons/go';

const PWA = () => {

    //Modul
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleIOSButtonClick = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  //Install Android & Chrome
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const handleInstallButtonClick = async () => {
    if (deferredPrompt !== null) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setDeferredPrompt(null);
      }
    }
  };
  const handleBeforeInstallPromptEvent = (e) => {
    e.preventDefault();
    setDeferredPrompt(e);
  };
  window.addEventListener('beforeinstallprompt', handleBeforeInstallPromptEvent);

  return (
    <div className="text-center">
      <h1 id="App" className='mt-6 mb-2 text-yellow-500 font-bold text-4xl text-center'>
        Ladda Ner App
      </h1>
      <div className="p-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
        <div>
          <div className="flex justify-center lg:flex lg:justify-end">
            <img className='w-1/4 sm: w-52' src='/images/App.png' alt="/" />
          </div>
          <div className="mb-7 px-6 pt-4 pb-2 text-center md:mb-0">
          </div>
        </div>
        <div className="lg:flex justify-begining lg:pl-10 lg:pt-28 sm: pl-0 pt-0">
  <ul className="mt-4 space-y-5 text-gray text-base flex flex-col items-center sm: mt-0">
    <button className='border-none px-0 py-0' onClick={handleInstallButtonClick}><img className='w-32 mx-auto' src='/images/Android.png' alt="/"/></button>

    <button className='border-none px-0 py-0' onClick={handleIOSButtonClick}><img className='w-32 mx-auto' src='/images/IOS.png' alt="/"/></button>

    <button className='border-none px-0 py-0' onClick={handleInstallButtonClick}><img className='w-32 mx-auto' src='/images/Chrome.png' alt="/"/></button>
  </ul>
</div>
      </div>

      {/* Modal container */}
      <div className={`${isModalOpen ? '' : 'hidden'} fixed z-10 inset-0 overflow-y-auto`}>
        {/* Modal content */}
        {isModalOpen && (
          <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white rounded-lg p-8 border-2 border-yellow-500">
            <ul className="text-gray-600 mb-4 flex items-center list-disc">
  <li>Tryck på <b>Dela</b></li>
  <IoShareOutline className="ml-1 mb-1" size={24} />
  </ul>

  <ul className="text-gray-600 mb-4 flex items-center list-disc">
  <li>Tryck <b>Lägg Till Hem</b></li>
  <GoDiffAdded className="ml-1 mb-1" size={24} />
</ul>

<ul className="text-gray-600 mb-4 flex items-center list-disc">
  <li>Tryck <b>Lägg Till</b></li>
</ul>
              <button
                className="bg-yellow-500 text-white px-4 py-2 rounded-lg"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PWA;
