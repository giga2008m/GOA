import React from "react";

function AgeCheck() {
  const age = 16; 

  return (
    <div>
      <h1>
        {age >= 18 ? "You are an adult" : "You are not an adult"}
      </h1>
    </div>
  );
}

export default AgeCheck;
