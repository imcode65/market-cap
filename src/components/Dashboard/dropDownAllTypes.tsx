import { useState } from "react";

const DropDownAllTypes: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block group">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-200 py-2 px-4 rounded-md"
      >
        Dropdown
      </button>
      <div
        className={`absolute z-10 bg-white py-2 rounded-md shadow-lg transform transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
        }`}
      >
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
    </div>
  );
};

export default DropDownAllTypes;
