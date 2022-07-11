import React from 'react';
import { Link } from 'react-router-dom';  // Link prevents requests to the server when anchor tags are used

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>My Blogs</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">Create New Blog</Link>
            </div>
        </nav>
    );
}

export default Navbar;