import "./App.css"
import Logo from './Logo.png';
import { Router, Route, Link, Routes } from 'react-router-dom';

const Navbar = () =>{
    return(
    <nav>
        <div id = "logoPlace">
          <Link to="/" href="/">
            <img className="logo symbol" src={Logo} alt="logo" />
          </Link>
          <h1 id= "homeTitle">BUDGET BUDDY
            <p id = "powered">POWERED BY A.I.</p>
        </h1> 
        </div>
        <ul className="links">
          <li id="link">
            <Link to="/" id="aLink">Home</Link>
          </li>
          <li id="link">
            <Link to="transactions" id="aLink">Transactions</Link>
          </li>
          <li id="link">
            <Link to="chatGPT" id="aLink">Budget Buddy A.I.</Link>
          </li>
        </ul>
    </nav>

    );
}

export default Navbar;