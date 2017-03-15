var risultato = document.getElementById("risultato");
// var mettivirgola = document.getElementById(".");
// var zero = document.getElementById("0");

// Questa funzione è fondamentale perché
// stampa sia i numeri che gli operatori

function n(op) {
    if (risultato.value == "0" || risultato.value == null) {
        risultato.value = op;
    }
    else {
        risultato.value += op;
    }
}

// Questa invece esegue l0perazione matematica
// utilizzando la funzione eval()

function calcola() {
    risultato.value = eval(risultato.value);
}
// attraverso l'suo di substing è possbile tornare indietro di un carattere
// infatti questa funzione torna indietro di un carattere
function backchar() {
    risultato.value = risultato.value.substring(0, risultato.value.length - 1);
}

// mentre questa azzera tutto quello che è scritto nel display
// portando a 0 tutti i valori
function azzera() {
    risultato.value = "0";
}


/* function virgola() {
    var lavirgola = zero + mettivirgola;
    risultato.value = lavirgola++;
} */