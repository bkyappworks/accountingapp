import React, { useState, useEffect } from 'react';

const Transaction = ({ accountNumber }) => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://127.0.0.1:8000/testapp/transactions/?account=${accountNumber}`);
      const data = await response.json();
      setTransactions(data);
    }
    fetchData();
  }, [accountNumber]);

  return (
    <div>
      <h1>Transaction </h1>
      {/* <p>Account Number: {accountNumber}</p> */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Transaction Type</th>
            <th>Note</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.date}</td>
              <td>{transaction.transaction_type}</td>
              <td>{transaction.note}</td>
              <td>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transaction;

// http://127.0.0.1:8000/testapp/transactions/?account=${accountNumber}
