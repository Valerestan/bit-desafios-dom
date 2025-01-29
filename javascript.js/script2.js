/*2. Crear un formulario para que el usuario ingrese: usuario y contraseña, 
al hacer click al botón de enviar mostrarle al usuario una ventana emergente
informando que se esta procesando la solicitud, almacenar los datos ingresados
en variables, imprimir por consola los valores de las variables. */

const $dato1 = document.getElementById("usuario");
const $dato2 = document.getElementById("contrasena");
const $enviar = document.getElementById("boton");

$enviar.addEventListener("click", enviado);

function enviado() {
  alert("Se esta procesando la solicitud");
  console.log($dato1.value);
  console.log($dato2.value);
}
