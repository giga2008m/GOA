  async function fetchAndDisplayPosts() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1/posts');

        if (!response.ok) {
          throw new Error('HTTP შეცდომა: ' + response.status);
        }

        const posts = await response.json();

        const ul = document.getElementById('posts-list');
        posts.forEach(post => {
          const li = document.createElement('li');
          li.textContent = post.title;
          ul.appendChild(li);
        });
      } catch (error) {
        
        console.error('დაფიქსირდა შეცდომა:', error);
        const ul = document.getElementById('posts-list');
        const li = document.createElement('li');
        li.textContent = 'შეცდომა დაფიქსირდა: ' + error.message;
        ul.appendChild(li);
      }
    }

    fetchAndDisplayPosts();
