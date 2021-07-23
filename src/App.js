import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link ,NavLink } from "react-router-dom";
import Home from "./view/Home/Home.js";
import Kids from "./view/Kids/Kids.js";
import Movies from "./view/Movies/Movies.js";
import Tv from "./view/Tv/Tv.js";
import Playback from "./view/Playback/Playback.js";
import "./components/Navbar.css";


function App() {
    return (
        <div className="App">
            <Router>
                <header>
                    <div>
                        <nav>
                            <div className="top-nav-container">
                                <NavLink className="top-nav-option" activeClassName="current" exact to="/">Home</NavLink>
                                <NavLink className="top-nav-option" activeClassName="current" to="/movies">Movies</NavLink>
                                <NavLink className="top-nav-option" activeClassName="current" to="/tv">Tv</NavLink>
                                <NavLink className="top-nav-option" activeClassName="current" to="/kids">Kids</NavLink>
                            </div>
                        </nav>

                        {/* A <Switch> looks through its children <Route>s and
                        renders the first one that matches the current URL. */}
                    </div>

                </header>
                <Switch>
                    <Route path="/movies">
                        <Movies />
                    </Route>
                    <Route path="/tv">
                        <Tv />
                    </Route>
                    <Route path="/kids">
                        <Kids />
                    </Route>  
                    <Route path="/Playback">
                        <Playback />
                    </Route>  
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
        );
        }

        export default App;
