const numbers = [1, 5, 8, 12, 19, 22, 35, 40];


let evenNumbers = [];


for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) { 
    evenNumbers.push(numbers[i]);
  }
}


console.log("ორიგინალი მასივი:", numbers);
console.log("მხოლოდ ლუწები:", evenNumbers);

// გამშვები გარემო არის პროგრამული გარემო, სადაც ჩვენი კოდი სრულდება.
// Browser Runtime Environment სადაც JS მუშაობს ბრაუზერში.აქ გვაქვს window, document და სხვა ბრაუზერის API-ები.
// Node.js Runtime Environment სადაც JS მუშაობს ოპერაციულ სისტემაში.აქ გვაქვს process, fs, http და ა.შ.
// REPL არის Node.js-ის ინტერფეისი ტერმინალში, სადაც შეგვიძლია პირდაპირ ბრძანების მიცემა და შედეგის ნახვა.
