import {Link} from "react-router-dom"
import {GiRetroController} from "react-icons/gi";
import {SiRetroarch,SiNintendoswitch} from "react-icons/si";
import {HiDesktopComputer} from "react-icons/hi";
import {FaXbox,FaPlaystation} from "react-icons/fa";

{/* Navbar med länkar till olika sidor */}
function Nav(){
return (
<header class="text-gray-600 body-font">
  <div className="justify-center p-5 items-center">
      <a className="flex justify-center title-font font-medium items-center text-gray-900">
        <Link to="/">
          <h1 className="ml-3 text-3xl text-center text-gray-500 hover:text-gray-400">
            Gaming News
          </h1>
        </Link>
      </a>
      <span className="mt-2 mb-2 flex flex-wrap justify-center items-center ml-3 text-sm text-gray-500">
        The latest gaming news
      </span>
      <nav className="md:ml-4 md:py-4 md:pl-4 flex flex-wrap items-center text-base justify-center">
        <div className="flex items-center">
        <SiNintendoswitch/>
          <Link className="ml-1 mr-5 hover:text-gray-400" to="/Nintendo">
            Nintendo
          </Link>
        </div>
        <div className="flex items-center">
        <FaPlaystation/>
          <Link
            className="ml-1 mr-5 hover:text-gray-400"
            to="/Playstation"
          >
            Playstation
          </Link>
        </div>
        <div className="flex items-center">
        <FaXbox/>
          <Link className="ml-1 mr-5 hover:text-gray-400" to="/Xbox">
            Xbox
          </Link>
        </div>
        <div className="flex items-center">
        <HiDesktopComputer/>
          <Link className="ml-1 mr-5 hover:text-gray-400" to="/PC">
            PC
          </Link>
        </div>
        <div className="flex items-center">
        <SiRetroarch/>
          <Link className="ml-1 mr-5 hover:text-gray-400" to="/Retro">
            Retro
          </Link>
        </div>
        <div className="flex items-center">
        <GiRetroController/>
          <Link className="ml-1 mr-5 hover:text-gray-400" to="/Indie">
            Indie
          </Link>
        </div>
      </nav>
    </div>
</header>
 );
}
export default Nav;