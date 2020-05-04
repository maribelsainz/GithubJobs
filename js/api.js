export class API {
  constructor(descripcion, lugar) {
    this.descripcion = descripcion;
    this.lugar = lugar;
  }

  async consultarAPI() {
    let url = '';
    url += 'https://cors-anywhere.herokuapp.com/';
    url += 'https://jobs.github.com/positions.json?';
    // Si se busca descripción agregarlo a la URL
    if (descripcion !== '') {
      url += `description=${this.descripcion}&`;
    }
    // Si se busca lugar agregarlo a la URL
    if (lugar !== '') {
      url += `location=${this.lugar}&`;
    }

    console.log(url);

    const urlFinal = await fetch(url);

    const respuesta = await urlFinal.json();

    return {
      respuesta
    }









    // const url = await fetch(`https://cors-anywhere.herokuapp.com/` + `https://jobs.github.com/positions.json?description=${this.descripcion}&location=${this.lugar}`);

    // const respuesta = await url.json();

    // return {
    //   respuesta
    // }
  }
}



// `https://jobs.github.com/positions.json?${typeRqst}=${request}&full_time=${fullTime}`