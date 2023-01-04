import React from "react";
import { Link } from "react-router-dom";

import HeaderItem from "../HeaderItem/HeaderItem.jsx";

const Header = () => {

    return (
        <div>
            <nav className="navbar">
                <div className="container">
                    <Link to='/' className="navbar-brand">Vite React Project</Link>
                    <div className="collapse">
                        <ul className="navbar-nav">
                            <HeaderItem itemName="Counter" link='/counter' />
                            <HeaderItem itemName="Timer" link='/timer' />
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )

}

export default Header