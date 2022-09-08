var inputTexto = document.querySelector("#input-texto")
inputTexto.focus()
var inputPassword = document.querySelector("#input-password")
var botão = document.getElementsByClassName("btn-login")

function login() {
    if(inputTexto.value.length == 0) {
        alert("Please, type your username.")
        inputTexto.focus()
    } else if(inputPassword.value.length == 0) {
        alert("Please, type your password.")
        inputPassword.focus()
    } else {
        alert("Logging in to Soraka's World...")
        inputTexto.value = ""
        inputPassword.value = ""
        inputTexto.focus()
    }
}