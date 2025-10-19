// useEffect როგორც useState ასევე React-ის კაუჭია
// useEffect აძლევს React-ს საშუალებას იმოქმედოს კომპონენტის გარეთ მაგალითად სერვერთან ან ბრაუზერთან.
// მუშაობს ყოველი რენდერის შემდეგ ან კონკრეტული მნიშვნელობის ცვლილებისას.

import { useState, useEffect } from "react";

function App() {
  
  const [name, setName] = useState("");

  
  useEffect(() => {
    if (name !== "") {
      alert(`Hello ${name}`);
    }
  }, [name]); 


 
  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>შეიყვანეთ თქვენი სახელი:</h2>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="სახელი"
      />
    </div>
  );
}

export default App;
