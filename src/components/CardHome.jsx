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
  <input
  type="checkbox"
  className="h-6 w-6 form-checkbox rounded text-primary focus:ring-primary"/>
  </div>
</div>
<div className="rounded overflow-hidden">
  <div className="px-6 py-4 text-center">
    <div className="text-5xl mb-5">⏲️</div>
    <div className="text-primary font-bold text-3xl mb-2">Any minute meow!</div>
    <p className="text-gray text-base">
    Keep track on how long you're mind are in space or your body on earth. 
    A perfect counter is available to use in the app.
    </p>
  </div>
  <div className="mb-7 px-6 pt-4 pb-2 text-center md:mb-0">
  <input
  type="checkbox"
  className="h-6 w-6 form-checkbox rounded text-primary focus:ring-primary"/>
  </div>
</div>

<div className="rounded overflow-hidden">
  <div className="px-6 py-4 text-center">
    <div className="text-5xl mb-5">📝</div>
    <div className="text-primary font-bold text-3xl mb-2">Claw and Order!</div>
    <p className="text-gray text-base">
    Pardon me, but sometimes humans often tends to forget things. 
    That's why every task also has a checkbox, great right?
    </p>
  </div>
  <div className="mb-7 px-6 pt-4 pb-2 text-center md:mb-0">
  <input
  type="checkbox"
  className="h-6 w-6 form-checkbox rounded text-primary focus:ring-primary"/>
  </div>
</div>
</div>
  )
}
