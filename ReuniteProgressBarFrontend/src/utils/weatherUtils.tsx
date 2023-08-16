import axios from "axios";

import {
  CurrentWeatherData,
  HourlyWeatherData,
  WeatherData,
} from "../types/statstypes";

export const initializeWeatherObject = (): WeatherData => {
  let hourlyWeatherData: HourlyWeatherData = {
    time: [],
    temperature_2m: [],
  };
  let currentWeatherData: CurrentWeatherData = {
    weather_code: 0,
    temperature: 0,
  };
  return {
    current_weather: currentWeatherData,
    hourly: hourlyWeatherData,
  };
};

export const getWeatherData = async (
  path: string,
  setWeatherState: React.Dispatch<React.SetStateAction<WeatherData>>
) => {
  let weatherObject = initializeWeatherObject();
  await axios
    .get(
      "https://api.open-meteo.com/v1/forecast?latitude=35.4333&longitude=139.65&hourly=temperature_2m,apparent_temperature,weathercode&daily=weathercode&current_weather=true&timezone=America%2FChicago"
    )
    .then((response) => {
      weatherObject.current_weather = response.data.current_weather;
      weatherObject.hourly = response.data.hourly;
    });
};
