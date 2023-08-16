export interface StatsData {
  weeksLeft: number;
  daysLeft: number;
  monthsLeft: number;
}
export interface HourlyWeatherData {
  time: string[];
  temperature_2m: number[];
}
export interface CurrentWeatherData {
  weather_code: number;
  temperature: number;
}
export interface WeatherData {
  current_weather: CurrentWeatherData;
  hourly: HourlyWeatherData;
}
