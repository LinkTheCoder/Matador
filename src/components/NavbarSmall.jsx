import {HashLink as Link } from 'react-router-hash-link';
import {FaHome,FaCarrot,FaHamburger,FaSearchLocation,FaClock} from 'react-icons/fa';

export default function NavbarSmall() {

    return ( 
<footer className="fixed bottom-0 lg:hidden" >
    <nav className="backdrop-blur-sm bg-black fixed bottom-0 w-full">
      <div className="py-2 flex md:py-4">
        <div className="flex space-x-7 mx-auto">

        <Link to="/#Lunch">
          <div>
          <button title="Lunch" className="border-none px-0 py-0 hover:opacity-50 duration-150"><FaCarrot color="#eab308" size="2em"/></button>
          </div>
          </Link>

          <Link to="/#Middag">
          <div>
          <button title="Middag" className="border-none px-0 py-0 hover:opacity-50 duration-150"><FaHamburger color="#eab308" size="2em"/></button>
          </div>
          </Link>
          
          <Link to="/#Hem">
      <div>
          <button title="Hem" className="border-none px-0 py-0 hover:opacity-50 duration-150"><FaHome color="#eab308" size="2em"/></button>
          </div>
  </Link>

  <Link to="/#HittaOss">
          <div>
          <button title="HittaOss" className="border-none px-0 py-0 hover:opacity-50 duration-150"><FaSearchLocation color="#eab308" size="2em"/></button>
          </div>
          </Link>

          <Link to="/#OpenTider">
          <div>
          <button title="Öppen Tider" className="border-none px-0 py-0  hover:opacity-50 duration-150"><FaClock color="#eab308" size="2em"/></button>
          </div>
  </Link>
          
        </div>
      </div>
    </nav>
  </footer>
    )
}
