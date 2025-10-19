class A {
 
  #password;
  #email;

 
  constructor(name, email, password) {
    this.name = name;
    this.#email = email;
    this.#password = password;
  }

 
  introduce() {
    console.log(`გამარჯობა, ჩემი სახელია ${this.name}`);
  }

  
  set changePassword(newPassword) {
   
    const hasMinLength = newPassword.length >= 6;
    
    const hasNumber = /\d/.test(newPassword);
   
    const hasLetter = /[a-zA-Z]/.test(newPassword);

    if (hasMinLength && hasNumber && hasLetter) {
      this.#password = newPassword;
      console.log("პაროლი წარმატებით შეიცვალა!");
    } else {
      console.log("პაროლი უნდა შედგებოდეს მინიმუმ 6 სიმბოლოსგან და უნდა შეიცავდეს რიცხვებს და ინგლისურ ასოებს.");
    }
  }

  
  get getEmail() {
    return this.#email;
  }
}



const user = new Account("გიგა", "giga@email.com", "pass123");


user.introduce(); 


user.changePassword = "123"; 


user.changePassword = "newPass456"; 


console.log(user.getEmail); 


console.log(user.password); 




class Account {
  #password;
  #email;

  constructor(name, email, password) {
    this.name = name;
    this.#email = email;
    this.#password = password;
  }

  introduce() {
    console.log(`გამარჯობა, ჩემი სახელია ${this.name}`);
  }

  
  isValidPassword(password) {
    if (password.length < 6) {
      return false;
    }

    let hasLetter = false;
    let hasNumber = false;

    for (let i = 0; i < password.length; i++) {
      const char = password[i];

     
      if (char >= '0' && char <= '9') {
        hasNumber = true;
      }

      
      if (
        (char >= 'a' && char <= 'z') ||
        (char >= 'A' && char <= 'Z')
      ) {
        hasLetter = true;
      }
    }

    return hasLetter && hasNumber;
  }

 
  set changePassword(newPassword) {
    if (this.isValidPassword(newPassword)) {
      this.#password = newPassword;
      console.log("პაროლი წარმატებით შეიცვალა!");
    } else {
      console.log("პაროლი უნდა იყოს მინიმუმ 6 სიმბოლო და შეიცავდეს რიცხვებს და ინგლისურ ასოებს.");
    }
  }


  get getEmail() {
    return this.#email;
  }
}


const user1 = new Account("გიგა", "giga@email.com", "pass123");

user1.introduce(); 

user1.changePassword = "123";        
user1.changePassword = "newPass456";      

console.log(user1.getEmail);





class Vehicle {
  constructor(brand, year) {
    this.brand = brand;  
    this.year = year;    
  }


  startEngine() {
    console.log(`The engine of ${this.brand} is starting.`);
  }

  
  getInfo() {
    return `This is a ${this.brand} made in ${this.year}.`;
  }
}


class Car extends Vehicle {
  constructor(brand, year, doors) {
    super(brand, year);  
    this.doors = doors;   
  }

  honk() {
    console.log("Beep beep!");
  }
}


class Motorcycle extends Vehicle {
  constructor(brand, year, hasSidecar) {
    super(brand, year);
    this.hasSidecar = hasSidecar;  
  }

 
  revEngine() {
    console.log("Vrrroooom!");
  }
}



const myCar = new Car("Mercedes cls 55 amg", 2005, 4);
myCar.startEngine();        
myCar.honk();               
console.log(myCar.getInfo()); 

const myMotorcycle = new Motorcycle("Harley-Davidson", 2018, false);
myMotorcycle.startEngine();    
myMotorcycle.revEngine();      
console.log(myMotorcycle.getInfo()); 




 

    
 



const form = document.querySelector("form");

const accounts = [];

class Account {
    constructor(email, password, fullname){
        this.email = email;
        this._password = password;
        this.fullname = fullname;
    }

    set password(newPassword) {
        this._password = newPassword;
    }

   
    static checkIfExists(email) {
        return accounts.some(account => account.email === email);
    }

    
    static addToStorage(accountObj) {
        if (Account.checkIfExists(accountObj.email)) {
            alert("რეგისტრაცია წარუმატებლად დასრულდა. ეს იმეილი უკვე რეგისტრირებულია.");
            return; 
        }

        accounts.push(accountObj);
        console.log("მომხმარებელი წარმატებით დაემატა:", accountObj);
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = form.email.value;
    const password = form.password.value;
    const fullname = form.fullname.value;

    const account = new Account(email, password, fullname);

    
    Account.addToStorage(account);

    form.reset();
});


 const STORAGE_KEY = "accounts"; 

    class Account {
      constructor(email, password, fullname) {
        this.email = email;
        this._password = password;
        this.fullname = fullname;
      }

      set password(newPassword) {
        this._password = newPassword;
      }

     
      static getFromStorage(key) {
        const data = localStorage.getItem(key); 
        const parsed = JSON.parse(data); 
        return parsed === null ? [] : parsed; 
      }

      
      static checkIfExists(email) {
        const accounts = Account.getFromStorage(STORAGE_KEY);
        return accounts.some(account => account.email === email);
      }

      
      static addToStorage(accountObj) {
        const accounts = Account.getFromStorage(STORAGE_KEY);

        if (Account.checkIfExists(accountObj.email)) {
          alert("რეგისტრაცია წარუმატებელია: მომხმარებელი უკვე არსებობს.");
          return;
        }

        accounts.push(accountObj);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(accounts));
        alert("რეგისტრაცია წარმატებით დასრულდა.");
        console.log("დამატებული მომხმარებელი:", accountObj);
      }
    }

    const form = document.querySelector("form");

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = form.email.value;
      const password = form.password.value;
      const fullname = form.fullname.value;

      const newAccount = new Account(email, password, fullname);
      Account.addToStorage(newAccount);

      form.reset();
    });

// JSON (JavaScript Object Notation) — მონაცემების შენახვის ფორმატია, რომელიც ტექსტურია და წაიკითხება ადამიანისთვისაც და პროგრამისთვისაც.
// localStorage — ეს არის ბრაუზერის ლოკალური ბაზა, რომელიც ინახავს მონაცემებს კლავიშების მიხედვით მუდმივად.