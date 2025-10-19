import { useEffect, useState } from "react";

function ProductList() {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json()) 
      .then((data) => setProducts(data)) 
      .catch((error) => console.error("Error fetching products:", error));
  }, []); 
   

   const handleToAddCart = (product) => {

    const productClone = { ...product, unit: 1 };

    setCart((prevCart) => [...prevCart, productClone]);
  };

  const increaseUnit = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, unit: item.unit + 1 } : item
      )
    );
  };

  
  const decreaseUnit = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, unit: item.unit - 1 } : item
        )
       
        .filter((item) => item.unit > 0)
    );
  };





  return (
    <section>
      <h2>Product List</h2>
      
      {products.length === 0 ? (
        <p>Loading products</p> 
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {products.map((product) => (
            <li
              key={product.id}
              style={{
                marginBottom: "20px",
                border: "1px solid #ccc",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              <h3>{product.title}</h3>
              <img
                src={product.image}
                alt={product.title}
                width="100"
                height="100"
                style={{ objectFit: "contain" }}
              />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default ProductList;

// useState([]) ქმნის ცვლადს products, სადაც შევინახავთ API-დან მიღებულ პროდუქტების სიას.
// fetch()  აგზავნის მოთხოვნას მისამართზე
// map()  გადის state-ში შენახულ მასივზე და თითოეულ პროდუქტზე ქმნის JSX ელემენტს
