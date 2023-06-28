import React, { useState } from 'react';

const TransactionsHandler = () => {
  const [transactions, setTransactions] = useState([]);
  const [newTransaction, setNewTransaction] = useState('');

  const handleInputChange = (e) => {
    setNewTransaction(e.target.value);
  };

  const handleAddTransaction = () => {
    if (newTransaction.trim() !== '') {
      setTransactions([...transactions, newTransaction]);
      setNewTransaction('');
    }
  };

  const handleDeleteTransaction = (index) => {
    const updatedTransactions = [...transactions];
    updatedTransactions.splice(index, 1);
    setTransactions(updatedTransactions);
  };

  return (
    <div>
      <h1>Budget Tracker</h1>
      <form>
        <input
          type="text"
          value={newTransaction}
          onChange={handleInputChange}
          placeholder="Enter a new transaction"
        />
        <button type="button" onClick={handleAddTransaction}>
          Add Transaction
        </button>
      </form>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>
            {transaction}
            <button type="button" onClick={() => handleDeleteTransaction(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionsHandler;
