import Timer from './Timer.jsx'
import CatNaut from '../assets/CatNaut.gif';

export default function Header() {
    return ( 

        <><><div id="main" className="md:flex grid-rows-1 justify-evenly sm:flex grid grid-rows-1 ">
        <div className="mt-20 text-center text-white"><Timer /></div>
        
        <div className="mt-5 text-center text-white">
            <img src={CatNaut} alt="..." className="lg:max-w-sm mt-0 sm:max-w-full mt-8" />
        </div>
    </div>
    </><div>
        </div></>
  )
}
