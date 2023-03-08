import {FaChrome, FaEdge, FaWindows, FaLinux, FaApple, FaAndroid} from 'react-icons/fa';
import {HiSparkles} from 'react-icons/hi';


export default function CardPWA() {
    return ( 
      
<div className="mt-10 p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">

<div className="rounded overflow-hidden">
  <div className="px-6 py-4 text-center">
    <div className="text-3xl mb-5 flex justify-center space-x-3">
    <HiSparkles color="#eab308"/>
    </div>

    <div className="text-yellow-500 font-bold text-3xl mb-2">Funktioner!</div>
    <p className="text-gray text-base">
    💻 Responsiv design med stående & liggande läge!<br></br>
    📶 Funkar både online & offline!<br></br>
    📲 Automatiska uppdateringar!
    </p>
  </div>
  <div className="mb-7 px-6 pt-4 pb-2 text-center md:mb-0">
  </div>
</div>

<div className="rounded overflow-hidden">
  <div className="px-6 py-4 text-center">
    <div className="text-primary text-3xl mb-5 flex justify-center space-x-3">
    <FaChrome color="#eab308"/>
    <FaEdge color="#eab308"/>
    <FaWindows color="#eab308"/>
    <FaLinux color="#eab308"/>
    <FaApple color="#eab308"/>
    <FaAndroid color="#eab308"/>
    </div>

    <div className="text-yellow-500 font-bold text-3xl mb-2">Datorer & Android Mobiler!</div>
    <p className="text-gray text-base">
    Ladda ner appen till datorer och mobiler som stödjer Google Chrome eller Microsoft Edge.
    </p>
    
    <button id="installApp" className="mt-5 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">Installera</button>
  
  </div>
  <div className="mb-7 px-6 pt-4 pb-2 text-center md:mb-0">
  </div>
</div>
<div className="rounded overflow-hidden">
  <div className="px-6 py-4 text-center">
  <div className="text-3xl mb-5 flex justify-center space-x-3">
  <FaApple color="#eab308"/>
    </div>

    <div className="text-yellow-500 font-bold text-3xl mb-2">iOS & iPadOS!</div>
    <p className="text-gray text-base">
    <li>Öppna delnings menyn.</li>
 <li>Tryck på "Lägg till på hemskärmen".</li>
<li>Godkänd namnet på appen; namnet på appet är anpassningsbart.</li>
<li>Tryck på lägg till. På iOS och iPadOS, bokmärken och appar ser likadana ut på hemskärmen.</li>
    </p>
  </div>
  <div className="mb-7 px-6 pt-4 pb-2 text-center md:mb-0">
  </div>
</div>

</div>
  )
}