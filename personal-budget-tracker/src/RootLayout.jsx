import "./App.css"
import Logo from './Logo.png';
import { Router, Route, Link, NavLink, Outlet } from 'react-router-dom';
import Navbar from "./Navbar";
import HomePage from "./Home";


export default function RootLayout(){

    return (
    <div>
        <header>
            <Navbar/>
        </header>

        <main>
            <Outlet/>
        </main>
            
    </div>

    );

}