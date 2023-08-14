import { CountryData } from "../types/datetypes";

const textTiles = (timeZones: any, prefix: string) => {
  return timeZones.map((countryData: CountryData) => {
    return (
      <div className="country-information-container">
        <h1 className="country-text">
          {prefix} {countryData.formatted}
        </h1>
      </div>
    );
  });
};
