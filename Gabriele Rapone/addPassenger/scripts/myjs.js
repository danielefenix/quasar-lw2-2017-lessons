var passengerList = [];

function addToList() {
    var value = document.getElementById("name").value;
    passengerList.push("<p>" + value + "<span id=\'closebtn\'>X</span>" + "</p>");
    for (i = 0; i < passengerList.length; i++) {
        document.getElementById("tab").innerHTML = passengerList[i];
    }
    /*
    if (passengerList.length == 0) {
        passengerList.push("<p>" + value + "<span id=\'closebtn\'>X</span>" + "</p>");
        document.getElementById("tab").innerHTML = passengerList;
    }
    else if (passengerList == undefined) {
        passengerList == passengerList.push("<p>" + document.getElementById("name").value + "<span  id=\'closebtn\'>X</span>" + "</p>");
        document.getElementById("tab").innerHTML = passengerList;
    }
    else {
        passengerList == passengerList.push("<p>" + document.getElementById("name").value + "<span  id=\'closebtn\'>X</span>" + "</p>");
        document.getElementById("tab").innerHTML = passengerList;
    }
    */
}
/*passengerList.push("<p>" + document.getElementById("name").value + "<img src ='assets/Page 1.png' id='rem' onclick='function remove()'>" + "</p>");
 document.getElementById("tab").innerHTML = passengerList;
 for (i = 0; i < passengerList; i++) {
     if (passengerList[i] == undefined) {
     console.log("brutto");
         //passengerList[i] == document.getElementById("name").value;
     }
 }*/
//document.getElementById("closebtn").addEventListener('click', this.parentNode.style.display = 'none', false);
function clearArr() {
    passengerList.length = 0;
    document.getElementById("name").value = "";
    document.getElementById("tab").innerHTML = "";
}
console.log(passengerList);