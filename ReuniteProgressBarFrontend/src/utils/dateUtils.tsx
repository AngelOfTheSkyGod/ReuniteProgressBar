import { CountryData } from "../types/datetypes";
import { StatsData } from "../types/statstypes";
export const getUTCDate = (offset: number): Date => {
  let date2 = new Date();
  let date: Date = new Date(date2.getTime() + offset);

  return new Date(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds(),
    date.getUTCMilliseconds()
  );
};
export const calculateProgress = (): number => {
  let date: Date = getUTCDate(-18000000);
  let daysElapsed = 1;
  let totalDays = 51;
  if (date.getMonth() == 7) {
    daysElapsed += date.getDate() + 1;
  } else if (date.getMonth() == 8) {
    daysElapsed += 32 + date.getDate();
  }
  return Math.ceil((daysElapsed / totalDays) * 100);
};

const formatMinsOrSeconds = (time: number): string => {
  return time >= 10 ? time.toString() : "0" + time.toString();
};

export const buildStatsFromDate = (utcDate: Date): StatsData => {
  let futureDate = new Date(2023, 8, 20, 0, 0, 0, 0);
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
  const millisecondsPerDay = 24 * 60 * 60 * 1000;
  const millisecondsPerWeek = millisecondsPerDay * 7;
  const millisecondsPerMonth = millisecondsPerDay * 30; // Average days in a month

  const months = Math.floor(differenceMilliseconds / millisecondsPerMonth);
  differenceMilliseconds %= millisecondsPerMonth;

  const weeks = Math.floor(differenceMilliseconds / millisecondsPerWeek);
  differenceMilliseconds %= millisecondsPerWeek;

  const days = Math.floor(differenceMilliseconds / millisecondsPerDay);
  return {
    weeksLeft: weeks,
    monthsLeft: months,
    daysLeft: days,
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
