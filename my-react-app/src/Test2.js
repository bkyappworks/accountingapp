import React, { useState } from 'react';
import Transaction from './Transaction';

const Test2 = ({ apiData }) => {
  const [accountNumber, setAccountNumber] = useState(null);

  const handleTransactionClick = () => {
    setAccountNumber(apiData[0].account_number);
  };

  return apiData ? (
    <div>
      <h1>Test2 Component</h1>
      <p>ID: {apiData[0].id}</p>
      <p>Account Number: {apiData[0].account_number}</p>
      <p>Current Balance: {apiData[0].current_balance}</p>
      <button onClick={handleTransactionClick}>View Transactions</button>
      {accountNumber && <Transaction accountNumber={accountNumber} />}
    </div>
  ) : null;
};

export default Test2;
