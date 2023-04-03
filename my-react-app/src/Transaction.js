import React, { useState, useEffect } from 'react';

const Transaction = ({ accountNumber, onViewAccountsClick }) => {
  const [transactions, setTransactions] = useState([]);
  // useEffect hook is called after the first render and every time accountNumber changes. 
  // It contains an asynchronous function that fetches the transaction data from a local server using the account number as a query parameter.
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://127.0.0.1:8000/testapp/transactions/?account=${accountNumber}`);
      const data = await response.json();
      setTransactions(data);
    }
    fetchData();
  }, [accountNumber]); // To ensures that the effect is only triggered when the accountNumber prop changes.

  return (
    <div>
      <h1>Transaction </h1>
      <button onClick={onViewAccountsClick}>View Accounts</button>
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