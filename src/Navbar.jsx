import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import './Navbar.css'

export function Navbar({
    backgroundColor,
    fontColor,
    brand,
    links
}){

    const [isMenuClosed, setMenuClosed] = useState(true);

    return(
        <div className="nav-container" style={{backgroundColor: backgroundColor, color: fontColor}}>
        <nav>
            <div className="nav-brand">{brand}</div>
            <div className="nav-hamburguer-icon" onClick={() => setMenuClosed(!isMenuClosed)}>☰</div>
            <div className="nav-links">
                {links.map((node) =>{
                    return(<Link key={node.text} to={node.link} style={{color: fontColor}}>{node.text}</Link>);
                })}
            </div> 
        </nav>
        <div className={`overlay-container${isMenuClosed ? "-hidden" : "-show"}`}>
            <div style={{backgroundColor: backgroundColor}}>
                <div className="overlay-buttonClose" onClick={() => setMenuClosed(!isMenuClosed)}><span>&times;</span></div>
                <div className="overlay-menu-wrapper">
                    <div className="overlay-menu">
                        {links.map((node) =>{
                            return(<Link key={node.text} to={node.link} onClick={() => setMenuClosed(!isMenuClosed)} className="overlay-menu-item" style={{color: fontColor}}>{node.text}</Link>);
                        })}
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

Navbar.defaultProps = {
    backgroundColor : 'black',
    fontColor: 'white',
    brand: 'Navbar',
    links:[
        {text: "Home", link:"/"},
        {text: "Portfolio", link:"/portfolio"},
        {text: "Blog", link:"/blog"}
    ]
}