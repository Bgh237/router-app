import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigator(){
    

    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg -light">
                <Link className="navbar-brand" to ="/" >My React Page</Link>
                <div className="collapsenavbar-collapse" id ="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav -item active">
                            <Link className="nav-link" to="/">Home</Link>{' '}
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link> {' '}
                        </li>
                        <li className="nav -item">
                            <Link className="nav-link" to="/contact">Contact</Link>{' '}
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}