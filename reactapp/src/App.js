import Squeeze from "./components/Squeeze";
import './App.css';
import Login from "./components/user/Login";
import Signup from "./components/user/Signup";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={< Login />}></Route>
          <Route path='user/signup' element={< Signup />}></Route>
          <Route path='user/login' element={< Login />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
