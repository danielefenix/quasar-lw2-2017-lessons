


// 17 GENNAIO ESERCIZI

/* Esercizio 1

    // prendiamo elemento da html e aggiungiamo evento di lettura
    document.getElementById("vai").addEventListener("scroll", myFunction);
    // dichiariamo myFunction
    function myFunction() {
    // prendiamo elemento html
    document.getElementById("demo").innerHTML = "Complimenti hai scrollato il tu primo div";
                               }
                                */

 /////////////////////////////////////////////////
 /////////////////////////////////////////////////

/* 
 // Esercizio 3
  function hello() {
      alert("Hello there!");
  }
  var countClicks = 0;

  function upCount() {
      if (document.getElementById('hello').onclick = "hello()") {
          countClicks++;
          alert(countClicks);
          return true;
      }
      else {
          return false;
      }
  };
  var qui = countClicks;
  document.getElementById("qui").innerHTML("Hai cliccato" + qui);
  */
 //////////////////////////////////////////
 /////////////////////////////////////////
 /*
  // Esercizio 5
  function myFunction() {
      document.getElementById("myBtn").value = "Audi";
   
  }    */
 //////////////////////////////////////////
 /////////////////////////////////////////
 /* Esercizio 6
  function removeDummy() {
      var elem = document.getElementById('dummy');
      elem.parentNode.removeChild(elem);
  } */
 //////////////////////////////////////////
 /////////////////////////////////////////
 /* Esercizio 7
 document.addEventListener('click', function (e) {
     e = e || window.event;
     var target = e.target || e.srcElement
         , text = target.textContent || text.innerText;
 }, false); */ // questo esercizio va sostituito con Jquery