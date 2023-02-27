export default function CardMindful() {
    return ( 

<div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">

<div className="rounded overflow-hidden">
  <div className="px-6 py-4 text-center">
    <div className="text-5xl mb-5">🌬️</div>
    <div className="text-primary font-bold text-3xl mb-2">4-7-8 purr!</div>
    <p className="text-gray text-base">
    Emptying the lungs, breath in through the nose for 4 seconds. 
    Then hold your breath and count 7 seconds. 
    Exhaling forcefully through the mouth 8 seconds.
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
    <div className="text-5xl mb-5">🛌</div>
    <div className="text-primary font-bold text-3xl mb-2">Untense your tails!</div>
    <p className="text-gray text-base">
    Arrange your body in a comfortable position.
Stretch and let your attention scan your body.
Pay attention to how each part of your body and try to untense.
    </p>
  </div>
  <div className="mb-7 px-6 pt-4 pb-2 text-center md:mb-0">
  <input
  type="checkbox"
  class="h-6 w-6 form-checkbox rounded text-primary focus:ring-primary"/>
  </div>
</div>

<div className="rounded overflow-hidden">
  <div className="px-6 py-4 text-center">
    <div className="text-5xl mb-5">🌤️</div>
    <div className="text-primary font-bold text-3xl mb-2">Pawsome air!</div>
    <p className="text-gray text-base">
  To breath in fresh air and expose yourself for sun is good for your body and mind.
  Getting enough sunlight each day will also improve your sleep.
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
