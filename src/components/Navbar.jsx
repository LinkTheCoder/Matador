import { HashLink as Link } from 'react-router-hash-link';
import {FaHome,FaCarrot,FaHamburger,FaSearchLocation,FaMobile,FaClock} from 'react-icons/fa';
  
export default function Navbar() {
    
    return (
        <nav className="w-full bg-black pb-2">
            <div className="mr-5 justify-between px-4 mx-auto lg:max-w-8xl md:items-center md:flex md:px-8">
                <div>
                    <div className="ml-2 flex items-center justify-between py-3 md:py-4 md:block md:ml-0">
                        <div>
                            <Link className="outline outline-offset-2 outline-yellow-400 text-yellow-400 text-3xl font-black" to="/">RESTAURANG MATADOR</Link>
                        </div>
                    </div>
                </div>
                <div>
                   
                        <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 sm: hidden">
                            <div className="text-yellow-400 font-bold hover:text-yellow-600 flex">
                            <FaHome className="mt-1 mr-1 w-6" color="#eab308"/><Link to="/">HEM</Link>
                            </div>
                            <div className="text-yellow-400 font-bold hover:text-yellow-600 flex">
                            <FaCarrot className="mt-1 mr-1 w-6" color="#eab308"/><Link to="/#Lunch">LUNCH</Link>
                            </div>
                            <div className="text-yellow-400 font-bold hover:text-yellow-600 flex">
                            <FaHamburger className="mt-1 mr-1 w-6" color="#eab308"/><Link to="/#Middag">MIDDAG</Link>
                            </div>
                            <div className="text-yellow-400 font-bold hover:text-yellow-600 flex">
                            <FaSearchLocation className="mt-1 mr-1 w-6" color="#eab308"/><Link to="/#HittaOss">HITTA OSS</Link>
                            </div>
                            <div className="text-yellow-400 font-bold hover:text-yellow-600 flex">
                            <FaClock className="mt-1 mr-1 w-6" color="#eab308"/><Link to="/#OpenTider">ÖPPEN TIDER</Link>
                            </div>
                            <div className="text-yellow-400 font-bold hover:text-yellow-600 flex">
                            <FaMobile className="mt-1 mr-1 w-6" color="#eab308"/><Link to="/#App">APP</Link>
                            </div>
                        </div>
                    </div>
                </div>
        </nav>
    );
}
