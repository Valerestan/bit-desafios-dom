"use strict";

/* 1. HTML con únicamente un div, replicar la muestra de la manipulación 
del DOM explicada en clase, Debe mostrar su nombre completo con el texto a color. */

const $nombre = document.getElementById("nombre");
console.log($nombre);

$nombre.textContent = "Valentina Restan Munera";
$nombre.className = "color-nombre";
