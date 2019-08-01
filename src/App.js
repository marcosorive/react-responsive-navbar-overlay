import React from 'react';
import {Navbar} from './components/Navbar/Navbar';
import {Portfolio} from './components/portfolio';
import {Blog} from './components/Blog';
import {Home} from './components/Home';
import {BrowserRouter, Route} from 'react-router-dom'; 

export class App extends React.Component {
  render(){
    return(
      <BrowserRouter>
        <Navbar/>
        <Route path="/" exact component={Home} />
        <Route path="/blog" component={Blog} />
        <Route path="/portfolio" component={Portfolio} />
      </BrowserRouter>                            
    )
  }
}

