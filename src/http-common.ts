import axios from "axios";

export default axios.create({
  baseURL: "https://retoolapi.dev/Oal4aL",
  headers: {
    "Content-type": "application/json"
  }
});