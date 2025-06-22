// Props are arguments passed into React components.
// Props are passed to components via HTML attributes.

// Example of using props in a functional component

import React from "react";
import ReactDOM from "react-dom/client";

// Define a component that uses props
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

export default <Welcome name="Alice" />;


