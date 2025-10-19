const newProduct = {
  title: "Test Product",
  price: 29.99,
  description: "This is a test product",
  image: "https://i.pravatar.cc",
  category: "electronics"
};


fetch("https://fakestoreapi.com/products", {
  method: "POST", 
  headers: {
    "Content-Type": "application/json" 
    
  },
  body: JSON.stringify(newProduct) 
  
})
  .then(res => res.json()) 
  .then(data => console.log("ახალი პროდუქტი დამატებულია:", data)) 
 
  .catch(err => console.error("შეცდომა:", err)); 
  
