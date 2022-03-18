import React from 'react';

const LoginNavigation = () => {
    return (
        <div>
            <nav
                className="navbar navbar-expand-lg navbar-inverse fixed-top"
                id="mainNav"
            >
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img src="assets/img/navbar-logo.svg" alt="..." />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarResponsive"
                        aria-controls="navbarResponsive"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        Menu
                        <i className="fas fa-bars ms-1" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                    Home
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default LoginNavigation;