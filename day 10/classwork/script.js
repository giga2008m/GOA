function greet() {
  return "Hello from greet function!";
}


function higherOrderFunction(fn) {
  console.log("giga");

  
  return fn(); 
}


const result = higherOrderFunction(greet);

console.log(result);

// Higher-order function არის ფუნქცია, რომელიც იღებს სხვა ფუნქციას არგუმენტად 
// ან აბრუნებს ფუნქციას შედეგად.
// ფუნქციები ექუთვნიან ობიექტის ტიპს (object) JavaScript-ში.
// Stack გამოიყენება პრიმიტიული ტიპებისთვის და ფუნქციის გამოძახებისთვის
// Heap გამოიყენება reference ტიპებისთვის (მაგ. ობიექტები, ფუნქციები)


function createGreeting(message) {
  return function(name) {
    return `${message}, ${name}!`;
  };
}


const greeting = createGreeting('გამარჯობა');
console.log(greet('გიგა')); 


['ვაშლი', 'ბანანი', 'მსხალი'].forEach((fruit, i) => console.log(`ელემენტი #${i + 1}: ${fruit}`));


function manualForEach(arr, cb) {
  
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i], i, arr); 
  }
}


// Callback არის ფუნქცია, რომელიც გადაეცემა სხვა ფუნქციას, რათა იგი გამოიძახოს შესაბამის დროს.
// ეს ფუნქცია ჩვეულებრივ გამოიყენება ისეთი ოპერაციებისას, როგორიცაა  ციკლები.
// forEach არის მეთოდი, რომელიც გამოიყენება მასივზე, რათა გავიგოთ თითოეული ელემენტი.
// აბსტრაქცია არის პროგრამირების კონცეფცია, როდესაც ჩვენ ვმალავთ სპეციფიკურ დეტალებს და ვაჩვენებთ მხოლოდ უმნიშვნელოვანეს ნაწილს.


console.log("Start"); 
// ეს გამოიტანს: Start

setTimeout(function () {
    console.log("Inside setTimeout");
}, 2000); 
// ეს ნიშნავს: 
// "ამ ფუნქციას (რომელიც წერს 'Inside setTimeout') გაუშვი 2000 მილიწამში (ანუ 2 წამში)"
// მაგრამ ეს არ აჩერებს შემდეგი კოდის შესრულებას — ამიტომ ქვედა ხაზიც მაშინვე შესრულდება

console.log("End"); 
// ეს გამოიტანს: End (მაშინვე, setTimeout-ის ლოდინის გარეშე)

// და ბოლოს, დაახლოებით 2 წამის შემდეგ (ასინქრონულად):
// გამოიტანს: Inside setTimeout


const randomNumbers = [12, 45, 67, 88, 34, 91, 28, 59, 70, 33];


const evenNumbers = randomNumbers.filter(function(num) {
  return num % 2 === 0;
});


console.log("ყველა რიცხვი:", randomNumbers);
console.log("ლუწი რიცხვები:", evenNumbers);


// filter მეთოდი არ ცვლის ორიგინალ მასივს,არამედ ქმნის და აბრუნებს ახალ მასივს,
// ტოვებს მხოლოდ იმ ელემენტებს, რომლებიც აკმაყოფილებენ კონკრეტულ პირობას
//map მეთოდი  აბრუნებს ახალ მასივს, მაგრამ map არ ტოვებს/არ გამორიცხავს ელემენტებს, ის ცვლის ყველა ელემენტს
// filter ფილტრავს, ანუ ტოვებს მხოლოდ შესაბამის ელემენტებს (რაოდენობა შესაძლოა შემცირდეს)
// map  გარდაქმნის, ანუ ყველა ელემენტს ცვლის ახალით (რაოდენობა უცვლელი რჩება)
