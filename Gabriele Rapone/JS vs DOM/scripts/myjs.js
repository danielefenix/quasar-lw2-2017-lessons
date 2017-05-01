var counterWin = 0;
var counterForm = 0;
//EXERCISE 1
//DETECTS WINDOW AND PRINTS SCROLL INTERACTIONS
window.onscroll = function () {
    winScroll()
}

function winScroll() {
    var formInter = document.getElementById("formInter");
    formInter.innerHTML = "Window scroll interactions " + counterWin++;
}
///////////
//DETECTS AND PRINTS BOX SCROLL INTERACRIONS
function boxScroll() {
    var windowInter = document.getElementById("windowInter");
    windowInter.innerHTML = "Textarea scroll interactions " + counterForm++;
}
///////////////////////////////////////////////////////////////
//EXERCISE 3
var counterReset = 0;
var reset = document.getElementById("reset");
reset.addEventListener("click", resetCounters);
//RESETS COUNTERS AND COUNTS HOW MANY TIMES USER RESETS
function resetCounters() {
    //resets counter of window scroll then prints it
    counterWin = 0;
    formInter.innerHTML = "Window scroll interactions " + counterWin;
    //reset counter of textarea scroll then prints it
    counterForm = 0;
    windowInter.innerHTML = "Textarea scroll interactions " + counterForm;
    //counts click on reset
    counterReset++;
    //prints how many times user clicked on reset
    document.getElementById("reset-counter").innerHTML = "Number of counter reset " + counterReset;
}
//END EXERCISE 3
//////////////////////////////////////////////////////////////
//EXERCISE 4
var butt = document.getElementById("butt");
butt.addEventListener("click", remove);
//REMOVE PARENT
function remove() {
    butt.parentNode.remove();
};
//////////////////////////////////////////////////////////////