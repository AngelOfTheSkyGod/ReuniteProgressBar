import { StatsData } from "../types/statstypes";

export const StatsTiles = ({ statsData }: { statsData: StatsData }) => {
  return (
    <div className="country-information-container">
      <h1 className="country-text">
        Months Left: {statsData.monthsLeft}, Weeks Left: {statsData.weeksLeft},
        Days Left: {statsData.daysLeft}
      </h1>
    </div>
  );
};
