import './App.css';
import Card from './comp/card.js';
import React from "react";

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
      <Card
        title="Sample Card"
        content="This is a sample card with a brief description."
        image="https://via.placeholder.com/300"
      />
      <Card
        title="Another Card"
        content="Cards can have any content you'd like."
      />
    </div>
  );
}

export default App;