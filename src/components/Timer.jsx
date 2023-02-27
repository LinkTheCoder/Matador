import {FaPlay, FaPause, FaBackward} from 'react-icons/fa';
  
  
  export default function Timer() {
      return ( 		<><p className="time">
          <span id="minutes">00</span>:<span id="seconds">00</span>:<span
              id="tens"
          >00</span>
      </p>
      <button className="mx-3 hover:opacity-50 duration-150" id="start"><FaPlay color="#ba68c8" size="2em"/></button>
      <button className="mx-3 hover:opacity-50 duration-150" id="stop"><FaPause color="#cdcdcd" size="2em"/></button>
      <button className="mx-3 hover:opacity-50 duration-150" id="reset"><FaBackward color="#ba68c8" size="2em"/></button></>
      )
  }
  
  window.onload = function () {
      let minutes = 0;
      let seconds = 0;
      let tens = 0;
      let appendMinutes = document.querySelector('#minutes');
      let appendTens = document.querySelector('#tens');
      let appendSeconds = document.querySelector('#seconds');
      let startBtn = document.querySelector('#start');
      let stopBtn = document.querySelector('#stop');
      let resetBtn = document.querySelector('#reset');
      let Interval;
  
      const startTimer = () => {
        tens++;
        if (tens <= 9) {
          appendTens.innerHTML = '0' + tens;
        }
        if (tens > 9) {
          appendTens.innerHTML = tens;
        }
  
        if (tens > 99) {
          seconds++;
          appendSeconds.innerHTML = '0' + seconds;
          tens = 0;
          appendTens.innerHTML = '0' + 0;
        }
  
        if (seconds > 9) {
          appendSeconds.innerHTML = seconds;
        }
  
        if (seconds > 59) {
          minutes++;
          appendMinutes.innerHTML = '0' + minutes;
          seconds = 0;
          appendSeconds.innerHTML = '0' + 0;
        }
      };
  
      startBtn.onclick = () => {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
      };
  
      stopBtn.onclick = () => {
        clearInterval(Interval);
      };
  
      resetBtn.onclick = () => {
        clearInterval(Interval);
        tens = '00';
        seconds = '00';
        minutes = '00';
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
        appendMinutes.innerHMTL = minutes;
      };
    }