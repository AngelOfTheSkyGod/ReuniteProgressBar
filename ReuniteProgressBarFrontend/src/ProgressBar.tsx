import { useEffect, useState } from "react";
import { TextTiles } from "./components/TextTiles";
import { CountryData } from "./types/datetypes";
import { buildCountryDateFromDate, calculateProgress } from "./utils/dateUtils";
export const ProgressBar = () => {
  let date: Date = new Date();
  const [currentDateMillis, setCurrentDateMillis] = useState<number>(
    date.getDay()
  );
  let baseObj: CountryData = {
    formatted: "",
    countryName: "",
    timestamp: 0,
    year: 0,
    month: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  const [americanData, setAmericanData] = useState<CountryData>(baseObj);
  const [japaneseData, setJapaneseData] = useState<CountryData>(baseObj);
  let unmounted = false;
  const calculateTimes = () => {
    let date: Date = new Date();

    let utc_now = new Date(
      date.getUTCFullYear(),
      date.getUTCMonth(),
      date.getUTCDate(),
      date.getUTCHours(),
      date.getUTCMinutes(),
      date.getUTCSeconds(),
      date.getUTCMilliseconds()
    );

    console.log(` date: ${date.toString()} utc milliseconds: ${Date.now()}`);
    let japanDate: Date = new Date(utc_now.getTime() + 32400000);
    let chicagoDate: Date = new Date(utc_now.getTime() - 18000000);
    setAmericanData(buildCountryDateFromDate(chicagoDate, "Chicago, Illinois"));
    setJapaneseData(buildCountryDateFromDate(japanDate, "Yokohama, Japan"));
  };

  const startReload = () => {
    let progress = calculateProgress();
    calculateTimes();
    setCurrentDateMillis(progress);
  };
  useEffect(() => {
    const id = setInterval(async () => {
      if (unmounted) {
        clearInterval(id);
      }
      startReload();
    }, 1000);
    return () => {
      unmounted = true;
    };
  }, [currentDateMillis]);

  return (
    <div className="progress-bar-container">
      <TextTiles timeZones={[americanData, japaneseData]} prefix={"Time in"} />
      <h1 className="current-progress-text">
        Current Progress: {`${currentDateMillis} %`}
      </h1>
      <div className="progress-bar-background">
        <div
          className="progress-bar-foreground"
          style={{ width: `${currentDateMillis}%` }}
        ></div>
      </div>
    </div>
  );
};
