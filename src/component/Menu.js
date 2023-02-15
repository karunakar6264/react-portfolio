import React from "react";
import { NavLink } from "react-router-dom";

function Menu(props){
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-primary">
            <div className="container">
                <NavLink to={'/'} className="navbar-brand">portfolio</NavLink>

                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="Menu">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to={'/'} className="nav-link">Home</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to={'/about'} className="nav-link">about</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={'/resume'} className="nav-link">resume</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={'/projects'} className="nav-link">projects</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={'/contact'} className="nav-link">contact</NavLink>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Menu