import React from "react";
import ReactDOM from "react-dom/client";

// Functional component that conditionally renders content based on isLoggedIn prop
function Greeting(props) {
  if (props.isLoggedIn) {
    return <h1>Welcome back!</h1>;
  } else {
    return <h1>Please sign in.</h1>;
  }
}

export default function App() {
  return (
    <div>
      <Greeting isLoggedIn={true} />
      <Greeting isLoggedIn={false} />
    </div>
  );
}   