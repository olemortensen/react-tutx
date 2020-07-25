import React from 'react';
import './App.css';
import {HashRouter, NavLink, Route} from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Files from "./files";
import About from "./about";
import Main from "./main"

function App() {
  return (
    <div className="App" id="app">
        <HashRouter>
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <MenuIcon/>
                        </IconButton>
                        <NavLink color="inherit" to="/main" className="app-link">Main</NavLink>
                        <NavLink color="inherit" to="/files" className="app-link">Files</NavLink>
                        <NavLink color="inherit" to="/about" className="app-link">About</NavLink>
                    </Toolbar>
                </AppBar>
            </div>
            <div className="content">
                <Route exact path="/" component={Main}/>
                <Route path="/files" component={Files}/>
                <Route path="/about" component={About}/>
            </div>
        </HashRouter>
    </div>
  );
}

export default App;
