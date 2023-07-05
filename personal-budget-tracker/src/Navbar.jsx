import "./App.css"
import Logo from './Logo.png';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

const Navbar = () =>{
    return(
    <nav>
        <div id = "logoPlace">
          <a href="/">
            <img className="logo symbol" src={Logo} alt="logo" />
          </a>
        </div>
        <ul className="links">
          <li id="link">
            <Link to="/" id="aLink">Home</Link>
          </li>
          <li id="link">
            <Link to="/testPage" id="aLink">Test</Link>
          </li>
        </ul>
    </nav>

    );
}

export default Navbar;