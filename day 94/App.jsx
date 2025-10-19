import React, { useState } from "react";

function UserForm() {
  
  const [name, setName] = useState("");
  
  const [lastname, setLastname] = useState("");

 
  const handleNameChange = (event) => {
    setName(event.target.value); 
  };

  
  const handleLastnameChange = (event) => {
    setLastname(event.target.value); 
  };

  return (
    <div>
      <h1>Registration Form</h1>

      
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={handleNameChange} 
      />

      
      <input
        type="text"
        placeholder="Enter lastname"
        value={lastname}
        onChange={handleLastnameChange} 
      />

      
      <p>
        Name: {name} <br />
        Lastname: {lastname}
      </p>
    </div>
  );
}

export default UserForm;

// პლიუსები:
// 1) რეალურ დროში მონიტორინგი – როგორც კი მომხმარებელს შეჰყავს სიმბოლო, state ახლდება და ჩვენ შეგვიძლია დავწეროთ დამატებითი ლოგიკა.
// 2) გამჭვირვალობა – აპლიკაციაში მონაცემები ყოველთვის სინქრონულია UI-სთან, ანუ პარაგრაფში რაც გამოჩნდება 100%-ით ემთხვევა input-ში არსებულს.

// მინუსები:
// 1) ზედმეტი render-ები
// 2) მეტი კოდი