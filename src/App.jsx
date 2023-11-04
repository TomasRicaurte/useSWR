import React from "react";
import { Dog } from "./Dog";

export function App() {
  return (
    <div>
    <h1>Welcome to React</h1>
    <button onClick={() => window.location.reload()}>Recargar</button>
    <Dog />
  </div>
  )
}
