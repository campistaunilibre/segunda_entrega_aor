document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    
    if (name === "" || email === "" || message === "") {
        alert("Por favor, completa todos los campos.");
    } else {
        alert("Formulario enviado correctamente.");
        this.reset();
    }
});