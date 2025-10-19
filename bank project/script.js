let accounts = [];


const createAccountForm = document.getElementById("createAccountForm");
const accountsContainer = document.getElementById("accountsContainer");


createAccountForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("accountName").value;
  const initialBalance = parseFloat(document.getElementById("initialBalance").value);

  const newAccount = {
    id: Date.now(), 
    name,
    balance: initialBalance,
    transactions: []
  };

  accounts.push(newAccount);
  renderAccounts();
  createAccountForm.reset();
});

// ყველა ანგარიშის რენდერი
function renderAccounts() {
  accountsContainer.innerHTML = "";

  accounts.forEach(account => {
    const accountDiv = document.createElement("div");
    accountDiv.classList.add("account-card");

    accountDiv.innerHTML = `
      <strong>${account.name}</strong> — Balance: $${account.balance.toFixed(2)}
      <div style="margin-top: 5px;">
        <button onclick="deposit(${account.id})">Deposit</button>
        <button onclick="withdraw(${account.id})">Withdraw</button>
        <button onclick="transfer(${account.id})">Transfer</button>
        <button onclick="showTransactions(${account.id})">Transactions</button>
      </div>
      <div id="transactions-${account.id}" style="margin-top:10px;"></div>
    `;

    accountsContainer.appendChild(accountDiv);
  });
}

//  Deposit
function deposit(id) {
  const amount = parseFloat(prompt("Enter amount to deposit:"));
  if (amount > 0) {
    const account = accounts.find(a => a.id === id);
    account.balance += amount;
    account.transactions.push({ type: "Deposit", amount });
    renderAccounts();
  } else {
    alert("Invalid amount");
  }
}

// Withdraw
function withdraw(id) {
  const amount = parseFloat(prompt("Enter amount to withdraw:"));
  const account = accounts.find(a => a.id === id);

  if (amount > 0 && amount <= account.balance) {
    account.balance -= amount;
    account.transactions.push({ type: "Withdraw", amount });
    renderAccounts();
  } else {
    alert("Invalid amount or insufficient balance");
  }
}

// Transfer
function transfer(id) {
  const recipientName = prompt("Enter recipient name:");
  const recipient = accounts.find(a => a.name === recipientName);
  const sender = accounts.find(a => a.id === id);

  if (!recipient) {
    alert("Recipient not found");
    return;
  }

  const amount = parseFloat(prompt("Enter amount to transfer:"));
  if (amount > 0 && amount <= sender.balance) {
    sender.balance -= amount;
    recipient.balance += amount;
    sender.transactions.push({ type: `Transfer to ${recipient.name}`, amount });
    recipient.transactions.push({ type: `Received from ${sender.name}`, amount });
    renderAccounts();
  } else {
    alert("Invalid amount or insufficient balance");
  }
}

// 
function showTransactions(id) {
  const account = accounts.find(a => a.id === id);
  const transDiv = document.getElementById(`transactions-${id}`);
  transDiv.innerHTML = "<strong>Transactions:</strong><br>";

  account.transactions.forEach(t => {
    transDiv.innerHTML += `${t.type}: $${t.amount}<br>`;
  });
}
