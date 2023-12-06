import { useEffect, useState } from "react";
import Shimmer from "../Shimmer/Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../../Utils/constant";
import useResturantMenu from "../../Utils/CustomHook/useResturantMenu";

const ResturantMenu = () => {

  const {resId} = useParams();
  
  const menu = useResturantMenu(resId);
console.log(menu);


  if (menu === null) return <Shimmer></Shimmer>;

  return (
    <div>
      <h1 className="text-center">Resturant Name</h1>
      <h2>Menu</h2>
      <ul>
        {/* {menu.map((item, index) => (
          <li key={item.id}>
            {item.first_name} {item.last_name}
          </li>
        ))} */}
        <li>{menu.first_name} {menu.last_name}</li>
      </ul>
    </div>
  );
};

export default ResturantMenu;
