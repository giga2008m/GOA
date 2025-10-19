function TransactionHistory({ transactions }) {
  return (
    <div className="history">
      <h3>ტრანზაქციების ისტორია</h3>
      {transactions.length === 0 ? (
        <p>ჯერ არ არის ტრანზაქცია</p>
      ) : (
        <ul>
          {transactions.map((t, index) => (
            <li key={index}>
              <strong>{t.type}</strong> - {t.amount} ₾ |
              ბალანსი: {t.newBalance} ₾ |
              <em>{t.date}</em>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TransactionHistory;
