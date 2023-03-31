import React from 'react';

const Transaction = ({ accountNumber }) => {
  return (
    <div>
      <h1>Transaction Component</h1>
      <p>Account Number: {accountNumber}</p>
    </div>
  );
};

export default Transaction;
