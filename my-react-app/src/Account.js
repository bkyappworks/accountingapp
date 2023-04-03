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
      <h1>Accounts</h1>
      {apiData.map(account => (
        <div key={account.id}>
          <p>ID: {account.id}</p>
          <p>Account Number: {account.account_number}</p>
          <p>Current Balance: {account.current_balance}</p>
          <button onClick={() => handleTransactionClick(account.id)}>View Transactions</button>
        </div>
      ))}
    </div>

  ) : displayTransactions ? (
    <Transaction accountNumber={accountNumber} />
  ) : null;
};

export default Account;