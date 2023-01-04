import React from "react";
import {Route,Routes} from "react-router-dom";
import Header from "../Components/Header/Header.jsx";
import Counter from "../Components/Counter/Counter.jsx";
import Timer from "../Components/Timer/Timer.jsx";

import './App.css'

function App() {
  return (
      <div className="App">
          <Header/>
          <Routes>
              <Route path="/counter" element={<Counter/>}/>
              <Route path="/timer" element={<Timer/>}/>
          </Routes>
      </div>

  )
}

export default App
