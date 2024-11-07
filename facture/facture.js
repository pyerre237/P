function calculer() {
    let prix1 = document.getElementById("prix1").value;
    let quantite1 = document.getElementById("quantite1").value;
    let prix2 = document.getElementById("prix2").value;
    let quantite2 = document.getElementById("quantite2").value;
    let prix3 = document.getElementById("prix3").value;
    let quantite3 = document.getElementById("quantite3").value;

    let result1 = prix1 * quantite1;
    let result2 = prix2 * quantite2;
    let result3 = prix3 * quantite3;

    document.getElementById("result1").innerHTML = result1;
    document.getElementById("result2").innerHTML = result2;
    document.getElementById("result3").innerHTML = result3;

    let total = result1 + result2 + result3;
    document.getElementById("total").innerHTML = total;
}
function calculer(index) {
    let prix = parseFloat(document.getElementById("prix" + index).value) || 0;
    let quantite = parseFloat(document.getElementById("quantite" + index).value) || 0;
    return prix * quantite;
}


function reinitialiser() {
    document.getElementById("prix1").value = "";
    document.getElementById("quantite1").value = "";
    document.getElementById("prix2").value = "";
    document.getElementById("quantite2").value = "";
    document.getElementById("prix3").value = "";
    document.getElementById("quantite3").value = "";

    document.getElementById("result1").innerHTML = "0";
    document.getElementById("result2").innerHTML = "0";
    document.getElementById("result3").innerHTML = "0";
    document.getElementById("total").innerHTML = "0";
}

function calculerTotal() {
    let total = 0;
    for (let i = 1; i <= 3; i++) { 
        total += calculer(i);
    }
    document.getElementById("resultat").innerText = "Total : " + total.toFixed(2) + " €";
}