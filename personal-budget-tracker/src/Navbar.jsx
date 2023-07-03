import "./App.css"
import Logo from './Logo.png';

const Navbar = () =>{
    return(
    <nav>
        <div id = "logoPlace">
            <img className="logo symbol" src={Logo} alt="logo" />
        </div>
        <div className="links">
            <a href="/">Home</a>
            <a href="/ChatGPT">Chat</a>
        </div>
    </nav>

    );
}

export default Navbar;