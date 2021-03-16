import "../styles/Jumbotron.css";
import React from "react";

function Jumbotron() {
  return (
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Employee Directory</h1>
        <p class="lead">Click on the header to sort or search below!</p>
      </div>
    </div>
  );
}
export default Jumbotron;