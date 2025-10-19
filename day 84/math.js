export function sum(a, b) {
  return a + b;
}


export function subtract(a, b) {
  return a - b;
}


export function multiply(a, b) {
  return a * b;
}


export function divide(a, b) {
  if (b === 0) {
    return "ნულზე გაყოფა არ შეიძლება!";
  }
  return a / b;
}

// import გამოიყენება სხვა ფაილში export-ით გატანილი ელემენტების ჩამოსატანად.
// export  ნიშნავს, რომ კონკრეტული ფუნქცია/ცვლადი/კლასი ხელმისაწვდომია სხვა ფაილებში გამოსაყენებლად.
// type module-ს ვიყენებთ იმიტომ, რომ import და export სინტაქსი მუშაობს მხოლოდ ES Modules რეჟიმში.