import "./App.css"
import Logo from './Logo.png';

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
            <a href="/" id="homeLink">Home</a>
          </li>
          <li id="link">
            <a href="/ChatGPT" id="homeLink">Chat</a>
          </li>
        </ul>
    </nav>

    );
}

export default Navbar;