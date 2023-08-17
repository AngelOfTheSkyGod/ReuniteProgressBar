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
    weathercode: 0,
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
  await axios.get(path).then((response) => {
    weatherObject.current_weather = response.data.current_weather;
    weatherObject.hourly = response.data.hourly;

    setWeatherState(weatherObject);
  });
};
