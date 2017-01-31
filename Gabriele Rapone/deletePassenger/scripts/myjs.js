var list = ["Giovanni", " Davide", " Sitti", " Sberonci", " Andrea"];
document.getElementById("tab").innerHTML = list;

function deletePassenger() {
    var nome = document.getElementById("name").value;
    if (list.length == 0) {
        alert("The list is empty!");
    }
    else {
        for (i = 0; i < list.length; i++) {
            if (list[i] == nome) {
                list.slice(i, 1);
            }
        }
    }
    document.getElementById("tab").innerHTML = list;
}