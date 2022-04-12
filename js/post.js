function reqPost(url, body, token) {
    console.log(body);

    let request = new XMLHttpRequest();

    request.open("POST", url, true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify(body));

    request.onload = () => {
        console.log(this.responseText);
        // location.reload(true);
        window.location.replace("../thanks.html");
    }

        return request.responseText;
    }
function enviarEmail() {
    //para nao recarregar a pagina
    event.preventDefault();
    const url = 'http://api.leoni-lse.com.br:3000/mailLeoni';
   
    let email = document.getElementById("email").value
    let subject = document.getElementById("subject").value
    let text = document.getElementById("text").value
    let token = document.getElementById("token").value

    console.log(email, subject, text, token);
    body = {
        "token": token,
        "subject": subject,
        "text": text
    }
    reqPost(url, body,token);

}