
// // selecciono los elementos que necesito
const form = document.querySelector("form")
// const inputPassword = document.querySelector("#passw")
// const inputEdad = document.querySelector("#age")

// const checkEdad = document.querySelector("#check-edad")
// const checkPassword = document.querySelector("#check-passw")

// // chequear datos en el submit del form

// form.onsubmit = (e) => {
//   e.preventDefault()
//   if (inputEdad.value < 18) {
//     checkEdad.textContent = "Sos menor de edad!"
//     inputEdad.classList.add("input-error")
//   }
// }

// // envitar q usuario envie el form, pero que JS tenga acceso a la info //
const inputNombre = document.querySelector("#name")
const errorNombre = document.querySelector("#error-nombre")

// form.onsubmit = (e) => {
//   e.preventDefault();

//   console.log(inputNombre.value)

//   if (inputNombre.value-length < 5) {
//     console.log("nombre muy corto") // una opcion
//     errorNombre.textContent = "nombre muy corto." // otra opcion
//   }


// }

// // chequear datos en el blur del input 

// inputPassword.onblur = (e) => {
//   if (inputPassword.value.length < 8) {
//     checkPassword.textContent = "Tu password es muy corto!"
//     inputPassword.classList.add("input-error")
//   }
// }


inputNombre.onblur = () => {
  if (inputNombre.value.length < 4) {
    errorNombre.textContent = "el nombre en muy corto"
    inputNombre.classList.add("input-error")
  }
}


// alerta de que se envio el formulario //

form.onsubmit = () => {
  alert("Se envió el formulario")
}


// para ver que checkeo el usuario en la checkbox

form.onsubmit = (e) => {
  e.preventDefault(); // esto evita q se mande el form

  const mascotas = document.querySelector("#pets")

  console.log(pets.checked)

  if (pets.checked) {
    errorNombre.textContent = "Error, elegi uno"
  }

  else {
    form.submit()  // para enviarlo
  }
}

// para ver lo que escribe el usuario en la consola apenas presiona una tecla

inputNombre.oninput = (e) => {    // la e es el evento, tiene q estar para poder verlo
  console.log(e.target.value);    // target es una propiedad q aparece en la lista y value esta dentro de target

}


// para ver la info del evento en sí

inputNombre.oninput = (e) => {    
  console.log(e); 

}

