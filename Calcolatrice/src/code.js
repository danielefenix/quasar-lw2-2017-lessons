var risultato = document.getElementById("risultato");
var mettivirgola = document.getElementById(".");
var zero = document.getElementById("0");

function n(op) {
    if (risultato.value == "0" || risultato.value == null) {
        risultato.value = op;
    }
    else {
        risultato.value += op;
    }
}

function calcola() {
    risultato.value = eval(risultato.value);
}

function azzera() {
    risultato.value = "0";
}

function virgola() {
    var lavirgola = zero + mettivirgola;
    risultato.value = lavirgola++;
}