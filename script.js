const contenedor = document.getElementById('contenedor-principal');
const form = document.getElementById('form');
const enviar = document.getElementById('enviar');
const uno = document.getElementById('uno');
const dos = document.getElementById('dos');
const tres = document.getElementById('tres');
const cuatro = document.getElementById('cuatro');
const cinco = document.getElementById('cinco');

const opcionSeleccionada = (_value) => {
  const respuesta = new DocumentFragment();
  const img = document.createElement('img');
  img.setAttribute('src', './imgs/illustration-thank-you.svg');
  const opcion = document.createElement('h4');
  const opinion = document.createTextNode(`Seleccionaste ${_value} de 5`);
  const agradecimiento = document.createElement('h2');
  agradecimiento.innerHTML = '¡Gracias!';
  const texto = document.createElement('p');
  texto.innerHTML =
    'Apreciamos que te tomes el tiempo de darnos una calificación. Si alguna vez necesitas soporte, no dudes en llamarnos';
  opcion.appendChild(opinion);
  respuesta.appendChild(img);
  respuesta.appendChild(opcion);
  respuesta.appendChild(agradecimiento);
  respuesta.appendChild(texto);
  return respuesta;
};

const removerSeleccion = () => {
  if (uno.classList.contains('selected')) {
    uno.classList.remove('selected');
  }
  if (dos.classList.contains('selected')) {
    dos.classList.remove('selected');
  }
  if (tres.classList.contains('selected')) {
    tres.classList.remove('selected');
  }
  if (cuatro.classList.contains('selected')) {
    cuatro.classList.remove('selected');
  }
  if (cinco.classList.contains('selected')) {
    cinco.classList.remove('selected');
  }
};

form.addEventListener('click', (e) => {
  if (e.target.value !== undefined && e.target !== enviar) {
    let seleccionado = e.target;
    removerSeleccion();
    seleccionado.classList.add('selected');
    enviar.removeAttribute('disabled');
  }
  const valor = document.querySelector(".selected");
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let segundaImagen = opcionSeleccionada(valor.value);
    contenedor.replaceChildren(segundaImagen);
  })
});
