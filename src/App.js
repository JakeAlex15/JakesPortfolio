import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './styles.css';
import './App.css';
import Home from "./components/HomeComponent";
import Games from "./components/JSGameComponent";
import GamePage from "./components/GameComponent";
import ColorGuess from "./components/ColorGuessComponent";
import CodePage from "./components/CodeComponent";
import SnakeGame from './components/SnakeGame';

// import MenuHome from "./components/MenuHomeComponent";
// import Menu from "./components/MenuJS";
// import Form from './components/FormComponent';
// import Todo from './components/TodoComponent';
// import TodoList from './components/TodoListComponent';
// import TodoFunctionality from './components/TodoFunctionality';


function App() {
    return (
          <Switch>
            <Route path='/code-page' component={CodePage} />
            <Route path='/color-guess' component={ColorGuess} />
            <Route path='/js-games' component={Games} />
            <Route path='/game-page' component={GamePage} />
            <Route path='/snake' component={SnakeGame} />
            <Route path='/' component={Home} />

            {/* <Route path='todo-functionality' component={TodoFunctionality} /> */}
            {/* <Route path='/aboutus' component={MenuHome} /> */}
            {/* <Route path='/menu-home' component={MenuHome} /> */}
          </Switch>
    );
}

export default App;
