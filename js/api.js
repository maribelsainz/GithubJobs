export class API {
  constructor(descripcion, lugar) {
    this.descripcion = descripcion;
    this.lugar = lugar;
  }

  async consultarAPI() {
    const url = await fetch(`https://cors-anywhere.herokuapp.com/` + `https://jobs.github.com/positions.json?description=${this.descripcion}&location=${this.lugar}`);

    const respuesta = await url.json();

    return {
      respuesta
    }
  }
}



// `https://jobs.github.com/positions.json?${typeRqst}=${request}&full_time=${fullTime}`