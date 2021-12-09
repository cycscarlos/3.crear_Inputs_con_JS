window.onload = inicio;
const NOMBRECORRECTO = "ZCODER";

function inicio() {
  document.querySelector(".box").insertAdjacentHTML(
    "beforeend",
    `<input id="campo" type="text" placeholder="Ingrese su nombre">
    <button class="boton">Aceptar</button>
    <div id="saludo"></div>`
  );
  document.querySelector(".boton").onclick = leer;
}
function leer() {
  let entrada = document.querySelector("#campo").value;
  let nombreMayusculas = entrada.toUpperCase();
  let nombreFormateado =
    entrada.substr(0, 1).toUpperCase() + entrada.substr(1).toLowerCase();

  if (nombreMayusculas == NOMBRECORRECTO) {
    document.querySelector(
      "#saludo"
    ).innerHTML = `¡Hola! ${nombreFormateado} <button id="btn">Ir a la web</button>`;
    document.querySelector("#btn").onclick = irWeb;
  } else {
    document.querySelector("#campo").value = "";
    document.querySelector("#campo").focus();
    document.querySelector(
      "#saludo"
    ).innerHTML = `Por favor, ingrese un nombre correcto`;
  }
}
function irWeb() {
  location.href = "https://carlos-colmenares-a.netlify.app";
}
