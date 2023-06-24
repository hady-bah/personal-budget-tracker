import { useState } from 'react'
import './App.css'
import TransactionsList from './transactionsList'
import transactions from './transactions'


function App() {

  return (
    <>
      <a href="">
        <img className="logo moneyway" src="https://static.coinpaprika.com/coin/smcn-safeminecoin/logo.png?rev=10773571"  alt="MoneyWay logo" />
      </a>
      
      <TransactionsList transactions={transactions[0]}/>
      
    </>
  )
}

export default App


