import { CountryData } from "../types/datetypes";

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

export const buildCountryDateFromDate = (
  date: Date,
  country: string
): CountryData => {
  let formatMinutes: string =
    date.getMinutes() > 10
      ? date.getMinutes().toString()
      : "0" + date.getMinutes().toString();
  let formatHours: string =
    ((date.getHours() + 24) % 12 || 12) > 10
      ? ((date.getHours() + 24) % 12 || 12).toString()
      : "0" + ((date.getHours() + 24) % 12 || 12).toString();
  let countryData: CountryData = {
    month: date.getMonth() + 1,
    days: date.getDate(),
    hours: (date.getHours() + 24) % 12 || 12,
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
    countryName: country,
    year: date.getFullYear(),
    formatted: `(${
      date.getMonth() + 1
    }/${date.getDate()}/${date.getFullYear()}) : ${formatHours} : ${formatMinutes} : ${date.getSeconds()}`,
    timestamp: date.getMilliseconds(),
  };
  console.log(`data: ${JSON.stringify(countryData)}`);
  return countryData;
};
