import React from "react";
import ReactDOM from "react-dom/client";

// Functional component for an uncontrolled form (normal HTML form)
function MyForm() {
  function handleSubmit(event) {
    event.preventDefault();
    // Access the input value using the DOM
    const name = event.target.elements.name.value;
    alert("A name was submitted: " + name);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name: <input type="text" name="name" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;