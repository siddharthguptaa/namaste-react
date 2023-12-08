import { useState } from "react";
import ItemList from "./ItemList";

const ResturantCategory = ({ data, showItems,setShowIndex }) => {

  return (
    <div className="text-center">
      <div className="w-6/12 my-4 bg-gray-50 shadow-lg mx-auto p-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={() => {
           setShowIndex();
          }}
        >
          <span className="font-bold text-xl">
            {data.first_name} {data.last_name} (4)
          </span>
          <span>{"🔻"}</span>
        </div>
        {showItems ? <ItemList items={data} /> : ""}
      </div>
    </div>
  );
};

export default ResturantCategory;
