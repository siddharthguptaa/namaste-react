import React from "react";
import ReactDOM from "react-dom/client";



const heading = React.createElement("h1", { id: "head" }, "Hello World from React!");


const parent = React.createElement("div", { id: "parent" }, [React.createElement("div", { id: "child1" }, [React.createElement("h1", { id: "h1" }, "hello i'm h1 and i'm under child1"), React.createElement("h2", { id: "h2" }, "hello i'm h2 and i'm under child1")]), React.createElement("div", { id: "child2" }, [React.createElement("h1", { id: "h1" }, "hello i'm h1 and i'm under child2"), React.createElement("h2", { id: "h2" }, "hello i'm h2 and i'm under child2")])]);
//console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); 