import React from "react";

function Search() {
  return (
    <>
      <div className="flex items-center justify-center ">
        <input
          type="text"
          placeholder="Search Products"
          className="border-1 border-gray-400 py-2 px-4 rounded-l-sm w-full focus:outline-none focus:border-green-500"
        />
        <button className="bg-[#ff5252] cursor-pointer text-white py-[9px] px-4 rounded-r-sm">
          Search
        </button>
      </div>
    </>
  );
}

export default Search;
