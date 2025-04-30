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

         div.tabIndex = 0;
         document.addEventListener("keydown", gestioneTasti)

         wrapper.appendChild(div);
      }
   }

   let iPos1 = generaNumero(0,3);
   let jPos1 = generaNumero(0,3);

   const pos1Casuale = document.getElementById(iPos1 + "-" + jPos1);

   pos1Casuale.innerText = "2";

   let iPos2;
   let jPos2
   do
   {
      iPos2 = generaNumero(0,3);
      jPos2 = generaNumero(0,3);

   }while(iPos1 == iPos2 && jPos1 == jPos2)
   
   const pos2Casuale = document.getElementById(iPos2 + "-" + jPos2);
   pos2Casuale.innerText = "2";

}

function generaNumero(min, max) {
   return Math.floor((max - min) * Math.random()) + min;
}

function gestioneTasti(e)
{
   switch(e.key)
   {
      case "ArrowUp":
         frecciaSu();
         break;
      case "ArrowDown":
         break;
      case "ArrowLeft":
         break;
      case "ArrowRight":
         break;
   }
}


function frecciaSu()
{
   for(let j = 0; j < DIM; j++)
   {
      for(let i = 0; i < DIM; i++)
      {
         let currentCell = document.getElementById(i + "-" + j);

         if(currentCell.innerText == "")
         {
            currentCell.innerText = document.getElementById(i + "-" + j + 1).innerText;
         }
      }
   }
}