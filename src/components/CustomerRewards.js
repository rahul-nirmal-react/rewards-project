import React, { useEffect, useState } from "react";
import { fetchTransactionData } from "../services/api";
import TransactionList from "./TransactionList";
import TotalRewards from "./TotalRewards";

const CustomerRewards = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTransactionData = async () => {
      const data = await fetchTransactionData();
      setTransactions(data);
      setLoading(false);
    };
    getTransactionData();
  }, []);

  const calculatePoints = (amount) => {
    if (amount > 100) {
      return 2 * (amount - 100) + 50; // 2 points for every dollar over 100 and 1 point for the next 50
    } else if (amount > 50) {
      return amount - 50; // 1 point for every dollar between 50 and 100
    }
    return 0; // No points if the amount is below 50
  };

  const customers = transactions.reduce((acc, transaction) => {
    if (!acc[transaction.customerId]) {
      acc[transaction.customerId] = {
        name: `Customer ${transaction.customerId}`,
        transactions: [],
      };
    }
    acc[transaction.customerId].transactions.push({
      month: transaction.month,
      amount: transaction.amount,
    });
    return acc;
  }, {});

  return (
    <div>
      <h1>Customer Rewards Program</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        Object.keys(customers).map((customerId) => {
          const customer = customers[customerId];
          return (
            <div key={customerId}>
              <h2>{customer.name}</h2>
              <TransactionList
                transactions={customer.transactions}
                calculatePoints={calculatePoints}
              />
              <TotalRewards
                transactions={customer.transactions}
                calculatePoints={calculatePoints}
              />
            </div>
          );
        })
      )}
    </div>
  );
};

export default CustomerRewards;
