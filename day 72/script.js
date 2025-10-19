const people = [
  {
    name: "Gio",
    age: 21,
    talk: function () {
      console.log("Hello, I’m Gio");
    },
    friends: ["Nika", "Lika"],
    address: {
      city: "Tbilisi",
      street: "Rustaveli"
    }
  },
  {
    name: "Ana",
    age: 17,
    talk: function () {
      console.log("Hi, I’m Ana");
    },
    friends: ["Tako"],
    address: {
      city: "Batumi",
      street: "Gorgiladze"
    }
  },
  {
    name: "Luka",
    age: 25,
    talk: function () {
      console.log("Hey, I’m Luka");
    },
    friends: ["Gio", "Ana", "Nino"],
    address: {
      city: "Kutaisi",
      street: "Chavchavadze"
    }
  },
  {
    name: "Nino",
    age: 19,
    talk: function () {
      console.log("Hello, I’m Nino");
    },
    friends: ["Lika", "Mariam"],
    address: {
      city: "Telavi",
      street: "Nadikvari"
    }
  },
  {
    name: "Davit",
    age: 16,
    talk: function () {
      console.log("Hi, I’m Davit");
    },
    friends: [],
    address: {
      city: "Zugdidi",
      street: "Rustaveli"
    }
  }
];


function manualFilter(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
}


const Peoples = manualFilter(people, function (person) {
  return person.age > 18 && person.friends.length >= 2;
});

console.log(Peoples);



const fruits = ["apple", "banana", "cherry"];


for (const index in fruits) {
  console.log(index); 
  console.log(fruits[index]);
}


const person = {
  name: "Giga",
  age: 17,
  city: "Tbilisi"
};


for (const key in person) {
  console.log(key); 
  console.log(person[key]); 
}

//for...in ციკლი გამოიყენება ობიექტების (და ზოგჯერ მასივების) კუთვნილებების გასავლელად.
//იგი გადის ყველა enumerable კუთვნილებაზე ობიექტში და აბრუნებს კუთვნილების სახელს (key).

const colors = ["red", "green", "blue"];

for (const color of colors) {
  console.log(color); 
}

const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020
};

try {
  for (const item of car) {
    console.log(item);
  }
} catch (error) {
  console.log("for...of არ მუშაობს ჩვეულებრივ ობიექტებზე, რადგან ისინი არ არიან iterable");
}

// ობიექტი არ არის iterable, ამიტომ `for...of` ჩვეულებრივ ობიექტზე ვერ იმუშავებს
// თუ გვინდა ობიექტზე გავიაროთ, ან უნდა ვაქციოთ ის iterable-ად, ან გამოვიყენოთ Object.entries()


// JavaScript-ში for...in და for...of ციკლები გამოიყენება მასივებსა და ობიექტებზე გადასასვლელად, თუმცა ისინი განსხვავებული მიზნებისთვის არის განკუთვნილი.


const boy = {
  firstname: "Giga",
  lastname: "Gigauri",


  introduce: function () {
    console.log("My name is " + this.firstname + " " + this.lastname);
  }
};

boy.introduce();