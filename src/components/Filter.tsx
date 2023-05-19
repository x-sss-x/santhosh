import React, { useState } from "react";
import { useQuery } from "react-query";
import Image from "next/image";
import filterIcon from "../../public/Images/Filter/filter.png";

const FilterButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {!isOpen && (
        <button
          className="flex flex-col items-center justify-center bg-zinc-300 w-32 h-32 xs:w-20 xs:h-20 rounded p-4"
          onClick={handleClick}
        >
          <Image src={filterIcon} alt="Filter" width={40} height={40} />
          <p className="text-neutral-400 mt-2">Filters</p>
        </button>
      )}
      {isOpen && (
        <div className="absolute mt-2 p-2 rounded ">
          <button className="w-96 xs:w-64 py-2 mb-2 rounded block border border-blue-500 bg-stone-200 text-neutral-400 hover:bg-gray-100">
            All types of services
          </button>
          <button className="w-96 xs:w-64 block  py-2 mb-2 rounded border border-blue-500 bg-stone-200 text-neutral-400 hover:bg-gray-100">
            Most recently used services
          </button>
          <button className="w-96 xs:w-64 block py-2 mb-2 rounded border border-blue-500 bg-stone-200 text-neutral-400 hover:bg-gray-100">
            Based on feedbacks
          </button>
        </div>
      )}
    </div>
  );
};

export default FilterButton;
