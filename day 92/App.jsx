import React, { useState } from "react";

function App() {
 
  const [click, setClick] = useState(0);

  
  const handleClick = () => {
    setClick(click + 1);
  };

  return (
    <div>
      <h1>Click Counter</h1>

      <p>ღილაკზე დააჭირეს: {click} ჯერ</p>
      
      
      <button onClick={handleClick}>დააჭირე</button>
    </div>
  );
}

export default App;

// useState არის react-ის Hook, რომლის საშაულებითაც შენ შეგიძლია შეინახო და განაახლო მონაცემები ისე, რომ კომპონენტი ხელახლა გადახატოს ახალი მნიშვნელობით.
