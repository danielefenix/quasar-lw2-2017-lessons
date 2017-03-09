function n(op)
{
if(document.getElementById("risultato").value=="0" || document.getElementById("risultato").value==null)
{document.getElementById("risultato").value=op;}
else{document.getElementById("risultato").value+=op;}
}

function risultato() { document.getElementById("risultato").value=eval(document.getElementById("risultato").value); }

function azzera() { document.getElementById("risultato").value="0"; }


