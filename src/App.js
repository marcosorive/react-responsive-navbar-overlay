import React from 'react';
import {Navbar} from './components/Navbar/Navbar';
import {Portfolio} from './components/portfolio';
import {Blog} from './components/Blog';
import {Home} from './components/Home';
import {BrowserRouter, Route, Link} from 'react-router-dom'; 

export class App extends React.Component {
  render(){
    return(
      <BrowserRouter>
        <Navbar/>
        {/* <p style={{margin: "1em"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
        {/* <Portfolio/> */}
        {/* <Blog/> */}

        <Route path="/" exact component={Home} />
        <Route path="/blog" component={Blog} />
        <Route path="/portfolio" component={Portfolio} />
      </BrowserRouter>                            
    )
  }
}

