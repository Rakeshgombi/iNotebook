import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import About from './Components/About';
import { Alert } from './Components/Alert';
import Home from './Components/Home';
import Login from "./Components/Login";
import Navbar from './Components/Navbar';
import Signup from "./Components/Signup";
import NoteState from './Context/NoteState';

function App() {
  return (
    <NoteState>
      <Router>
        <Navbar />
        {/* <Alert message="This is a amazing react course" /> */}
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login/>
            </Route>
            <Route exact path="/signup">
              <Signup/>
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
    </NoteState>
  );
}

export default App;
