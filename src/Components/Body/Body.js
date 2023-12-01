import ResturantCard from "../Common/ResturantCard";
import { proplist } from "../../Utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "../Shimmer/Shimmer";

const Body = () => {
  // const [Data, setData] = useState(proplist); //This is array destructing in js

  const arr = useState([]);

  const Data = arr[0];
  const setData = arr[1];

  const [filterData,setFilterData]=useState("")

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://reqres.in/api/users?delay=3");
    const json = await data?.json();
    setData(json.data);
    setFilterData(json.data);
  };

  //This is conditional Rendering.
  // if (Data.length === 0) {
  //   return <Shimmer></Shimmer>;
  // }

  return Data.length === 0 ? (
    <Shimmer></Shimmer>
  ) : (
    <div className="body">
      <div className="search">Search</div>
      <div className="filter">
        <div className="search">
          <input
            type="text"
            placeholder="Enter name to search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button
            onClick={() => {
              setFilterData(Data.filter((d) => d.first_name.toLowerCase().includes(searchText.toLowerCase())));
            }}
          >
            Search
          </button>
        </div>
        <button
          className="btn-filter"
          onClick={() => setFilterData(Data.filter((x) => x.id > 4))}
        >
          Top Rated Resturants
        </button>
      </div>
      <div className="res-container">
        {filterData.map((resturant, index) => (
          <ResturantCard key={resturant.id} props={resturant}></ResturantCard>
        ))}
      </div>
    </div>
  );
};

export default Body;
