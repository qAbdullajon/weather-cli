import https from "https";
import axios from "axios";
import { getKeyValue, TOKEN_DICTIONARY } from "./storage.service.js";

const getIcon = (icon) => {
  switch (icon.slice(0, -1)) {
    case "01": // Quyoshli
      return "☀️";
    case "02": // Yengil bulut
      return "⛅";
    case "03": // Bulutli
      return "☁️";
    case "04": // Qorong'i bulutlar
      return "🌥️";
    case "09": // Yomg'ir
      return "🌧️";
    case "10": // Quyosh + yomg'ir
      return "🌦️";
    case "11": // Momaqaldiroq
      return "⛈️";
    case "13": // Qor
      return "❄️";
    case "50": // Tuman
      return "🌫️";
    default: // Nomalum ikonka
      return "🌈";
  }
};

const getWeather = async (city) => {
  // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

  const token = process.env.TOKEN ?? (await getKeyValue(TOKEN_DICTIONARY.token));
  if (!token) {
    throw new Error("API doesn't exist, -t [API_KEY] for saving token");
  }

  const { data } = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
    params: {
      q: city,
      appid: token,
      lang: "en",
      units: "metric",
    },
  });
  // console.log(data);
  return data;
};

export { getWeather, getIcon };
