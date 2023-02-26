export default function CardFitness() {
    return ( 

<div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">

<div className="rounded overflow-hidden">
  <div className="px-6 py-4 text-center">
    <div className="text-5xl mb-5">💪</div>
    <div className="text-primary font-bold text-3xl mb-2">Become cathletic!</div>
    <p className="text-gray text-base">
    To be able to carry heavy groceries or run a mile, it's healthy to do regular fitness.
     There are many different workouts do choose from, both in and outdoor activities.
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
    <div className="text-5xl mb-5">👐</div>
    <div className="text-primary font-bold text-3xl mb-2">Stretch your claws!</div>
    <p className="text-gray text-base">
 Strecthing makes you more flexible and also decrease the risk for injuries.
If you're sitting and writing a lot remember to stretch wrist and hands time by time.
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
    <div className="text-5xl mb-5">🚶</div>
    <div className="text-primary font-bold text-3xl mb-2">Enjoy meowment!</div>
    <p className="text-gray text-base">
    Notice how many steps you take during each inhale and exhale, and at the speed you’re walking. 
  Match your steps to your breath, count 1-2-3 steps etc.
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