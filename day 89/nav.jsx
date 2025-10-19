import React from "react";

function Nav(props) {
  

  
  const navStyle = {
    color: props.textColor,  
    backgroundColor: props.bgColor, 
    padding: "20px",          
    textAlign: "center"      
  };

  return (
    <nav style={navStyle}>
      
      <h1>{props.title}</h1>
    </nav>
  );
}

export default Nav;


/* React-ში როდესაც გვინდა ერთი კომპონენტიდან მეორეში მონაცემების გადაცემა,ამას ვაკეთებთ props-ების საშუალებით. */
/* props drilling არის სიტუაცია, როდესაც მონაცემი (props) უნდა გადავიტანოთ "ღრმა" კომპონენტამდე, 
ანუ parent → child → child → child ... და ასე შემდეგ.*/
/* ეს ართულებს პროექტის სტრუქტურას, საჭირო ხდება ზედმეტი props-ების წერა */
/* Props drilling-ის თავიდან ასაცილებლად არსებობს რამდენიმე გზა: */
/* 1) React Context API
   2) State Management ბიბლიოთეკები
   3) Component Composition
   4) Custom hooks */