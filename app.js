import React from "react";
import ReactDOM from "react-dom/client";

const first = <span>React Element</span>

const JSXsxheading = () =>  (<h1 id="heading">{first}Namaste React using JSX!</h1>);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
const number = 1000;
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

// const HeadingComponentOne = () => <h1 className="heading">My first functional component.</h1>;

root.render(<HeadingComponent />);
