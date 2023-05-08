import React from 'react';
import { SearchIcon } from '@heroicons/react/outline';

const SearchBar = () => {
  return (
    <div className="flex mx-auto items-center rounded-full border border-black px-4 py-2 bg-gray-200 w-64 items-center" >
      <div className="flex items-center">
        <SearchIcon className="h-5 w-5 text-gray-400" />
        <input
          className="bg-gray-200 rounded-full w-full py-2 px-4 outline-none ml-2"
          type="text"
          placeholder="Search..."
        />
      </div>
    </div>
  );
}

export default SearchBar;
