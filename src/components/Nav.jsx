import {Link} from "react-router-dom"
import {FaHome, FaChild, FaSpa, FaMugHot, FaHeart} from 'react-icons/fa';

export default function Nav() {
    return ( 
<body>
<footer className="fixed bottom-0" >
    <nav class="backdrop-blur-sm bg-secondary/50 fixed bottom-0 w-full">
      <div class="py-2 flex md:py-4">
        <div class="flex space-x-7 mx-auto">

        <Link to="/Mindful">
          <div>
          <button className=" hover:opacity-50 duration-150" id="start"><FaSpa color="#ba68c8" size="2em"/></button>
          </div>
          </Link>

          <Link to="/TeaTime">
          <div>
          <button className=" hover:opacity-50 duration-150" id="start"><FaMugHot color="#ba68c8" size="2em"/></button>
          </div>
          </Link>
          
          <Link to="/">
      <div>
          <button className=" hover:opacity-50 duration-150" id="start"><FaHome color="#ba68c8" size="2em"/></button>
          </div>
  </Link>

  <Link to="/Fitness">
          <div>
          <button className=" hover:opacity-50 duration-150" id="start"><FaChild color="#ba68c8" size="2em"/></button>
          </div>
          </Link>

          <Link to="/Positivity">
          <div>
          <button className=" hover:opacity-50 duration-150" id="start"><FaHeart color="#ba68c8" size="2em"/></button>
          </div>
  </Link>
          
        </div>
      </div>
    </nav>
  </footer>
</body>
    )
}
