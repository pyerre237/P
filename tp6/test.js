function login(){
    var login = document.getElementById("t1").value;
    var passworld = document.getAnimations("h1").value;
    if(login == "admin" && passworld == "admin")
 {

window.location.href='yes.html'
 }
 else {
    alert("Identifiants non reconnus");
    window.location.href='non.html';
 }
}