import { useState } from "react";

const typeData = [
  "All",
  "All",
  "All",
  "Algorand Ecosystem",
  "Algorand Ecosystem",
  "Algorand Ecosystem",
  "Pow",
  "Pow",
  "Pow",
  "Pos",
  "Pos",
  "Pos",
  "Ethereum Ecosystem",
  "Ethereum Ecosystem",
  "Ethereum Ecosystem",
  "Layer 1",
  "Layer 1",
  "Layer 1",
  "Layer 2",
  "Layer 2",
  "Layer 2",
];

const DropDownAllTypes: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<number>(0);

  return (
    <div className="relative inline-block group">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white p-4 rounded-full font-bold flex items-center border hover:border-2 hover:border-yellow-400"
      >
        All Types
        <img className="w-5 mt-1" src="arrow-down.svg" alt="arrow-down"></img>
      </button>
      <div
        className={`mt-2 px-8 py-4 absolute z-10 -left-[535px] bg-white rounded-2xl shadow-lg transform transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
        }`}
      >
        <div className="w-56">
          <div className="flex items-center p-1 px-4 bg-gray-300 placeholder-gray-400 border-none appearance-none rounded-xl my-4">
            <input
              placeholder="Search..."
              required={true}
              className="m-1 w-40 text-black focus:outline-none focus:placeholder-transparent focus:ring-0 bg-gray-300"
            />{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
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
        <div className="grid grid-cols-3 gap-2 text-sm">
          {typeData.map((val, key) => {
            return (
              <div className="p-2 cursor-pointer" key={key}>
                <span
                  onClick={() => setSelected(key)}
                  className={`${
                    selected === key ? "bg-yellow-300" : ""
                  } rounded-lg px-4 py-2 font-bold`}
                >
                  {val}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DropDownAllTypes;
