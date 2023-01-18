const axios = require('axios'); // fetch, request

// OOP object oriented programing
class Bot {
  constructor(url, id, token) {
    this.trainerId = id;
    this.request = axios.create({
      baseURL: url,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    this.request.interceptors.response.use(
      (response) => response.data.data || response.data
    );
  }

  async start() {
    // const trainer = await this.getMyTrainer();
    // console.log(trainer);
    while (1) {
      try {
        const [pocketmonToCatch] = await this.findPocketmon();
        // console.log(pocketmonToCatch);
        const pocketmonCaught = await this.catchPocketmon(pocketmonToCatch._id);

        // release? evolve? special evolve?
        // expBerry, evolveBerry, specialBerry
        // pokeindex include evolved pokemon

        // design pattern
        // strategy pattern - js

        console.log(pocketmonCaught);
        const res = await this.releasePocketmon(pocketmonCaught._id);

        console.log(
          `${new Date().toLocaleTimeString()} - caught ${
            pocketmonCaught.nickname
          } and released`
        );
      } catch (e) {
        console.log(e.response.data || e.response);
      }
    }
    // console.log(res);
    // debugger
  }

  async getMyTrainer() {
    // baseurl
    return this.request.get(`/trainers/${this.trainerId}`);
  }

  async findPocketmon() {
    return this.request.get('/pokemon');
  }

  async catchPocketmon(pocketmonId) {
    return this.request.post(
      `/trainers/${this.trainerId}/pokemon/${pocketmonId}`
    );
  }

  async releasePocketmon(pocketmonId) {
    return this.request.delete(
      `/trainers/${this.trainerId}/pokemon/${pocketmonId}`
    );
  }
}

// FP functional programing

module.exports = { Bot };
