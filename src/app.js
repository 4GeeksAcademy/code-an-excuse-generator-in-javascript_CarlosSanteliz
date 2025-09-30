import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  // //write your code here
  // // console.log("Hello Rigo from the console!");
  let who = ['The dog ', 'My grandma ', 'The mailman ', 'My bird '];
  let action = ['ate ', 'peed ', 'crushed ', 'broke '];
  let what = ['my homework ', 'my phone ', 'the car '];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was busy'];

  // for (let i = 0; i < who.length; i++) {
  //   for (let j = 0); j < action.length; j++) {
  //     for (k = 0; k < what.length; k++) {
  //       for (l = 0; l < when.length; l++) {
  //         console.log(who[i] + action[j] + what[k] + when[l])
  //       }
  //     }
  //   }
  // }
  function cambiarTexto() {
    let randomWho = Math.floor(Math.random() * who.length);
    let randomAction = Math.floor(Math.random() * action.length);
    let randomWhat = Math.floor(Math.random() * what.length);
    let randomWhen = Math.floor(Math.random() * when.length);

    let excuse = who[randomWho] + action[randomAction] + what[randomWhat] + when[randomWhen];
    console.log(excuse)
    
    return excuse;

  }
  document.getElementById("excuse").textContent = cambiarTexto()
}
