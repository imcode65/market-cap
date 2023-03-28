import { useState } from "react";
import { CapitionIcon, MenuIcon, CloseIcon } from "../../assets/icons";

const SearchBar: React.FC = () => {
  const [menuStatus, setMenuStatus] = useState<boolean>(false);

  return (
    <div className="flex items-center justify-between py-2 px-10 border-b-2 h-16">
      <div className="hidden md:block">
        <div className="flex text-2xl items-center">
          <CapitionIcon className="mr-2 w-10 h-10" />
          <span className="font-bold mr-10 hover:text-blue-500 hover:cursor-pointer">
            El Capition
          </span>
          <span className="font-bold mr-10 hover:text-blue-500 hover:cursor-pointer">
            Cryptocurrencies
          </span>
          <span className="font-bold mr-10 hover:text-blue-500 hover:cursor-pointer">
            FAQ
          </span>
          <span className="font-bold mr-10 hover:text-blue-500 hover:cursor-pointer">
            Community
          </span>
        </div>
      </div>
      <div className="hidden xl:block">
        <div className="flex items-center p-1 px-4 bg-gray-300 placeholder-gray-400 border-none rounded-full">
          <input
            placeholder="Search..."
            required={true}
            className="m-1 text-black focus:outline-none focus:placeholder-transparent focus:ring-0 bg-gray-300"
          />{" "}
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
      <div className="block md:hidden">
        <button className="p-2" onClick={() => setMenuStatus(!menuStatus)}>
          <MenuIcon className="font-black" width={30} height={30} />
        </button>
      </div>
      {/* responsive sidebar start */}
      <div
        className={`transform w-44 z-40 h-full absolute px-2 bg-white shadow flex-col justify-between sm:hidden transition duration-150 ease-in-out ${
          menuStatus ? "-translate-x-44" : ""
        }`}
      >
        <button className="p-2" onClick={() => setMenuStatus(!menuStatus)}>
          <CloseIcon className="font-black" width={30} height={30} />
        </button>
        <div>
          <span className="font-bold mr-10 hover:text-blue-500 hover:cursor-pointer">
            El Capition
          </span>
        </div>
        <div>
          <span className="font-bold mr-10 hover:text-blue-500 hover:cursor-pointer">
            Cryptocurrencies
          </span>
        </div>
        <div>
          <span className="font-bold mr-10 hover:text-blue-500 hover:cursor-pointer">
            FAQ
          </span>
        </div>
        <div>
          <span className="font-bold mr-10 hover:text-blue-500 hover:cursor-pointer">
            Community
          </span>
        </div>
      </div>
      {/* responsive sidebar end */}
    </div>
  );
};

export default SearchBar;
