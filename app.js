function getValue(){
    var mensaje = document.getElementById("mensaje bienvenida");
    var userName = document.getElementById("name"). value;
    mensaje.innerHTML= "Bienvenida " + userName;
}
function sendMail() {
    var userMail = document.getElementById("mail").value;
    var mensaje = document.getElementById("mailMessage");
    mensaje.innerHTML= "Tu correo es: " + userMail;
}