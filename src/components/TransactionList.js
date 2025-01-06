import React from "react";

const TransactionList = ({ transactions, calculatePoints }) => {
  return (
    <div>
      <h3>Transactions:</h3>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>
            {transaction.month} - ${transaction.amount} ={" "}
            {calculatePoints(transaction.amount)} points
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
