import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link ,NavLink } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from "./components/Home/Home.js";
import Kids from "./components/Kids/Kids.js";
import Movies from "./components/Movies/Movies.js";
import Tv from "./components/Tv/Tv.js";
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
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
        );
        }

        export default App;
