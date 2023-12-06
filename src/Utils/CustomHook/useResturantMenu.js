import { useEffect, useState } from "react";
import { MENU_API } from "../constant";

const useResturantMenu = (resId) => {
    //fetch data
    const [resInfo,setResInfo] = useState(null);
    useEffect(() =>{
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);
        //console.log(MENU_API + resId);
        const json = await data?.json();
        //console.log(json.data);
        setResInfo(json.data);
      };

    return resInfo;
}

export default useResturantMenu;