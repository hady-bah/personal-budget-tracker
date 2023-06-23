import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id = 'root'>
        <a href="">
          <img className="logo moneyway" src="https://static.coinpaprika.com/coin/smcn-safeminecoin/logo.png?rev=10773571"  alt="MoneyWay logo" />
        </a>  
      </div>
      
    </>
  )
}

export default App
