# React responsive navbar

This is a responsive Navbar component for React that I'm working on.
In screens with more than 600px it displays a regular navbar. In smaller screens, a menu icon is displayed and it opens a menu that covers the screen.

## How to use

Import the component and put it inside a Router from react-router-dom, like this:

```javascript
import {BrowserRouter, Route} from 'react-router-drom';
import {Navbar} from 'react-responsive-navbar-overlay';
function myComponent(){
    return(
        <BrowserRouter>
            <Navbar/>
            /* These are the default routes, if you change the properties change the routes too. */
            <Route exact path="/" component={Home} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/blog" component={Blog} />
        </BrowserRouter>
    )
}    
```

## Props list

* **backgroundColor**: changes the color of the background in the navbar and the overlay menu.
    * Default: black
* **fontcolor**: changes the color of the font in the navbar and the overlay menu.
    * Default: white
* **brand**: Changes the text that appears in the left corner of the navbar.
    * Default: "Navbar"
* **links**: the text and links of the right links.
    * Default: "Home" to /, "Portfolio" to /portfolio and "Blog" to /blog