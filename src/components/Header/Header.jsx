import React from 'react';
import h from "./Header.module.css";

const Header = () => {
    return (
        <header className = {h.header}>
            <img src='https://i.pinimg.com/236x/71/b3/e4/71b3e4159892bb319292ab3b76900930.jpg'></img>
        </header>
    );
}

export default Header;