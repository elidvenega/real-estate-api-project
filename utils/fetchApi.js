import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const {data} = await axios.get(url, {
    headers: {
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      "X-RapidAPI-Key": "5dd5c9e926msh8d36a57a451b281p1357a6jsn57b780d8cbbe",
    },
  });
  return data;
};
