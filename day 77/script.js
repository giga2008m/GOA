   let users = JSON.parse(localStorage.getItem("users")) || [];

    const authBtn = document.getElementById("authBtn");
    const regBtn = document.getElementById("regBtn");
    const usersUl = document.getElementById("usersUl");

    
    function renderUsers() {
      usersUl.innerHTML = "";
      users.forEach(user => {
        const li = document.createElement("li");
        li.textContent = `${user.fullname} (${user.email})`;
        usersUl.appendChild(li);
      });
    }
    renderUsers();

    // Authorization ღილაკი
    authBtn.addEventListener("click", () => {
      const email = document.getElementById("authEmail").value.trim();
      const fullname = document.getElementById("authFullname").value.trim();
      const password = document.getElementById("authPassword").value.trim();

      if (!email || !fullname || !password) {
        alert("Please fill all fields");
        return;
      }

      const exists = users.some(u => u.email === email);
      if (exists) {
        alert("The email already registered");
        return;
      }

      const newUser = { email, fullname, password };
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));

      renderUsers();
      alert("User authorized successfully");
    });

    // Registration ღილაკი
    regBtn.addEventListener("click", () => {
      const email = document.getElementById("regEmail").value.trim();
      const password = document.getElementById("regPassword").value.trim();

      if (!email || !password) {
        alert("Please fill all fields");
        return;
      }

      const found = users.find(u => u.email === email && u.password === password);
      if (found) {
        alert("You have registered successfully");
      } else {
        alert("Your registration is unsuccessful");
      }
    });
