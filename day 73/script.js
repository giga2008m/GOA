const account = {
  
  _email: "example@email.com",
  _pass: "123456",
  fullname: "გიგა მენაბდიშვილი",

  
  set pass(newPass) {
    if (newPass.length >= 6) {
      this._pass = newPass;
      console.log("პაროლი წარმატებით შეიცვალა.");
    } else {
      console.log("პაროლის ზომა არ ემთხვევა მინიმუმ 6 სიმბოლოს.");
    }
  },

  
  get email() {
    return this._email;
  },

  
  greet() {
    console.log(`მე ვარ ${this.fullname}`);
  }
};

account.pass = "123";
account.pass = "newpass"; 


console.log(account.email);  

account.greet();


function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;

 
  this.introduce = function () {
    console.log(`მანქანა: ${this.brand} ${this.model}, გამოშვების წელი: ${this.year}`);
  };
}


const car1 = new Car("Toyota", "Corolla", 2015);
const car2 = new Car("BMW", "X5", 2020);
const car3 = new Car("Mercedes", "C-Class", 2018);
const car4 = new Car("Ford", "Mustang", 2022);


car1.introduce(); 
car2.introduce();
car3.introduce(); 
car4.introduce();


// კონსტრუქტორი ფუნქცია (function) გამოიყენება ობიექტების შაბლონად
// ანუ ერთნაირი სტრუქტურის ობიექტების სწრაფად შესაქმნელად.
// გამოძახება ხდება new საკვანძო სიტყვით.
// პლიუსები:
// კოდი არ მეორდება — შეგვიძლია მრავალჯერ გამოვიყენოთ ერთი და იგივე კონსტრუქტორი.
// მეთოდების ჩამატება — შეგვიძლია დავამატოთ ფუნქციონალი ობიექტებს.
// მინუსები:
// ყოველი ობიექტი ქმნის თავის introduce მეთოდს ცალკე მეხსიერებაში, რაც არ არის ეფექტური.


