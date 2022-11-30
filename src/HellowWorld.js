import React from "react";

const random = Math.floor(Math.random() * (5 - -5)) + -5;

function HellowWorld() {
  return <h1>Hello World {random}</h1>;
}

export default HellowWorld;
