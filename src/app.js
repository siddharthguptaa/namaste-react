import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header/Header"
import Body from "./Components/Body/Body";

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
