
// selecciono los elementos que necesito
const form = document.querySelector("form")
const inputPassword = document.querySelector("#passw")
const inputEdad = document.querySelector("#age")

const checkEdad = document.querySelector("#check-edad")
const checkPassword = document.querySelector("#check-passw")

// chequear datos en el submit del form

form.onsubmit = (e) => {
  e.preventDefault()
  if (inputEdad.value < 18) {
    checkEdad.textContent = "Sos menor de edad!"
    inputEdad.classList.add("input-error")
  }
}

// chequear datos en el blur del input 

inputPassword.onblur = (e) => {
  if (inputPassword.value.length < 8) {
    checkPassword.textContent = "Tu password es muy corto!"
    inputPassword.classList.add("input-error")
  }
}