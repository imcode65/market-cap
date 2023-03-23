import StatusInfo from "../../components/Dashboard/statusInfo";

const StatusBar: React.FC = () => {
  return (
    <div className="flex justify-between items-center py-2 px-8 border-b-2">
      <div className="flex items-center">
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
        <span className="cursor-pointer font-bold mr-4">Whachlist</span>
        <span className="cursor-pointer font-bold mr-4">Portfolio</span>
        <button className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 inline-flex items-center rounded-full">
          <svg
            className="fill-current w-5 h-5 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
          </svg>
          <span>Connect Wallet</span>
        </button>
      </div>
    </div>
  );
};

export default StatusBar;
