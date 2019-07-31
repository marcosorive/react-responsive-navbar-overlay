import React from 'react';
import {CSSTransition} from 'react-transition-group';
import './Navbar.css'

export class Navbar extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            isMenuClosed: true
        }
        this.displayMenu = this.displayMenu.bind(this);
    }

    displayMenu(){
        this.setState({
            isMenuClosed : !this.state.isMenuClosed
        })
    }

    render(){
        return(
            <div className="nav-container" style={{backgroundColor: this.props.backgroundColor, color: this.props.fontColor}}>
            <nav>
                <h3>{this.props.brand}</h3>
                <span className="hamburguer-icon" onClick={this.displayMenu}>☰</span>
                <div className="navbar-links">
                    {this.props.links.map((node) =>{
                        return(<a href={node.link} style={{color: this.props.fontColor}}>{node.text}</a>);
                    })}
                </div> 
            </nav>
            <CSSTransition in={!this.state.isMenuClosed} className="overlay-menu" timeout={800} classNames="slideIn" mountOnEnter unmountOnExit>
                <div>
                    <div>Close</div>
                    <div>
                        {this.props.links.map((node) =>{
                            return(<a href={node.link} style={{color: this.props.fontColor}}>{node.text}</a>);
                        })}
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