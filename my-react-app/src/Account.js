import React, { useState } from 'react';
import Transaction from './Transaction';

const Account = ({ apiData }) => {
  const [accountNumber, setAccountNumber] = useState(null);
  const [displayTransactions, setDisplayTransactions] = useState(false);

  const handleTransactionClick = () => {
    setAccountNumber(apiData[0].id);
    setDisplayTransactions(true);
  };

  return apiData && !displayTransactions ? (
    <div>
      <h1>Account </h1>
      <p>ID: {apiData[0].id}</p>
      <p>Account Number: {apiData[0].account_number}</p>
      <p>Current Balance: {apiData[0].current_balance}</p>
      <button onClick={handleTransactionClick}>View Transactions</button>
    </div>
  ) : displayTransactions ? (
    <Transaction accountNumber={accountNumber} />
  ) : null;
};

export default Account;