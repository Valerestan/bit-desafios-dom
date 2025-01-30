/*3. Con base en el desafío #2 => La contraseña debe tener 10 caracteres, mostrar
una alerta si no se cumple esta condición. */

const $dato1 = document.getElementById("usuario");
const $dato2 = document.getElementById("contrasena");
const $enviar = document.getElementById("boton");

$enviar.addEventListener("click", enviado);

function enviado() {
  console.log($dato1.value);
  console.log($dato2.value);
  if ($dato2.value.length < 10 || $dato2.value.length > 10) {
    alert("La contraseña debe tener 10 caracteres");
  } else {
    alert("La contraseña cumple con los requisitos");
  }
}
