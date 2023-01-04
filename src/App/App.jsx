import React from "react";
import {Switch, Route} from "react-router-dom";
import Header from "../Components/Header/Header.jsx";
import Counter from "../Components/Counter/Counter.jsx";
import Timer from "../Components/Timer/Timer.jsx";

import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/counter">
          <Counter />
        </Route>
        <Route path="/timer">
          <Timer />
        </Route>
      </Switch>
    </div>
  )
}

export default App
