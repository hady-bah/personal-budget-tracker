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
        </div>
        <ul className="links">
          <li id="link">
            <Link to="/" id="aLink">Home</Link>
          </li>
          <li id="link">
            <Link to="transactions" id="aLink">Transactions</Link>
          </li>
        </ul>
    </nav>

    );
}

export default Navbar;