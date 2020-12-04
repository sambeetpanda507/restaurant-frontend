import axios from "axios";

const instance = axios.create({
  baseURL: "https://rural-marvelous-safflower.glitch.me",
});

export default instance;
