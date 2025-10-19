import React, { useState } from "react";

function Products() {
  const [products, setProducts] = useState(["Product 1", "Product 2"]);

 
  const addProduct = () => {
 
    const newProduct = `Product ${products.length + 1}`;

    setProducts([...products, newProduct]);
  };

  return (
    <div>
      <h1>Products List</h1>
      <button onClick={addProduct}>Add Product</button>

      
      <ul>
        {products.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
