import React from 'react';
import {CSSTransition} from 'react-transition-group';
import './Navbar.css'

export class Navbar extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            isMenuClosed: true
        }
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu(){
        this.setState({
            isMenuClosed : !this.state.isMenuClosed
        })
    }

    render(){
        return(
            <div className="nav-container" style={{backgroundColor: this.props.backgroundColor, color: this.props.fontColor}}>
            <nav>
                <h3>{this.props.brand}</h3>
                <span className="hamburguer-icon" onClick={this.toggleMenu}>☰</span>
                <div className="navbar-links">
                    {this.props.links.map((node) =>{
                        return(<a href={node.link} style={{color: this.props.fontColor}}>{node.text}</a>);
                    })}
                </div> 
            </nav>
            <CSSTransition in={!this.state.isMenuClosed} className="overlay-container" timeout={800} classNames="slideIn" mountOnEnter unmountOnExit>
                <div>
                    <div className="overlay-buttonClose" onClick={this.toggleMenu}><span>&times;</span></div>
                    <div className="overlay-menu-wrapper">
                        <div className="overlay-menu">
                            {this.props.links.map((node) =>{
                                return(<a href={node.link} className="overlay-menu-item" style={{color: this.props.fontColor}}>{node.text}</a>);
                            })}
                        </div>
                    </div>
                </div>
            </CSSTransition>
        </div>
        )
    }
}

Navbar.defaultProps = {
    backgroundColor : 'black',
    fontColor: 'white',
    brand: 'Navbar',
    links:[
        {text: "Home", link:"/"},
        {text: "Portfolio", link:"/"},
        {text: "Blog", link:"/"}
    ]
}