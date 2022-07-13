class Api {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  getData() {
    fetch(this.baseUrl + "/advice").then((res) => res.json());
  }
}

export const api = new Api("https://api.adviceslip.com");
