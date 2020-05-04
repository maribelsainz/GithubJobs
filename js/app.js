import {
  API
} from './api.js';
import * as UI from './interfaz.js';
console.log(UI);

UI.formularioBuscar.addEventListener('submit', (e) => {
  e.preventDefault();

  // Obtener datos del formulario
  const descripcion = document.querySelector('#descripcion').value,
    lugar = document.querySelector('#lugar').value;

  // Si el usuario deja los campos vacios, mostrar error.
  if (descripcion === '' || lugar === '') {

    UI.divMensajes.innerHTML = 'Todos los campos son obligatorios';
    UI.divMensajes.classList.add('error');

    // Para borrar el mensaje de error después de 3 segundos.
    setTimeout(() => {
      UI.divMensajes.innerHTML = '';
      UI.divMensajes.classList.remove('error');
    }, 3000);
  } else {
    // De otro modo, si el formulario esta completo, realizar consulta a la API.
    const api = new API(descripcion, lugar);
    api.consultarAPI()
      .then(data => {
        // Se envía la petición desde el formulario y se retorna respuesta de la REST API en la consola para probar.
        console.log(data.respuesta);

        if (data.respuesta.length === 0) {
          // El trabajo no existe: Se muestra error

          UI.divMensajes.innerHTML = 'El trabajo no existe, prueba con otra búsqueda';
          UI.divMensajes.classList.add('error');
          setTimeout(() => {
            UI.divMensajes.innerHTML = '';
            UI.divMensajes.classList.remove('error');
            UI.formularioBuscar.reset();
          }, 3000);
        } else {
          // El trabajo existe: Se recorre el arreglo y luego se imprime.

          let html = `<ul class="lista">`;
          data.respuesta.forEach(trabajo => {
            console.log(trabajo.company)
            html += `
              <li>Empresa: ${trabajo.company}</li>
              <li>Puesto: ${trabajo.title}</li>
              <li>Modalidad: ${trabajo.type}</li>
              <li>Ubicación: ${trabajo.location}</li>
              <li>Publicación: ${trabajo.created_at}</li>
          `;
          })
          html += `</ul>`
          UI.divResultado.innerHTML = html;
        }
      })
      .catch(error => {
        console.log(error);
      })
  }
})

//<img src=${trabajo.company_logo} alt="Company Logo">