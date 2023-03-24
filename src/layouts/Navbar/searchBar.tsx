const SearchBar: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-between items-center py-2 px-8 border-b-2 h-16">
      <div className="flex flex-wrap">
        <div className="flex items-center">
          <img className="w-8 h-8 mr-2" src="/trending.png" alt="not found" />
          <span className="font-bold text-2xl mr-10 hover:text-blue-500 hover:cursor-pointer">
            El Capition
          </span>
        </div>
        <span className="font-bold text-2xl mr-10 hover:text-blue-500 hover:cursor-pointer">
          Cryptocurrencies
        </span>
        <span className="font-bold text-2xl mr-10 hover:text-blue-500 hover:cursor-pointer">
          FAQ
        </span>
        <span className="font-bold text-2xl mr-10 hover:text-blue-500 hover:cursor-pointer">
          Community
        </span>
      </div>
      <div className="flex items-center p-1 px-4 bg-gray-300 placeholder-gray-400 border-none appearance-none rounded-full">
        <input
          placeholder="Search..."
          required={true}
          className="m-1 text-black focus:outline-none focus:placeholder-transparent focus:ring-0 bg-gray-300"
        />{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  );
};

export default SearchBar;
