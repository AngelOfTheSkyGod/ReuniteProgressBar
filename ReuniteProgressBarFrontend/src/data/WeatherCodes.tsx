interface WeatherCodeData {
  weatherText: string;
  weatherImage: string;
  color: string;
}

let getWeatherCodeDataObject = (
  text: string,
  image: string,
  color: string
): WeatherCodeData => {
  return {
    weatherText: text,
    weatherImage: image,
    color: color,
  };
};

let weatherCodes = new Map<number, WeatherCodeData>();
weatherCodes.set(
  0,
  getWeatherCodeDataObject(
    "Clear Skies",
    "line-md:sunny-outline-loop",
    "orange"
  )
);
weatherCodes.set(
  1,
  getWeatherCodeDataObject("Partly Cloudy", "bi:cloud-rain-fill", "blue")
);
weatherCodes.set(
  2,
  getWeatherCodeDataObject(
    "Continuous layer(s) of blowing snow",
    "material-symbols:rainy-snow-sharp",
    "white"
  )
);
weatherCodes.set(
  3,
  getWeatherCodeDataObject(
    "Sandstorm, duststorm, or blowing snow",
    "material-symbols:rainy-snow-sharp",
    "gray"
  )
);
weatherCodes.set(
  4,
  getWeatherCodeDataObject(
    "Fog, thick dust or haze",
    "emojione-monotone:fog",
    "gray"
  )
);
weatherCodes.set(
  5,
  getWeatherCodeDataObject("Drizzling", "carbon:rain-drizzle", "blue")
);
weatherCodes.set(
  6,
  getWeatherCodeDataObject("Raining", "bi:cloud-rain-fill", "blue")
);
weatherCodes.set(
  7,
  getWeatherCodeDataObject("Snowing", "bi:cloud-snow-fill", "gray")
);
weatherCodes.set(
  8,
  getWeatherCodeDataObject("Shower(s)", "solar:cloud-rain-bold", "gray")
);
weatherCodes.set(
  8,
  getWeatherCodeDataObject(
    "Thunderstorm(s)",
    "carbon:thunderstorm-severe",
    "gray"
  )
);

export { weatherCodes };
