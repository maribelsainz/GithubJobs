import * as UI from './interfaz.js';
console.log(UI);

UI.formularioBuscar.addEventListener('submit', (e) => {
  e.preventDefault();

  // Obtener datos del formulario
  const modalidad = document.querySelector('#modalidad').value,
    ubicacion = document.querySelector('#ubicacion').value;

  // Si el usuario deja los campos vacios, mostrar error.
  if (modalidad === '' || ubicacion === '') {

    UI.divMensajes.innerHTML = 'Todos los campos son obligatorios';
    UI.divMensajes.classList.add('error');

    // Para borrar el mensaje de error después de 3 segundos.
    setTimeout(() => {
      UI.divMensajes.innerHTML = '';
      UI.divMensajes.classList.remove('error');
    }, 3000);
  } else {
    // De otro modo, si el formulario esta completo, realizar consulta a la API.


  }
})