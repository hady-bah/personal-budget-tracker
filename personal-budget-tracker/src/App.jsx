import React, { useState } from 'react'
import './App.css'
import TransactionsList from './transactionsList'
import Logo from './Logo.png';
import ChatGPT from './components/ChatGPT';


function App() {


  const [transactions, setTransactions] = useState([]);

  const handleDelete = (index) => {
    setTransactions((prevTransactions) => {
      const updatedTransactions = [...prevTransactions];
      updatedTransactions.splice(index, 1);
      return updatedTransactions;
    });
  };

  const handleAdd = (event) => {
    event.preventDefault();
    const amountInput = document.getElementById('amount-input');
    const descInput = document.getElementById('desc-input');
    const dateInput = document.getElementById('date-input');

    const newTransaction = {
      amount: amountInput.value,
      description: descInput.value,
      date: dateInput.value,
    };

    setTransactions((prevTransactions) => [...prevTransactions, newTransaction]);

    amountInput.value = '';
    descInput.value = '';
    dateInput.value = '';
  };

  return (
    <>
      <div className="header">
        <nav>
          <img className="logo symbol" src={Logo} alt="logo" />
        </nav>
      </div>

      <div className="sidebar">
        <p id="sectionTitle">Transactions</p>
        {transactions.map((transaction, index) => (
          <TransactionsList
            key={index}
            transactions={transaction}
            onDelete={() => handleDelete(index)}
          />
        ))}
      </div>

      <div id="newTransaction">
        <form onSubmit={handleAdd}>
          <p id="sectionTitle">New Transaction</p>
          <input type="text" id="amount-input" placeholder="$" />
          <input type="text" id="desc-input" placeholder="description" />
          <input type="date" id="date-input" />
          <button type="submit" id="add">Add</button>
        </form>
      </div>

    </>
  );
}

export default App;











