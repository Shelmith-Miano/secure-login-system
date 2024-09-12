import React from "react";
import ReactDOM from "react-dom/client";

class Car {
  constructor(name) {
    this.brand = name;
  }
}

const mycar = new Car("Benz");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<h1>My car is a {mycar.brand}</h1>);
