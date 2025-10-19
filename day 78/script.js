function createPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("დაპირება შესრულდა 5 წამში!");
        }, 5000);
    });
}

createPromise().then((value) => {
    console.log(value);
});

function createPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("❌ დაპირება უარყოფილია 5 წამში!");
        }, 5000);
    });
}

createPromise()
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.log(error);
    });


fetch("https://fakestoreapi.com/products")
  .then(res => res.json()) 
  .then(data => console.log("მიღებული მონაცემები:", data)) 
  .catch(err => console.error("შეცდომა:", err)) 
  .finally(() => console.log("მოთხოვნა დასრულდა!"));  

// fetch(url) → აგზავნის  მოთხოვნას მითითებულ მისამართზე და აბრუნებს Promise-ს. გამოიყენება სერვერიდან მონაცემების წამოსაღებად ან გასაგზავნად.
// .then() → მუშაობს მაშინ, როცა Promise წარმატებით სრულდება.
// .catch() → მუშაობს მაშინ, როცა Promise უარყოფილია (შეცდომაა).
// .finally() → ყოველთვის სრულდება, მიუხედავად იმისა, წარმატებით შესრულდა თუ არა მოთხოვნა.