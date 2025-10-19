function reverseFromIndex(numbers) {
  for (let i = 5 ; i >= 0; i--) {
    console.log(numbers[i]);
  }
}

let myArray = [10, 20, 30, 40, 50, 60];
reverseFromIndex(myArray);


const countSpaces = function(sentence) {
  let count = 0;

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === ' ') {
      count++;
    }
  }

  return count;
};


let result = countSpaces("ეს არის წინადადება სპეისებით");
console.log("სფეისების რაოდენობაა:", result);



function filter(arr, helper) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (helper(arr[i])) {
      result.push(arr[i]);
    }
  }

  return result;
}



function isEven(num) {
  return num % 2 === 0;
}


const numbers = [1, 2, 3, 4, 5, 6];


const evenNumbers = filter(numbers, isEven);

console.log(evenNumbers); 



const greet = () => "Hello world";

console.log(greet());



const print = (name) => `Hello ${name}`;

console.log(print("Giga"));


const filterArray = (arr, num) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== num) {
      result.push(arr[i]);
    }
  }
  return result;
};

console.log(filterArray([1, 2, 3, 2, 4], 2)); 






