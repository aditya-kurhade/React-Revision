// Import React and ReactDOM
import React from "react";
import ReactDOM from "react-dom/client";

// Get the root DOM node
const container = document.getElementById('root');

// Create a root using React 18's createRoot API
const root = ReactDOM.createRoot(container);

// Render a React element into the root
root.render(<p>Hello</p>);

/*
  About createRoot():
    - Introduced in React 18 for concurrent rendering.
    - Used to create a root for your React app.
    - Syntax: ReactDOM.createRoot(container)

  About render():
    - Used to render a React element into the root.
    - Syntax: root.render(element)
    - Replaces the old ReactDOM.render() in React 18+.
*/

<body>
  <div id="root"></div>
</body>