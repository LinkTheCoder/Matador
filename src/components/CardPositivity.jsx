export default function CardPositivity() {
    return ( 

<div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">

<div className="rounded overflow-hidden">
  <div className="px-6 py-4 text-center">
    <div className="text-5xl mb-5">😊</div>
    <div className="text-primary font-bold text-3xl mb-2">Be pawsitive!</div>
    <p className="text-gray text-base">
    Positive thinking in life is good for the mental health. 
    Tips is trying to focus on good things, practice gratitude, open yourself up to humour etc.
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
    <div className="text-5xl mb-5">✨</div>
    <div className="text-primary font-bold text-3xl mb-2">Cheer your self-pawtrait!</div>
    <p className="text-gray text-base">
    By pep-talking yourself you will increase your self-esteem, and gradually strengthen your mind. 
   Don't be afraid to stand up and believe in yourself.
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
    <div className="text-5xl mb-5">🔖</div>
    <div className="text-primary font-bold text-3xl mb-2">Don't furget hobbies!</div>
    <p className="text-gray text-base">
   To have hobbies outside job and other chores is important to give yourself others space.
   It will also stimulate your creativity, knowledge and mood.
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