interface WeatherCodeData {
  weatherText: string;
  weatherImage: string;
  color: string;
}

const getWeatherCodeDataObject = (
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

const getWeatherCodeKey = (code: number): number[] => {
  let val: number[] = [0];
  weatherCodes.forEach((value: WeatherCodeData, key: number[]) => {
    if (key.includes(code)) {
      val = key;
      console.log(value);
    }
  });
  return val;
};

const weatherCodes = new Map<number[], WeatherCodeData>();
weatherCodes.set(
  [0],
  getWeatherCodeDataObject(
    "Clear Skies",
    "line-md:sunny-outline-loop",
    "orange"
  )
);
weatherCodes.set(
  [1, 2, 3],
  getWeatherCodeDataObject("Partly Cloudy", "solar:clouds-bold", "gray")
);
weatherCodes.set(
  [85, 86],
  getWeatherCodeDataObject(
    "Continuous layer(s) of blowing snow",
    "material-symbols:rainy-snow-sharp",
    "white"
  )
);
weatherCodes.set(
  [77],
  getWeatherCodeDataObject(
    "Sandstorm, duststorm, or blowing snow",
    "material-symbols:rainy-snow-sharp",
    "gray"
  )
);
weatherCodes.set(
  [45, 48],
  getWeatherCodeDataObject(
    "Fog, thick dust or haze",
    "emojione-monotone:fog",
    "gray"
  )
);
weatherCodes.set(
  [56, 57],
  getWeatherCodeDataObject("Drizzling", "carbon:rain-drizzle", "blue")
);
weatherCodes.set(
  [80, 81, 82],
  getWeatherCodeDataObject("Raining", "bi:cloud-rain-fill", "blue")
);
weatherCodes.set(
  [71, 73, 75],
  getWeatherCodeDataObject("Snowing", "bi:cloud-snow-fill", "gray")
);
weatherCodes.set(
  [61, 63, 65],
  getWeatherCodeDataObject("Shower(s)", "solar:cloud-rain-bold", "gray")
);
weatherCodes.set(
  [95],
  getWeatherCodeDataObject(
    "Thunderstorm(s)",
    "carbon:thunderstorm-severe",
    "gray"
  )
);

export { getWeatherCodeKey, weatherCodes };
