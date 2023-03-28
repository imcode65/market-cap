import { NavLink } from "react-router-dom";
import GrayButton from "../../components/coin/GrayButton";
import BitcoinSVG from "../../assets/svg/bitcoin.svg";
import { WatchlistIcon } from "../../assets/icons";

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
      <div className="grid grid-cols-3">
        <div className="col-1">
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
        <div className="col-2">2</div>
      </div>
    </div>
  );
};

export default BitcoinPage;
