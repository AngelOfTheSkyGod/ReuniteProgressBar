import { Icon } from "@iconify/react";
import { ReactElement } from "react";
import { weatherCodes } from "../data/WeatherCodes";
import { WeatherData } from "../types/statstypes";

function returnCorrectDiv(code: number): ReactElement<any, any> {
  //   console.log("Returning:" + myMap.get(type)! + "id: " + id);
  return (
    <Icon
      className="chess-piece"
      icon={weatherCodes.get(code)?.weatherImage!}
      color={weatherCodes.get(code)?.color!}
      width={"3rem"}
    />
  );
}
const celciusToFarenheit = (temperature: number): number => {
  return temperature * (9 / 5) + 32;
};

export const WeatherCard = ({
  countryName,
  weatherData,
}: {
  countryName: string;
  weatherData: WeatherData;
}) => {
  let celsiusTemperature = weatherData.current_weather.temperature;
  let farenheitTemperature = celciusToFarenheit(celsiusTemperature);
  let weather = weatherCodes.get(
    weatherData.current_weather.weathercode
  )?.weatherText;
  console.log(
    `country: ${countryName} code: ${
      weatherData.current_weather.weathercode
    } is: ${
      weatherCodes.get(weatherData.current_weather.weathercode)?.weatherText
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
