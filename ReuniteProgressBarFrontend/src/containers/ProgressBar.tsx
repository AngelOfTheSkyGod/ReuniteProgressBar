import { useEffect, useState } from "react";
import { StatsTiles } from "../components/StatsTiles";
import { TextTiles } from "../components/TextTiles";
import { placeA, placeB } from "../data/DataFields";
import { CountryData } from "../types/datetypes";
import { StatsData } from "../types/statstypes";
import {
  buildCountryDateFromDate,
  buildStatsFromDate,
  calculateProgress,
  getUTCDate,
} from "../utils/dateUtils";

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

  const [statsData, setStatsData] = useState<StatsData>({
    weeksLeft: 0,
    daysLeft: 0,
    monthsLeft: 0,
  });
  let unmounted = false;

  const calculateStats = () => {
    let date: Date = getUTCDate(0);
    let chicagoDate: Date = new Date(date.getTime() - 18000000);
    setStatsData(buildStatsFromDate(chicagoDate));
  };

  const calculateTimes = () => {
    let date: Date = getUTCDate(0);
    let japanDate: Date = new Date(date.getTime() + 32400000);
    let chicagoDate: Date = new Date(date.getTime() - 18000000);
    setAmericanData(buildCountryDateFromDate(chicagoDate, placeA));
    setJapaneseData(buildCountryDateFromDate(japanDate, placeB));
  };

  const startReload = () => {
    let progress = calculateProgress();
    calculateTimes();
    setCurrentDateMillis(progress);
    calculateStats();
  };
  useEffect(() => {
    startReload();
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
      <StatsTiles statsData={statsData} />
    </div>
  );
};
