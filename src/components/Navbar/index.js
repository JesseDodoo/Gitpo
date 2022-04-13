import React from 'react';
import { NavLink, useNavigate} from 'react-router-dom';
import './style.css'

const Navbar = () => {
    const goTo = useNavigate()
    return (
        <nav>
            <NavLink className="home-link" to="/">Home</NavLink>
            <NavLink className="home-link" activeclassname="active" to="about">About</NavLink>
            <NavLink  className="home-link" to="search">Search</NavLink>
            <button onClick={() => goTo(-1)}>Back</button>
        </nav>
    );
}

export default Navbar;
