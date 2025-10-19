import React from "react";
import Nav from "./nav";

function App() {
  return (
    <div>
     
      <Nav 
        title="ჩემი ნავიგაცია" 
        textColor="white" 
        bgColor="teal" 
      />
    </div>
  );
}

export default App;

/* props React-ში არის მონაცემები, რომლებიც მშობელი კომპონენტიდან შვილ კომპონენტში გადადის. */