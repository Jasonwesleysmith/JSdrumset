import  './style.scss'

import crash from './audio/crash.wav'
import hatC from './audio/hat_c.wav'
import hatO from './audio/hat_o.wav'
import kick from './audio/kick.wav'
import ride from './audio/ride.wav'
import snare from './audio/snare.wav'
import tom1 from './audio/tom1.wav'
import tom2 from './audio/tom2.wav'
import tom3 from './audio/tom3.wav'
import tom4 from './audio/tom4.wav'

const kickBtn = document.querySelector("#kick") 
const snareBtn = document.querySelector("#snare")
const tom1Btn = document.querySelector("#tom1")
const tom2Btn = document.querySelector("#tom2")
const tom3Btn = document.querySelector("#tom3")
const tom4Btn = document.querySelector("#tom4")
const rideBtn = document.querySelector("#ride")
const hatCBtn = document.querySelector("#hatC")
const hatOBtn = document.querySelector("#hatO")
const crashBtn = document.querySelector("#crash")

const playSound = (sound) => {
  console.log(sound)
  const audio = new Audio(sound);
  audio.play();
}

kickBtn.addEventListener('click', () => playSound(kick))
snareBtn.addEventListener('click', () => playSound(snare))
tom1Btn.addEventListener('click', () => playSound(tom1))
tom2Btn.addEventListener('click', () => playSound(tom2))
tom3Btn.addEventListener('click', () => playSound(tom3))
tom4Btn.addEventListener('click', () => playSound(tom4))
rideBtn.addEventListener('click', () => playSound(ride))
hatCBtn.addEventListener('click', () => playSound(hatC))
hatOBtn.addEventListener('click', () => playSound(hatO))
crashBtn.addEventListener('click', () => playSound(crash))

const handleKeydown = (e) => {
  const key = e.key

  switch (key) {
    case "tab":
      break;
    case " ":
      playSound(kick);
      break;
    case "s":
      playSound(snare);
      break;
    case "w":
      playSound(tom1);
      break;
    case "e":
      playSound(tom2);
      break;
    case "d":
      playSound(tom3);
      break;
    case "c":
      playSound(tom4);
      break;
    case "r":
      playSound(ride);
      break;  
    case "a":
      playSound(hatC);
      break;
    case "q":
      playSound(hatO);
      break;
    case "x":
      playSound(crash);
      break;  

  }

  //check the keyboard event, play the corresponding sound
  //kick: spacebar
  //snare: s
  //tom1: w
  //tom2: e
  //tom3: d
  //tom4: c
  //ride: r
  //hatC: a
  //hatO: q
  //crash: x
}
 
document.addEventListener('keypress', handleKeydown)
