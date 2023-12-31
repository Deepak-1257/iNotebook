
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import  Alert  from './components/Alert';
import Signup from './components/Signup';
import Login from './components/Login';
import {useState} from "react"
import '../src/css/common.css'
function App() {
  const [alert, setalert] = useState(null);

  const showalert = (msg, type) => {
    setalert({
      msg: msg,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }

  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert alert={alert}/>
          <div className="container">
            <Switch>
              <Route exact path="/">
                <Home showalert={showalert}/>
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/login">
                <Login showalert={showalert} />
              </Route>
              <Route exact path="/signup">
                <Signup showalert={showalert} />
              </Route>
            </Switch>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
