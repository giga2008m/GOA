import React from "react";

function App() {

  const friends = ["გიორგი", "ანა", "ლევანი", "ნინო", "გიგა"];

  return (
    <div>
      <h1>ჩემი  მეგობრები</h1>
      <ul>
        {friends.map((friend, index) => (
          <li key={index}>{friend}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

/* key React-ს ეხმარება, რომ გამოიცნოს რომელი ელემენტი შეიცვალა, დამატდა ან წაიშალა. */
