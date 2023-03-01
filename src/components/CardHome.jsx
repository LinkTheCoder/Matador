import {Link} from "react-router-dom"

export default function CardHome() {
    return ( 

<div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">

<div className="rounded overflow-hidden">
  <div className="px-6 py-4 text-center">
    <div className="text-5xl mb-5">👋</div>
    <div className="text-primary font-bold text-3xl mb-2">Meow you doin'?</div>
    <p className="text-gray text-base">
     Maybe it's time for a break to space out a bit and relax. 
     This app contains several tips and exercises to improve your health.
    </p>
  </div>
  <div className="mb-7 px-6 pt-4 pb-2 text-center md:mb-0">
  </div>
</div>
<div className="rounded overflow-hidden">
  <div className="px-6 py-4 text-center">
    <div className="text-5xl mb-5">⏲️</div>
    <div className="text-primary font-bold text-3xl mb-2">Any minute meow!</div>
    <p className="text-gray text-base">
    Keep track on how long you're mind are in space or your body on earth. 
    Also features checkboxes to help you remember.
    </p>
  </div>
  <div className="mb-7 px-6 pt-4 pb-2 text-center md:mb-0">
  </div>
</div>

<div className="rounded overflow-hidden">
  <div className="px-6 py-4 text-center">
    <div className="text-5xl mb-5">📱</div>
    <div className="text-primary font-bold text-3xl mb-2">Purfect App!</div>
    <p className="text-gray text-base">
   <b>Space Out Cat</b> is a cross-platform app to desktop, tablets and mobiles. <Link to="/PWA"><a className="text-primary font-bold underline">Download it here.</a></Link>
    </p>
  </div>
  <div className="mb-7 px-6 pt-4 pb-2 text-center md:mb-0">
  </div>
</div>
</div>
  )
}
