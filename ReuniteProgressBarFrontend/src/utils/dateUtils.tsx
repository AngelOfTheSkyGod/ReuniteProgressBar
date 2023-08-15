import { CountryData } from "../types/datetypes";
import { StatsData } from "../types/statstypes";

export const calculateProgress = (): number => {
  let date: Date = new Date();
  let daysElapsed = 1;
  let totalDays = 51;
  console.log("month: " + date.getMonth());
  if (date.getMonth() == 7) {
    daysElapsed += date.getDate() + 1;
  } else if (date.getMonth() == 8) {
    daysElapsed += 32 + date.getDate();
  }
  console.log("days elapsed: " + daysElapsed);
  return Math.ceil((daysElapsed / totalDays) * 100);
};

const formatMinsOrSeconds = (time: number): string => {
  return time >= 10 ? time.toString() : "0" + time.toString();
};

export const buildStatsFromDate = (utcDate: Date): StatsData => {
  let futureDate = new Date(2023, 8, 20);
  let utcData = new Date(
    futureDate.getUTCFullYear(),
    futureDate.getUTCMonth(),
    futureDate.getUTCDate(),
    futureDate.getUTCHours(),
    futureDate.getUTCMinutes(),
    futureDate.getUTCSeconds(),
    futureDate.getUTCMilliseconds()
  );
  let chicagoDate: Date = new Date(utcDate.getTime() - 18000000);
  let differenceMilliseconds: number =
    utcData.getTime() - chicagoDate.getTime();
  const millisecondsInSecond = 1000;
  const secondsInMinute = 60;
  const minutesInHour = 60;
  const hoursInDay = 24;
  const daysInWeek = 7;
  const daysInMonth = 30;
  console.log("difference: " + differenceMilliseconds);
  const totalSeconds = differenceMilliseconds / millisecondsInSecond;
  const totalMinutes = totalSeconds / secondsInMinute;
  const totalHours = totalMinutes / minutesInHour;
  const totalDays = totalHours / hoursInDay;
  const totalWeeks = totalDays / daysInWeek;
  console.log("days left: " + totalDays);
  return {
    weeksLeft: Math.floor(totalWeeks),
    monthsLeft: Math.floor(totalDays / daysInMonth),
    daysLeft: Math.floor(totalDays % daysInMonth),
  };
};

const formattedDateAndTime = (date: Date, countryName: string): string => {
  let hours: number = (date.getHours() + 24) % 12 || 12;
  let formatMinutes: string = formatMinsOrSeconds(date.getMinutes());
  let formatSeconds: string = formatMinsOrSeconds(date.getSeconds());
  let formatHours: string =
    hours >= 10 ? hours.toString() : "0" + hours.toString();
  let timeSuffix: string = date.getHours() >= 12 ? "pm" : "am";
  return `(${countryName}: ${
    date.getMonth() + 1
  }/${date.getDate()}/${date.getFullYear()}) : ${formatHours} : ${formatMinutes} : ${formatSeconds} ${timeSuffix}`;
};

export const buildCountryDateFromDate = (
  date: Date,
  country: string
): CountryData => {
  let countryData: CountryData = {
    month: date.getMonth() + 1,
    days: date.getDate(),
    hours: (date.getHours() + 24) % 12 || 12,
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
    countryName: country,
    year: date.getFullYear(),
    formatted: formattedDateAndTime(date, country),
    timestamp: date.getMilliseconds(),
  };
  return countryData;
};
