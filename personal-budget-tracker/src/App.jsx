import { useState } from 'react'
import './App.css'
import TransactionsList from './transactionsList'
import transactions from './transactions'
import Logo from './Logo.png';



function App() {

  return (
    <>
    <div className = "header">
      <a href="https://github.com/hady-bah/personal-budget-tracker/blob/main/README.md">
        <img className="logo symbol" src={Logo}  alt="logo" />
      </a>
    </div>
    
    
    <div className = "sidebar">
      <p id="sectionTitle">Transactions</p>
      {/* map function to iterate trhough the array and display transactions */}
      {transactions.map((transaction, index) => (
        <TransactionsList key={index} transactions={transaction} />
      ))}
    </div>

    <div id="newTransaction">
      <form>
        <p id="sectionTitle">New Transaction</p>
        <input type="text" id = "amount-input" placeholder="$"/>
        <input type="text" id = "desc-input" placeholder="description"/>
        <input type="date" id = "date-input"/>
      </form>
    </div>
    
    </>
  )
}

export default App


