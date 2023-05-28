import {HashLink as Link } from 'react-router-hash-link';
import {FaHome,FaCarrot,FaHamburger,FaSearchLocation,FaClock} from 'react-icons/fa';

export default function NavbarSmall() {

    return ( 
<footer className="fixed bottom-0 md:hidden" >
    <nav className="backdrop-blur-sm bg-black fixed bottom-0 w-full">
      <div className="py-2 flex md:py-4">
        <div className="flex space-x-7 mx-auto">

        <Link to="/#Lunch">
          <div>
          <button className="border-none px-0 py-0 hover:opacity-50 duration-150" id="start"><FaCarrot color="#eab308" size="2em"/></button>
          </div>
          </Link>

          <Link to="/#Middag">
          <div>
          <button className="border-none px-0 py-0 hover:opacity-50 duration-150" id="start"><FaHamburger color="#eab308" size="2em"/></button>
          </div>
          </Link>
          
          <Link to="/#Hem">
      <div>
          <button className="border-none px-0 py-0 hover:opacity-50 duration-150" id="start"><FaHome color="#eab308" size="2em"/></button>
          </div>
  </Link>

  <Link to="/#HittaOss">
          <div>
          <button className="border-none px-0 py-0 hover:opacity-50 duration-150" id="start"><FaSearchLocation color="#eab308" size="2em"/></button>
          </div>
          </Link>

          <Link to="/#OpenTider">
          <div>
          <button className="border-none px-0 py-0  hover:opacity-50 duration-150" id="start"><FaClock color="#eab308" size="2em"/></button>
          </div>
  </Link>
          
        </div>
      </div>
    </nav>
  </footer>
    )
}
