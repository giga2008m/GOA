import React, { useState } from "react";

function App() {
 
  const [formState, setFormState] = useState({});

  
  const handleChange = (e) => {
    const { name, value } = e.target;

   
    setFormState((prev) => ({
      ...prev,       
      [name]: value, 
    }));
  };

  return (
    <div>
      <h1>Form Example</h1>

      
      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        onChange={handleChange}
      />

      
      <input
        type="text"
        name="lastname"
        placeholder="Enter your lastname"
        onChange={handleChange}
      />

      <p>სახელი: {formState.name}</p>
      <p>გვარი: {formState.lastname}</p>
    </div>
  );
}

export default App;

// რატომ არის ეს გზა უკეთესი წინასთან შედარებით?
// ობიექტში შენახვისას ერთი საერთო handleChange ფუნქციით შეგიძლია მართო ყველა ინფუთი, რაც კოდის გამარტივებას უწყობს ხელს.
// state ერთიანად ინახავს მთელ ფორმას, რაც გაძლევს საშუალებას გადაამუშაო ყველა მონაცემი ერთიანად.