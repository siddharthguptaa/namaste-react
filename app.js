import React from "react";
import ReactDOM from "react-dom/client";

const jsxheading = <h1 id="heading">Namaste React using JSX!</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));

const HeadingComponent = () => {
  return (
    <div id="container">
      <h1 id="heading">My first functional component.</h1>
    </div>
  );
};

// const HeadingComponentOne = () => <h1 className="heading">My first functional component.</h1>;

root.render(<HeadingComponent/>);
