import { useEffect, useState } from "react";
import { WeatherCard } from "../components/WeatherCard";
import { placeA, placeB } from "../data/DataFields";
import { americanPath, japanPath } from "../data/WeatherPaths";
import { WeatherData } from "../types/statstypes";
import { getWeatherData, initializeWeatherObject } from "../utils/weatherUtils";

export const WeatherInfo = () => {
  const [japaneseWeatherData, setJapaneseWeatherData] = useState<WeatherData>(
    initializeWeatherObject()
  );
  const [americanWeatherData, setAmericanWeatherData] = useState<WeatherData>(
    initializeWeatherObject()
  );

  useEffect(() => {
    getWeatherData(japanPath, setJapaneseWeatherData);
    getWeatherData(americanPath, setAmericanWeatherData);
  }, []);
  return (
    <div className="weather-info-container">
      <WeatherCard countryName={placeA} weatherData={americanWeatherData} />
      <WeatherCard countryName={placeB} weatherData={japaneseWeatherData} />
    </div>
  );
};
