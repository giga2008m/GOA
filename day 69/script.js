function myFunction() {
  let number = 42; // 
  console.log("ფუნქციის შიგნით:", number); 
}

myFunction();

console.log("ფუნქციის გარეთ:", number); 

// let number = 42; — ეს ცვლადი გამოძახებულია ფუნქციის შიგნით, რაც ნიშნავს, რომ მას აქვს ლოკალური scope.
// console.log("ფუნქციის გარეთ:", number); — ფუნქციის გარეთ number არ არსებობს, ამიტომ ხდება შეცდომა.

// ეს არის გლობალური scope
let globalVar = "მე ვარ გლობალური";

function myFunction() {
  // ეს არის ლოკალური scope
  let localVar = "მე ვარ ლოკალური";
}
