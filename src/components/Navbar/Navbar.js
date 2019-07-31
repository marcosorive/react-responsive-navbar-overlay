import React from 'react';
import {CSSTransition} from 'react-transition-group';
import './Navbar.css'
import {Link} from 'react-router-dom';

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
                <div className="nav-brand">{this.props.brand}</div>
                <div className="nav-hamburguer-icon" onClick={this.toggleMenu}>☰</div>
                <div className="nav-links">
                    {this.props.links.map((node) =>{
                        return(<Link key={node.text} to={node.link} style={{color: this.props.fontColor}}>{node.text}</Link>);
                    })}
                </div> 
            </nav>
            <CSSTransition in={!this.state.isMenuClosed} className="overlay-container" timeout={800} classNames="slideIn" mountOnEnter unmountOnExit>
                <div>
                    <div className="overlay-buttonClose" onClick={this.toggleMenu}><span>&times;</span></div>
                    <div className="overlay-menu-wrapper">
                        <div className="overlay-menu">
                            {this.props.links.map((node) =>{
                                return(<Link key={node.text} to={node.link} onClick={this.toggleMenu} className="overlay-menu-item" style={{color: this.props.fontColor}}>{node.text}</Link>);
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
        {text: "Portfolio", link:"/portfolio"},
        {text: "Blog", link:"/blog"}
    ]
}