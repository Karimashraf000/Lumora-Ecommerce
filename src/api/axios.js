import axios from "axios";

//create an instance from axios to use it across the project

export default axios.create({
  baseURL: "https://dummyjson.com",
});