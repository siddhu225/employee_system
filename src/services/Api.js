import axios from "axios";

export default () => {
  return axios.create({
    baseURL: `https://3cf9ed58.ngrok.io`
    //baseURL: `http://localhost:8081`
  });
};
