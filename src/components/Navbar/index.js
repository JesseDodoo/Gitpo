import React from 'react';
import { NavLink, useNavigate} from 'react-router-dom';

const Navbar = () => {
    const goTo = useNavigate()
    return (
        <nav>
            <NavLink className="home-link" to="/">Home</NavLink>
            <NavLink activeclassname="active" to="about">About</NavLink>
            <NavLink  to="search">Search</NavLink>
            <button onClick={() => goTo(-1)}>Back</button>
        </nav>
    );
}

export default Navbar;
