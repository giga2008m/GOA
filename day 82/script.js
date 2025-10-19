 async function fetchProducts() {
      const url = 'https://fakestoreapi.com/products';

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP შეცდომა! სტატუსი: ${response.status}`);
        }

        const data = await response.json();
        displayProducts(data); 
      } catch (error) {
        console.error('მოთხოვნის შეცდომა:', error);
      }
    }

    
    function displayProducts(products) {
      const list = document.getElementById('product-list');
      list.innerHTML = ""; 
      products.forEach(product => {
        const li = document.createElement('li');
        li.textContent = `${product.title} - $${product.price}`;
        list.appendChild(li);
      });
    }

   
    fetchProducts();

// try ბლოკში ვწერთ იმ კოდს,სადაც შესაძლოა მოხდეს შეცდომა 
// catch ბლოკი მუშაობს მაშინ,როცა try ბლოკში რაიმე შეცდომა მოხდება