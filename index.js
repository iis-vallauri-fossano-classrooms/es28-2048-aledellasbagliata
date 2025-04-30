"use strict"

const DIM = 4;

window.onload = function () {

   creazioneMatrice();

   

}

function creazioneMatrice()
{
   const wrapper = document.getElementById("wrapper");
   for (let i = 0; i < DIM; i++) {
      for (let j = 0; j < DIM; j++) {
         const div = document.createElement("div");

         div.classList.add("cella");

         div.id = i + "-" + j;

         wrapper.appendChild(div);
      }
   }
}

function generaNumero(min, max) {
   return Math.floor((max - min) * Math.random()) + min;
}