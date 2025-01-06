export const fetchTransactionData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { customerId: 1, month: "January", amount: 120 },
        { customerId: 1, month: "February", amount: 80 },
        { customerId: 1, month: "March", amount: 150 },
        { customerId: 2, month: "January", amount: 90 },
        { customerId: 2, month: "February", amount: 55 },
        { customerId: 2, month: "March", amount: 200 },
        { customerId: 3, month: "January", amount: 250 },
        { customerId: 3, month: "February", amount: 60 },
        { customerId: 3, month: "March", amount: 120 },
      ]);
    }, 1000);
  });
};
