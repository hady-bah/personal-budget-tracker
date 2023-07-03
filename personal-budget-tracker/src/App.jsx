import React, { useState, useEffect } from 'react'
import './App.css'
import TransactionsList from './transactionsList'
import Navbar from './Navbar';
import {IoMdAddCircle} from "react-icons/io"
import Logo from './Logo.png';
import ChatGPT from './components/ChatGPT';



function App() {


  const [transactions, setTransactions] = useState([]);

  //fetch data from db.json
  useEffect(() => {
    let ignore = false;

    async function fetchTransactions() {
      const response = await fetch('http://localhost:8000/transactions');
      const transactions = await response.json();
      if(!ignore) {
        setTransactions(transactions);
      }
      return transactions;
    }
    
    fetchTransactions();

    return () => {
      ignore = true;
    }
  }, []);

  //delete event
  const handleDelete = async (index) => {
    const transactionToDelete = transactions[index];
  
    try {
      // delete request
      const response = await fetch(`http://localhost:8000/transactions/${transactionToDelete.id}`, {
        method: "DELETE",
      });
  
      if (!response.ok) {
        // handle if request is not successfull
        throw new Error("Failed to delete transaction");
      }
  
      // update 
      setTransactions((prevTransactions) => {
        const updatedTransactions = [...prevTransactions];
        updatedTransactions.splice(index, 1);
        return updatedTransactions;
      });
    } catch (error) {
      // handles any errors 
      console.error(error);
    }
  };

  //add event
  const handleAdd = async (event) => {
    event.preventDefault();
    const amountInput = document.getElementById('amount-input');
    const descInput = document.getElementById('desc-input');
    const dateInput = document.getElementById('date-input');

    const newTransaction = {
      amount: amountInput.value,
      description: descInput.value,
      date: dateInput.value,
    };

    try {
      const response = await fetch('http://localhost:8000/transactions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTransaction),
      });

      if (!response.ok) {
        throw new Error('Failed to add transaction');
      }

      const addedTransaction = await response.json();

      setTransactions((prevTransactions) => [
        ...prevTransactions,
        addedTransaction,
      ]);

      amountInput.value = '';
      descInput.value = '';
      dateInput.value = '';
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <>
      <div className="header">
        <Navbar/>
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
          <button type="submit" id="add">
            <IoMdAddCircle style={{ fontSize: "28px" }}/>
          </button>
        </form>
      </div>

    </>
  );
}

export default App;











