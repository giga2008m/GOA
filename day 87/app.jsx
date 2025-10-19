import React from "react";
import AgeCheck from "./components/AgeCheck";

function App() {
  return (
    <div>
      <AgeCheck />
    </div>
  );
}

export default App;

import React from "react";

function App() {
  const age = 20; 

  return (
    <div>
      <h1>{age > 18 && "You are an adult"}</h1>
    </div>
  );
}

export default App;

/* && აბრუნებს პირველ falsy მნიშვნელობას, ან თუ არ არსებობს ბოლო truthy მნიშვნელობას. */ 