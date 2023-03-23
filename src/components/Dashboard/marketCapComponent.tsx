export interface IData {
  icon: string;
  text: string;
  value: string;
}
export interface IMarketCap {
  title: string;
  data: IData[];
}

const MarketCapComponent: React.FC<IMarketCap> = (props) => {
  return (
    <div className="rounded-3xl p-6 bg-white">
      <div className="flex justify-between">
        <div className="flex items-center">
          <img
            className="mr-2 h-6 w-6"
            src={`/${props.title}.png`}
            alt="Not found"
          ></img>
          <span className="font-bold text-xl">{props.title}</span>
        </div>
        <span className="text-gray-400">More &gt;</span>
      </div>
      <div className="py-4">
        {props.data.map((val, key) => {
          return (
            <div className="flex justify-between m-2" key={key}>
              <div className="flex items-center gap-3">
                <span>{key + 1}</span>
                {val.icon === "SHIB" ? (
                  <img
                    src="https://s2.coinmarketcap.com/static/img/coins/64x64/5994.png"
                    className="h-5 w-5"
                    alt="SHIB"
                  ></img>
                ) : (
                  <img
                    className="h-4 w-4"
                    src="https://s2.coinmarketcap.com/static/img/coins/64x64/24029.png"
                    alt="TIMESERIES"
                  ></img>
                )}
                <span className="font-bold">{val.text}</span>
                <span className="text-gray-400">{val.icon}</span>
              </div>
              <span>{val.value}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MarketCapComponent;
