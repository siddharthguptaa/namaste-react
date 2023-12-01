import ResturantCard from "../Common/ResturantCard";
import {proplist} from "../../Utils/mockData";
import { useState } from "react";

const Body = () => {
  // const [Data, setData] = useState(proplist); //This is array destructing in js

  const arr = useState(proplist);

  const Data = arr[0];
  const setData = arr[1]; 

  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="filter">
        <button className="btn-filter" onClick={() => setData(Data.filter(x=> x.rating>4))}>
          Top Rated Resturants
        </button>
      </div>
      <div className="res-container">
        {Data.map((resturant, index) => (
          <ResturantCard key={resturant.id} props={resturant}></ResturantCard>
        ))}
      </div>
    </div>
  );
};

export default Body;
