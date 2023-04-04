import React, { useState } from 'react';
import Transaction from './Transaction';
// a functional component that takes in an object containing the "apiData" prop as an argument.
const Account = ({ apiData }) => {
  // Declares a state variable named "accountNumber" and its corresponding state update function "setAccountNumber" using the useState hook
  const [accountNumber, setAccountNumber] = useState(null);
  // Declares a state variable named "displayTransactions" and its corresponding state update function "setDisplayTransactions" using the useState hook.
  const [displayTransactions, setDisplayTransactions] = useState(false);
  // sets the "accountNumber" state to the first account ID in the "apiData" prop and sets the "displayTransactions" state to true
  const handleTransactionClick = (accountId) => {
    // setAccountNumber(apiData[0].id);
    setAccountNumber(accountId)
    setDisplayTransactions(true);
  };
  // sets the "displayTransactions" state to false
  const handleViewAccountsClick = () => {
    setDisplayTransactions(false);
  };

  return apiData && !displayTransactions ? (
    <div>
      <h1>Accounts</h1>
      {apiData.map(account => (
        <div key={account.id}>
          <p>ID: {account.id}</p>
          <p>Account Number: {account.account_number}</p>
          <p>Current Balance: {account.current_balance}</p>
          {/* <button onClick={() => handleTransactionClick(account.id)}>View Transactions</button> */}
          <button key={account.id} onClick={() => handleTransactionClick(account.id)}>
            Account {account.id}
          </button>
        </div>
      ))}
    </div>

  ) : displayTransactions ? (
    <Transaction accountNumber={accountNumber} onViewAccountsClick={handleViewAccountsClick} />
  ) : null;
};

export default Account;