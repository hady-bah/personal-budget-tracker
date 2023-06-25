import { useState } from 'react'
import './App.css'
import TransactionsList from './transactionsList'
import transactions from './transactions'


function App() {

  return (
    <>
    <div className = "header">
      <a href="https://github.com/hady-bah/personal-budget-tracker/blob/main/README.md">
        <img className="logo moneyway" src="https://static.coinpaprika.com/coin/smcn-safeminecoin/logo.png?rev=10773571"  alt="MoneyWay logo" />
      </a>
    </div>
    
    <div className = "sidebar">
      {/* map function to iterate trhough the array and display transactions */}
      {transactions.map((transaction, index) => (
        <TransactionsList key={index} transactions={transaction} />
      ))}
    </div>
    
    </>
  )
}

export default App


