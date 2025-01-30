/*4. Con base en el desafío #3 =>
- Quitar espacios en blanco al inicio y al final de todos los campos.
- La contraseña debe tener por lo menos un caracter especial (!$#+-?.)
- Imprimir por consola cuantas vocales tiene cada campo. */

const $dato1 = document.getElementById("usuario");
const $dato2 = document.getElementById("contrasena");
const $enviar = document.getElementById("boton");

$enviar.addEventListener("click", enviado);

function enviado() {
  console.log($dato1.value);
  console.log($dato1.trim());
  console.log($dato1.match(/[aeiouAEIOU]/g));
  console.log($dato2.value.trim().match(/[aeiouAEIOU]/g));
  if ($dato2.value.length < 10 || $dato2.value.length > 10) {
    alert("La contraseña debe tener 10 caracteres");
  } else {
    alert("La contraseña cumple con los requisitos");
  }
}
