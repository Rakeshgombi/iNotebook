import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import About from './Components/About';
import Alert from "./Components/Alert";
import Home from './Components/Home';
import Login from "./Components/Login";
import Navbar from './Components/Navbar';
import Signup from "./Components/Signup";
import NoteState from './Context/NoteState';
import React, { useState } from 'react';

function App() {
  const [alert, setalert] = useState(null)

  const showAlert = (message, type) => {
    setalert({ msg: message, type: type })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }
  return (
    <NoteState>
      <Router>
        <Navbar />
        <Alert alert={alert} />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home showAlert={showAlert} />
            </Route>
            <Route exact path="/login">
              <Login  showAlert={showAlert}/>
            </Route>
            <Route exact path="/signup" >
              <Signup  showAlert={showAlert}/>
            </Route>
            <Route exact path="/about" >
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
    </NoteState>
  );
}

export default App;
