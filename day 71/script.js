const numbers = [1, 3, 7, 10, 15];

const evenIndex = numbers.findIndex(num => num % 2 === 0);

console.log(evenIndex); 

const users = [
  { name: "Ana", active: true },
  { name: "Luka", active: true },
  { name: "Nika", active: false },
];


const inactiveUserIndex = users.findIndex(user => user.active === false);

console.log(inactiveUserIndex);

const products = [
  { id: 1, name: "Phone" },
  { id: 2, name: "Tablet" },
  { id: 3, name: "Laptop" },
];

const laptopIndex = products.findIndex(product => product.name === "Laptop");

console.log(laptopIndex);

// findIndex-ს გამოვიყენებთ მასივიდან ელემენტის პოზიციის (ინდექსის) გამოსავლენად, როცა კონკრეტული პირობა უნდა დაკმაყოფილდეს.

function customFindIndex(arr, callback) {
  
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      return i;
    }
  }
  // თუ არ მოიძებნა შესაბამისი ელემენტი, ვაბრუნებთ -1-ს
  return -1;
}

const number = [10, 20, 30, 40];

const sum = number.reduce((acc, curr) => acc + curr, 0);

console.log(sum);

const words = ["Hello", "world", "from", "JavaScript"];

const sentence = words.reduce((acc, word) => acc + " " + word);

console.log(sentence);

const cars = [
  { brand: "BMW", price: 30000 },
  { brand: "Toyota", price: 20000 },
  { brand: "Mercedes", price: 40000 }
];

const totalPrice = cars.reduce((acc, car) => acc + car.price, 0);

console.log(totalPrice);

function myReduce(numbers, callback, initialValue) {
  let num = initialValue;
  let startIndex = 0;

  if (initialValue === undefined) {
   num = numbers[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < numbers.length; i++) {
    num = callback(num, numbers[i], i, numbers);
  }

  return num;
};