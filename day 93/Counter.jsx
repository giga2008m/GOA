import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  // ცუდი გზა
  const handleBadClick = () => {
  
    setCount(count + 1);
    setCount(count + 1);
    
    // აქ ორჯერ ვიძახებთ setCount(count + 1)
    // მაგრამ React-ში setState ასინქრონულია 
    // ამიტომ ორივე გამოძახების დროს count არის ერთი და იგივე.
    // შედეგი იქნება მხოლოდ +1, მიუხედავად იმისა რომ ორჯერ გამოვიძახეთ.
  };

  // სწორი გზა (საუკეთესო პრაქტიკა)
  const handleGoodClick = () => {
    
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);

    // აქ setCount-ს გადავცემთ ფუნქციას, რომელიც იღებს წინა მნიშვნელობას.
    // ამ გზით React დარწმუნებულია, რომ ყველა setCount გამოითვლება სწორად,
    // და ორჯერ გამოძახებისას შედეგი რეალურად გახდება +2.
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleBadClick}>ცუდი კლიკი (+1 ნაცვლად +2)</button>
      <button onClick={handleGoodClick}>კარგი კლიკი (+2 სწორად)</button>
    </div>
  );
}

export default Counter;
