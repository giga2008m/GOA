 function createProductLI(products) {
      return products.map(product => `
        <li>
          <h3>${product.title}</h3>
          <img src="${product.image}" width="100" alt="${product.title}">
          <p>Price: $${product.price}</p>
          <p>${product.description}</p>
        </li>
      `).join("");
    }

    
    function render(products) {
      const ul = document.getElementById("product-list");
      ul.innerHTML = createProductLI(products);
    }

    
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => render(data))
      .catch(err => console.error("Error:", err));
