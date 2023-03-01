import {FaChrome, FaEdge, FaWindows, FaLinux, FaApple, FaAndroid} from 'react-icons/fa';
import React, { useEffect, useState } from "react";
import InstallPWA from './InstallPWA.jsx'
import InstallAndroid from './InstallAndroid.jsx'

export default function CardPWA() {
    return ( 
<div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">

<div className="rounded overflow-hidden">
  <div className="px-6 py-4 text-center">
    <div className="text-3xl mb-5 flex justify-center space-x-3">
    <FaChrome color="#ba68c8"/>
    <FaEdge color="#ba68c8"/>
    <FaWindows color="#ba68c8"/>
    <FaLinux color="#ba68c8"/>
    <FaApple color="#ba68c8"/>
    </div>

    <div className="text-primary font-bold text-3xl mb-2">Get it on Desktop!</div>
    <p className="text-gray text-base">
    Download the app by using Chrome or Edge on Windows, Linux or Mac.
    </p>
 <InstallPWA/>
  </div>
  <div className="mb-7 px-6 pt-4 pb-2 text-center md:mb-0">
  </div>
</div>
<div className="rounded overflow-hidden">
  <div className="px-6 py-4 text-center">
  <div className="text-3xl mb-5 flex justify-center space-x-3">
    <FaAndroid color="#ba68c8"/>
    </div>

    <div className="text-primary font-bold text-3xl mb-2">Get it on Android!</div>
    <p className="text-gray text-base">
    The app is also available to mobiles and tablets with Android.
    </p>
    <InstallAndroid/>
  </div>
  <div className="mb-7 px-6 pt-4 pb-2 text-center md:mb-0">
  </div>
</div>

<div className="rounded overflow-hidden">
  <div className="px-6 py-4 text-center">
    <div className="text-3xl mb-5 flex justify-center space-x-3">
    <FaApple color="#ba68c8"/>
    </div>

    <div className="text-primary font-bold text-3xl mb-2">Get it on iOS!</div>
    <p className="text-gray text-base">
 <li>Open the Share menu.</li>
 <li>Click Add to Home Screen.</li>
<li>Confirm the name of the app; the name is user-editable.</li>
<li>Click Add. On iOS and iPadOS, bookmarks to websites and PWAs look the same on the home screen.</li>
    </p>
  </div>
  <div className="mb-7 px-6 pt-4 pb-2 text-center md:mb-0">
  </div>
</div>

</div>
  )
}