     function checkEvenOdd(number) {
      if (number % 2 === 0) {
        return "even";
      } else {
        return "odd";
      }
    }

    function checkNumbers() {
      let num1 = parseInt(prompt("შეიყვანე პირველი რიცხვი:"));
      let num2 = parseInt(prompt("შეიყვანე მეორე რიცხვი:"));

      
      if (isNaN(num1) || isNaN(num2)) {
        alert("გთხოვთ შეიყვანოთ მხოლოდ რიცხვები!");
        return;
      }

      let sum = num1 + num2;

      let check1 = checkEvenOdd(num1);
      let check2 = checkEvenOdd(num2);

      const resultDiv = document.getElementById("result");
      resultDiv.innerHTML = `
        <p>Sum = ${sum}</p>
        <p>${num1} - ${check1}</p>
        <p>${num2} - ${check2}</p>
      `;
    }

    
    const btn = document.getElementById("checkBtn");
    btn.addEventListener("click", checkNumbers);
