import axios from "axios";

export default () => {
  return axios.create({
    baseURL: `https://db422bb1.ngrok.io`
  });
};
