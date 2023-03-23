import MarketCapComponent from "../../components/Dashboard/marketCapComponent";

const data = [
  {
    title: "Trending",
    data: [
      { text: "Shiba Inu", icon: "SHIB", value: "-4.28" },
      { text: "Shiba Inu", icon: "SHIB", value: "-4.28" },
      { text: "Shiba Inu", icon: "SHIB", value: "-4.28" },
    ],
  },
  {
    title: "Biggest Gainer",
    data: [
      { text: "Timeseries AI", icon: "TIMESERIES", value: "$0.000251" },
      { text: "Timeseries AI", icon: "TIMESERIES", value: "$0.000251" },
      { text: "Timeseries AI", icon: "TIMESERIES", value: "$0.000251" },
    ],
  },
  {
    title: "Recently Updated Socials",
    data: [
      { text: "Timeseries AI", icon: "TIMESERIES", value: "$0.000251" },
      { text: "shiba", icon: "SHIB", value: "$0.000251" },
      { text: "Timeseries AI", icon: "TIMESERIES", value: "$0.000251" },
    ],
  },
];

const Dashboard: React.FC = () => {
  return (
    <div className="bg-gray-200 px-8 py-8">
      <div className="mb-8">
        <p className="text-black font-bold text-3xl">
          Today's Cryptocurrency Prices by Market Cap
        </p>
        <p className="text-gray-500">
          The global market cap is{" "}
          <span className="text-green-500">$1.18T,</span>a
          <span className="text-green-500">+1.38%</span> increase over the last
          day. <span className="text-gray-400">Read More</span>
        </p>
      </div>
      <div className="flex flex-wrap gap-5">
        {data.map((val, key) => {
          return (
            <div className="flex-1" key={key}>
              <MarketCapComponent title={val.title} data={val.data} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
