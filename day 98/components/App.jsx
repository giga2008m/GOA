import { useState } from "react";
import Balance from "./components/Balance";
import Controls from "./components/Controls";
import TransactionHistory from "./components/TransactionHistory";
import "./App.css";

function App() {
  const [balance, setBalance] = useState(1000);
  const [transactions, setTransactions] = useState([]);

  const handleDeposit = (amount) => {
    const newBalance = balance + amount;
    setBalance(newBalance);
    setTransactions([
      ...transactions,
      { type: "დამატება", amount, newBalance, date: new Date().toLocaleString() },
    ]);
  };

  const handleWithdraw = (amount) => {
    if (balance >= amount) {
      const newBalance = balance - amount;
      setBalance(newBalance);
      setTransactions([
        ...transactions,
        { type: "გატანა", amount, newBalance, date: new Date().toLocaleString() },
      ]);
    } else {
      alert("არასაკმარისი თანხა 😞");
    }
  };

  return (
    <div className="app">
      <h1>React Bank 🏦</h1>
      <Balance balance={balance} />
      <Controls onDeposit={handleDeposit} onWithdraw={handleWithdraw} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
}

export default App;
