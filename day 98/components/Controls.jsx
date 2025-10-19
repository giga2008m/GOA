import { useState } from "react";

function Controls({ onDeposit, onWithdraw }) {
  const [amount, setAmount] = useState("");

  const handleDepositClick = () => {
    if (amount && amount > 0) {
      onDeposit(Number(amount));
      setAmount("");
    }
  };

  const handleWithdrawClick = () => {
    if (amount && amount > 0) {
      onWithdraw(Number(amount));
      setAmount("");
    }
  };

  return (
    <div className="controls">
      <input
        type="number"
        placeholder="შეიყვანე თანხა"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleDepositClick}>დამატება</button>
      <button onClick={handleWithdrawClick}>გატანა</button>
    </div>
  );
}

export default Controls;
