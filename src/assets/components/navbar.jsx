import React from "react";
import { Link } from "react-router-dom";



const Navbar = () => {
    return (
        <div className="nav">
            <div className="logo">
            <img src="https://www.freeiconspng.com/uploads/happy-birthday-cake-png-20.png" alt="" />
          <h1> Happy Cake</h1>
            </div>

            <div className="navtext">
                <Link to='/' className="textonav">Home</Link>
                <Link to='/About' className="textonav">About</Link>
                <Link to='/Contact' className="textonav">Contact</Link>
            </div>

        </div>

    )
}

export default Navbar