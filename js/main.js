let myForm = document.querySelector("form");
myForm.addEventListener('submit', (e) => {
e.preventDefault();
})
function send() {

        emailjs.send("service_aj9fskj", "template_oh3w3jq", {
        to_name: document.querySelector("#to_name").value,
        from_name: document.querySelector("#from_name").value,
        message: document.querySelector("#message").value,
        email_to: document.querySelector("#email_to").value,
    }).then(response => {
        console.log( "succes" , response.status);
    },(error) => {
        console.log(error.status);
    })
}
document.querySelector(".send").addEventListener('click', send)