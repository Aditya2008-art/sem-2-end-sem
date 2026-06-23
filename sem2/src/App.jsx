import React from "react";
import MarksPortal from "./MarksPortal";

function App() {
  return (
    <div style={{ padding: "20px", backgroundColor: "brown", textAlign: "center", height:"90vh", width: "90vh", margin: "auto" }}>
      <h1 style={{ textDecoration: "none", color: "yellow" }}>Welcome to Student Marks Portal</h1>
      <MarksPortal/>
    </div>
  );
}

export default App;
