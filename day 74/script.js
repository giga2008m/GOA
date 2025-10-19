class Person {
  constructor(name, age, lastname, country) {
    this.name = name;
    this.age = age;
    this.lastname = lastname;
    this.country = country;
  }

 
  introduce() {
    console.log(`Hi, I'm ${this.name} ${this.lastname} from ${this.country}, and I'm ${this.age} years old.`);
  }
}


const person1 = new Person("Giorgi", 25, "Kiknadze", "Georgia");
const person2 = new Person("Nino", 30, "Beridze", "France");
const person3 = new Person("Luka", 22, "Tavartkiladze", "Germany");
const person4 = new Person("Mariam", 27, "Khutsishvili", "USA");


person1.introduce();
person2.introduce();
person3.introduce();
person4.introduce();

// class შეიძლება შეიცავდეს კონსტრუქტორს და სხვადასხვა მეთოდებს.
// new არის საკვანძო სიტყვა, რომელიც ქმნის კლასის ახალ "ინსტანციას", ანუ ობიექტს.