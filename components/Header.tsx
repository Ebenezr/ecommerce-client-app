import React from "react";

const Header = () => {
  return (
    <header className="p-4 w-full h-24 col-end-2 flex items-center gap-3 justify-between ">
      <div className="flex gap-4 items-center">
        <h1 className="text-blue-500 font-bold text-lg">Esoko</h1>
        <span>
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search"
            className="bg-gray-300 rounded-full border-0"
          />
        </span>
      </div>
      <div>
        <div className="h-12 w-12 bg-blue-500 rounded-full"></div>
      </div>
    </header>
  );
};

export default Header;
