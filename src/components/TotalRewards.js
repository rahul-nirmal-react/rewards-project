import React from "react";

const TotalRewards = ({ transactions, calculatePoints }) => {
  const totalPoints = transactions.reduce(
    (total, transaction) => total + calculatePoints(transaction.amount),
    0
  );

  return (
    <div>
      <h3>Total Points: {totalPoints}</h3>
    </div>
  );
};

export default TotalRewards;
