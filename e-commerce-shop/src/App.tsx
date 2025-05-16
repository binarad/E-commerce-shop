// import { useState } from 'react'
import NavBar from "./Components/NavBar";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        justifyItems: "center",
        alignItems: "center",
      }}
    >
      <NavBar />
      <HomePage />
    </div>
  );
}

export default App;
