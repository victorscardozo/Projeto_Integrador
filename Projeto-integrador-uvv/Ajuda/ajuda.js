function sendEmail() {

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "suportecertificados@uvv.com",
        Password : "19911115CDE19A8F6339FFB377CA2DDD7863",
        To : 'farofademilho5@gmail.com',
        From : document.getElementById('inputEmail').value,
        Subject : "Requerimento de suporte cliente",
        Body : document.getElementById('textoemail').value

    }).then(
      message => alert(message)
    );
}