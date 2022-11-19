import React from "react";
import classes from './Header.module.css';
import {Outlet} from "react-router-dom";
import Navbar from "../Navbar/Navbar";


const Header = () => {
    return (
        <>
        <header className={classes.header}>
            <img className={classes.imageHeader} src='https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg?uselang=ru'/>
        </header>
        <Navbar />
    <Outlet />

    <footer> 2021</footer>
    </>


)
}

export default Header