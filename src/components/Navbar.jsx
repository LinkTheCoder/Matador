import { useState } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import {FaHome,FaCarrot,FaHamburger,FaSearchLocation,FaMobile,FaClock} from 'react-icons/fa';
  
export default function Navbar() {
    const [navbar, setNavbar] = useState(false);
    
    return (
        <nav className="w-full bg-white">
            <div className="mr-5 justify-between px-4 mx-auto lg:max-w-8xl md:items-center md:flex md:px-8">
                <div>
                    <div className="ml-2 flex items-center justify-between py-3 md:py-4 md:block md:ml-0">
                        <div>
                            <Link className="outline outline-offset-2 outline-black-500 text-yellow-500 text-3xl font-bold" to="/">RESTAURANG MATADOR</Link>
                        </div>

                        <div className="md:hidden">
                            <button
                                className="mb-9 ml-9 p-2 border-2 text-yellow-500 rounded-md border-yellow-500 focus:border-yellow-600"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="text-yellow-500 w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="text-yellow-500 w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"}`}
                    >
                        <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <div className="text-yellow-500 font-semibold hover:text-yellow-600 flex">
                            <FaHome className="mt-1 mr-1 w-6" color="#eab308"/><Link to="/">HEM</Link>
                            </div>
                            <div className="text-yellow-500 font-semibold hover:text-yellow-600 flex">
                            <FaCarrot className="mt-1 mr-1 w-6" color="#eab308"/><Link to="/#Lunch">LUNCH</Link>
                            </div>
                            <div className="text-yellow-500 font-semibold hover:text-yellow-600 flex">
                            <FaHamburger className="mt-1 mr-1 w-6" color="#eab308"/><Link to="/#Middag">MIDDAG</Link>
                            </div>
                            <div className="text-yellow-500 font-semibold hover:text-yellow-600 flex">
                            <FaSearchLocation className="mt-1 mr-1 w-6" color="#eab308"/><Link to="/#HittaOss">HITTA OSS</Link>
                            </div>
                            <div className="text-yellow-500 font-semibold hover:text-yellow-600 flex">
                            <FaClock className="mt-1 mr-1 w-6" color="#eab308"/><Link to="/#OpenTider">ÖPPEN TIDER</Link>
                            </div>
                            <div className="text-yellow-500 font-semibold hover:text-yellow-600 flex">
                            <FaMobile className="mt-1 mr-1 w-6" color="#eab308"/><Link to="/#App">APP</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
