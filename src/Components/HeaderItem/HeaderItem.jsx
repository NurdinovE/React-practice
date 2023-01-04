import React from "react";

import {Link} from "react-router-dom"

const HeaderItem = (props) =>{

    return (
        <li className="nav-item">
            {/*<a href={props.link}>{props.itemName}</a>*/}
            <Link to={props.link} className="nav-link">{props.itemName}</Link>
        </li>
    )

}


export default HeaderItem