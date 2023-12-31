import { Icon } from "@iconify/react";
import { ReactElement } from "react";
import { getWeatherCodeKey, weatherCodes } from "../data/WeatherCodes";
import { WeatherData } from "../types/statstypes";

function returnCorrectDiv(code: number): ReactElement<any, any> {
  return (
    <Icon
      className="chess-piece"
      icon={weatherCodes.get(getWeatherCodeKey(code))?.weatherImage!}
      color={weatherCodes.get(getWeatherCodeKey(code))?.color!}
      width={"5rem"}
    />
  );
}
const celciusToFarenheit = (temperature: number): number => {
  return Math.ceil(Math.round((temperature * (9 / 5)+ 32) * 100) / 100);
};

export const WeatherCard = ({
  countryName,
  weatherData,
}: {
  countryName: string;
  weatherData: WeatherData;
}) => {
  let celsiusTemperature: number =
    Math.ceil(Math.round(weatherData.current_weather.temperature * 100) / 100);
  let farenheitTemperature: number = celciusToFarenheit(celsiusTemperature);
  let weather = weatherCodes.get(
    getWeatherCodeKey(weatherData.current_weather.weathercode)
  )?.weatherText;
  console.log(
    `country: ${countryName} code: ${
      weatherData.current_weather.weathercode
    } is: ${
      weatherCodes.get(
        getWeatherCodeKey(weatherData.current_weather.weathercode)
      )?.weatherText
    }
    Current Weather: ${JSON.stringify(weatherData.current_weather)}

    `
  );
  return (
    <div className="country-information-container">
      {returnCorrectDiv(weatherData.current_weather.weathercode)}
      <h1 className="weather-text">
        Temperature in {countryName} : {celsiusTemperature}(C),{" "}
        {farenheitTemperature}(F), Weather: {weather}
      </h1>
    </div>
  );
};
