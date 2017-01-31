var username
var counterOk = 0;
var counterCanc = 0;
/////////////////////
//CHECK AND COUNTS HOW MANY TIMES THE USER PRESS CANCEL
while (username == null) {
    counterCanc++
    username = prompt("Enter your name here and I'll tell you who you are");
    //CHECK IF USER PRESSES OK INPUT AFTER TRIED CANCEL
    for (username; username === ""; counterOk++) {
        username = prompt("You must type at least a lot of letters :P");
    }
}
//CHECK IF USER LEFTS EMPTY INPUT
while (username === "") {
    counterOk++
    username = prompt("Invalid name format");
    //CHECK IF USER PRESSES CANCEL AFTER TRIED WITH EMPTY FORM
    for (username; username == null; counterCanc++) {
        username = prompt("Enter your name here and I'll tell you who you are");
    }
}
//CHECK FOR CORRECT NAME VALUE
if (typeof username == ) {
    username = prompt("You need to type at least one type");
}
//COUNTS HOW MANY TIMES THE USER INTERACTS AND JUDGES HIM :D
if (counterCanc < 1) {
    document.getElementById("definition").innerHTML = (username + ", You're a good boy<br> You tried to avoid the problem " + counterCanc + " times");
}
if (counterCanc > 1) {
    document.getElementById("definition").innerHTML = ("Mm... bad boy " + username + "<br> You tried to avoid the problem " + counterCanc + " times");
}
if (counterOk < 1) {
    document.getElementById("definition").innerHTML = (username + ", You're normal<br> You tried " + counterCanc + " times before write the name<br>" + "GET A LIFE ANYWAY!");
}
if (counterOk > 1) {
    document.getElementById("definition").innerHTML = ("What's wrong with you " + username + "?" + "<br> You didn't write " + counterOk + " times your name");
}
//////////////////////////////////////////