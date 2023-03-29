import { NavLink } from "react-router-dom";
import GrayButton from "../../components/coin/GrayButton";
import BitcoinSVG from "../../assets/svg/bitcoin.svg";
import { WatchlistIcon, ArrowUpIcon } from "../../assets/icons";

const BitcoinPage: React.FC = () => {
  return (
    <div className="bg-gray-200 px-10 py-4 min-h-screen static">
      <div className="flex">
        <NavLink
          to="/"
          type="button"
          className="text-gray-400 hover:text-gray-600 border font-medium text-sm py-2 inline-flex mr-2"
        >
          Cryptocurrencies &gt;
        </NavLink>
        <NavLink
          to="/"
          type="button"
          className="text-gray-400 hover:text-gray-600 border font-medium text-sm py-2 inline-flex mr-2"
        >
          Coins &gt;
        </NavLink>
        <NavLink
          to="/"
          type="button"
          className="text-black hover:text-gray-600 border font-medium text-sm py-2 inline-flex mr-2"
        >
          Bitcoin
        </NavLink>
      </div>
      <div className="grid grid-cols-3 gap-x-8">
        <div className="col-span-1">
          <div className="flex items-center my-4">
            <img className="w-10 mr-2" src={BitcoinSVG} alt="bitcoin" />
            <span className="font-bold text-lg mr-2">Bitcoin</span>
            <GrayButton text="BTC" />
            <WatchlistIcon className="ml-2" width={18} height={18} />
          </div>
          <div className="flex flex-wrap gap-4">
            <GrayButton text="Rank #1" active={true} />
            <GrayButton text="Coin" />
            <GrayButton text="Been Favorited +4.2 Million Times" />
            <GrayButton text="Website" />
            <GrayButton text="Explorers" />
            <GrayButton text="White Paper" />
            <GrayButton text="Source Code" />
          </div>
          <p className="my-2">Tages</p>
          <div className="flex gap-4 flex-wrap">
            <GrayButton text="PoW" />
            <GrayButton text="SHA-256" />
            <GrayButton text="Store Of Value" />
            <GrayButton text="Mineable" />
            <span className="text-blue-500 hover:cursor-pointer">View All</span>
          </div>
        </div>
        <div className="col-span-2">
          <div className="font-bold flex items-center mb-6">
            <span className="text-[70px] mr-2">$28,013.46</span>
            <span className="px-2 py-3 text-white bg-green-500 rounded-2xl flex items-center text-2xl">
              <ArrowUpIcon
                className="mt-2"
                color="white"
                width={15}
                height={15}
              />
              0.02%
            </span>
          </div>
          <div className="grid grid-cols-4">
            <div className="flex-col">
              <span className="text-[#7D7D7D]">Market Cap</span>
              <br />
              <span className="font-bold">$535,170,972,845</span>
              <span className="flex items-center text-green-500">
                <ArrowUpIcon
                  className="mt-2 mr-1"
                  color="green"
                  width={15}
                  height={15}
                />
                0.02%
              </span>
            </div>
            <div className="flex-col">
              <span className="text-[#7D7D7D]">Fully Diluted Market Cap</span>
              <br />
              <span className="font-bold">$535,170,972,845</span>
              <span className="flex items-center text-green-500">
                <ArrowUpIcon
                  className="mt-2 mr-1"
                  color="green"
                  width={15}
                  height={15}
                />
                0.02%
              </span>
            </div>
            <div className="flex-col">
              <span className="text-[#7D7D7D]">Volume</span>
              <br />
              <span className="font-bold">$25,170,972,845</span>
              <span className="flex items-center text-green-500">
                <ArrowUpIcon
                  className="mt-2 mr-1"
                  color="green"
                  width={15}
                  height={15}
                />
                0.02%
              </span>
            </div>
            <div className="flex-col">
              <span className="text-[#7D7D7D]">Circulating Supply</span>
              <br />
              <span className="font-bold">19,327,200 BTC</span>
              <span className="flex items-center text-green-500">
                <div className="w-full bg-gray-400 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-gray-700 h-2.5 rounded-full"
                    style={{ width: "60%" }}
                  ></div>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BitcoinPage;
