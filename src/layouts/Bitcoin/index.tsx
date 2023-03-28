import { NavLink } from "react-router-dom";

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
    </div>
  );
};

export default BitcoinPage;
