import StatusInfo from "../../components/Dashboard/statusInfo";
import { PortfolioIcon, WatchlistIcon, WalletIcon } from "../../assets/icons";

const StatusBar: React.FC = () => {
  return (
    <div className="flex justify-between items-center py-2 px-10 border-b-2 flex-wrap h-16">
      <div className="flex flex-wrap">
        <StatusInfo
          className="font-bold mr-5"
          text="Crypto Listed:"
          value="3"
        />
        <StatusInfo
          className="font-bold mr-5"
          text="Total Market Cap:"
          value="$1,000,000,000,000"
        />
        <StatusInfo
          className="font-bold mr-5"
          text="24hr Vol:"
          value="$1,000,000,000"
        />
        <StatusInfo
          className="font-bold mr-5"
          text="Dominance"
          value="BTC: 46% ETH 18.6%"
        />
        <StatusInfo
          className="font-bold mr-5"
          text="ETH"
          value="BTC: 46% ETH 18.6%"
        />
      </div>
      <div className="flex items-center">
        <span className="cursor-pointer font-bold mr-4 flex">
          <WatchlistIcon className="mr-1" width={24} height={24} />
          Whachlist
        </span>
        <span className="cursor-pointer font-bold mr-4 flex items-center">
          <PortfolioIcon className="mr-1" width={24} height={24} />
          Portfolio
        </span>
        <button className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 inline-flex items-center rounded-full">
          <WalletIcon className="mr-2" width={24} height={24} />
          <span>Connect Wallet</span>
        </button>
      </div>
    </div>
  );
};

export default StatusBar;
