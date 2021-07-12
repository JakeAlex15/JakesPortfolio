import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './styles.css';
import './App.css';
import Home from "./components/HomeComponent";
import Games from "./components/JSGameComponent";
import GamePage from "./components/GameComponent";
import ColorGuess from "./components/ColorGuessComponent";
import CodePage from "./components/CodeComponent";
import MenuHome from "./components/MenuHomeComponent";
import Menu from "./components/MenuJS";
import SnakeGame from './components/SnakeGame';


function App() {
    return (
          <Switch>
            <Route path='/aboutus' component={MenuHome} />
            <Route path='/menu-home' component={MenuHome} />
            <Route path='/code-page' component={CodePage} />
            <Route path='/color-guess' component={ColorGuess} />
            <Route path='/js-games' component={Games} />
            <Route path='/game-page' component={GamePage} />
            <Route path='/snake' component={SnakeGame} />
            <Route path='/' component={Home} />
          </Switch>
    );
}

export default App;
