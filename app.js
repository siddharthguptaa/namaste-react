import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const HeadingComponent = () => {
  return (
    <div id="container">
        {JSXsxheading()}
      <JSXsxheading />
      <JSXsxheading></JSXsxheading>
      <h1 id="heading">My first functional component.</h1>
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTZtbMbkJ6OfPPasy1rvJFdsWchBFtjc9kMfckv8kp237V3paaCNPGpVanpXzWnNg8rHs&usqp=CAU"
          alt="Logo"
        />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const ResturantCard = (props) => {
  const data = props.props;
  // sconsole.log(props.props);
  return (
    <div className="res-card" style={styleCard}>
      <img className="res-image" src={data.Image} alt="res-image"></img>
      <h3>{data.resName}</h3>
      <h4>{data.cuisine}</h4>
      <h4>{data.rating}</h4>
      <h4>{data.time}</h4>
    </div>
  );
};

const proplist = [
  {
    id:1,
    resName: "KFC",
    cuisine: "Chicken",
    rating: "4.4",
    time: "25 min",
    Image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f01666ac73626461d7455d9c24005cd4",
  },
  {
    id:2,
    resName: "Dominos",
    cuisine: "Pizza",
    rating: "4.1",
    time: "17 min",
    Image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f01666ac73626461d7455d9c24005cd4",
  },
  {
    id:3,
    resName: "Pizza Hut",
    cuisine: "Pizza",
    rating: "4.1",
    time: "17 min",
    Image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f01666ac73626461d7455d9c24005cd4",
  },
];
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {proplist.map((resturant,index) => 
          <ResturantCard key={resturant.id} props={resturant}></ResturantCard>
        )}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body></Body>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
