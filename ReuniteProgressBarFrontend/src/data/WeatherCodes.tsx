interface WeatherCodeData{
    weatherText: string, 
    weatherImage: string
}

let getWeatherCodeDataObject = (text: string, image: string) :WeatherCodeData {
    return {
        weatherText: text, 
        weatherImage: image 
    }
}

let weatherCodes = new Map<number, WeatherCodeData>();
weatherCodes.set(0, getWeatherCodeDataObject("Clear Skies", "BsFillSunFill"));
weatherCodes.set(1, getWeatherCodeDataObject("Partly Cloudy", "BsFillCloudSunFill"));
weatherCodes.set(2, getWeatherCodeDataObject("Continuous layer(s) of blowing snow", "BsFillCloudSnowFill"));
weatherCodes.set(3, getWeatherCodeDataObject("Sandstorm, duststorm, or blowing snow", "WiNightSnowWind"));
weatherCodes.set(4, getWeatherCodeDataObject("Fog, thick dust or haze", "GiFog"));
weatherCodes.set(5, getWeatherCodeDataObject("Drizzling", "FaCloudSunRain"));
weatherCodes.set(6, getWeatherCodeDataObject("Raining", "BsFillCloudRainFill"));
weatherCodes.set(7, getWeatherCodeDataObject("Snowing", "BsCloudSnow"));
weatherCodes.set(8, getWeatherCodeDataObject("Shower(s)","GiHeavyRain"));
weatherCodes.set(8, getWeatherCodeDataObject("Thunderstorm(s)", "BsFillCloudLightningRainFill"));


