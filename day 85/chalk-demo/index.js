import chalk from "chalk";


console.log(chalk.red("ეს არის წითელი ტექსტი"));

console.log(chalk.green("ეს არის მწვანე ტექსტი"));


console.log(chalk.bgBlue.white("ლურჯი ფონზე თეთრი"));


console.log(chalk.yellow("მოყვითალო ტექსტი"));


console.log(chalk.bold("გამუქებული ტექსტი"));

console.log(chalk.italic("კურსივი ტექსტი"));


console.log(chalk.underline("ხაზგასმული ტექსტი"));


console.log(chalk.red.bold.bgWhite("წითელი + bold + თეთრი ფონზე"));


console.log(chalk.rgb(255, 136, 0)("RGB სტილი ტექსტი"));

console.log(chalk.hex("#FF1493")("Hex ფერი ტექსტში"));


console.log(chalk.blue("Hello") + " " + chalk.red("World!"));


console.log(chalk.bgMagenta.white.bold("Magenta Background + Bold + White"));

// package.json არის ძირითადი კონფიგურაციის ფაილი პროექტისთვის.
// package-lock.json  ინახავს, თუ რომელი ვერსიები დაინსტალირდა
// node_modules დირექტორია, სადაც npm-ს ჩამოტვირთული პაკეტები ინახება.
// commonJS არის Node.js-ის ძველი მოდულების სისტემა.
// module (ESM)  თანამედროვე სისტემა.