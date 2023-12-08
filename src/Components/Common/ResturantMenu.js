import { useEffect, useState } from "react";
import Shimmer from "../Shimmer/Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../../Utils/constant";
import useResturantMenu from "../../Utils/CustomHook/useResturantMenu";
import ResturantCategory from "./ResturantCategory";

const ResturantMenu = () => {
  const [showIndex, setShowIndex] = useState(0);

  const { resId } = useParams();

  const menu = useResturantMenu(resId);

  if (menu === null) return <Shimmer></Shimmer>;

  return (
    <div className="text-center">
      <h1 className="font-bold my-4 text-2xl">Resturant Name</h1>
      <p className="font-bold text-lg">
        {menu[0].first_name} {menu[0].last_name}
      </p>
      {menu.map((m, index) => (
        <ResturantCategory
          key={index}
          data={m}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        ></ResturantCategory>
      ))}
    </div>
  );
};

export default ResturantMenu;
