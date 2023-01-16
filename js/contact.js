const mailto='mailto:nastypixie@nastypixie.com';
function submitMail() {
    var subject = document.getElementById("subject");
    var yourmail = document.getElementById("yourmail");
    var yourname = document.getElementById("yourname");
    var yourcomments = document.getElementById("yourcomments");

    let toSend=`${mailto}?subject=${subject.value}&body=Mail de Contacto: ${yourmail.value}%0A%0ANombre: ${yourname.value}%0A%0AComentarios: ${yourcomments.value}%0A%0A%0A`;
    window.location=toSend;
}
