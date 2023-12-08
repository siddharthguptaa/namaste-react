import { LOGO_URL } from "../../Utils/constant";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../Utils/CustomHook/useOnlineStatus";
import Grocery from "../Grocery/Grocery";
import UserContext from "../../Utils/Context/UserContext";

export const Header = () => {
  // let btnName = "Login";
  const [btnName, setbtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);
  return (
    <div className="flex justify-between shadow-lg sm:bg-yellow-50 lg:bg-blue-100">
      <div className="logo-container">
        <img className="w-24" src={LOGO_URL} alt="Logo" />
      </div>

      <div className="flex items-center">
        <ul className="flex p-4 m-5">
          <li className="px-4">Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">{loggedInUser}</li>
          <button
            className="login-btn"
            onClick={() =>
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login")
            }
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
