import { Link } from "react-router-dom";
import React from "react";

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>Error 404</h1>
            <p>Page not found</p>
            <Link to='/'>Go Back to Homepage</Link>
        </div>
    );
}

export default NotFound;